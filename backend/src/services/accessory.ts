import { AppError } from "../utils/AppError";

import type {
  CreateAccessoryInput,
  UpdateAccessoryInput,
} from "../types/accessory";
import { Accessory } from "../models/accessories";
import { deleteImages, formatCloudinaryMedia, uploadImages } from "../utils/cloudinary";
import { ExistingImage, FormattedImage, ProductQuery } from "../types/ebike";


export const createAccessoryService = async (
  data: CreateAccessoryInput,
  files: Express.Multer.File[]
) => {
  let images: Array<ReturnType<typeof formatCloudinaryMedia>> = [];

  if (files?.length) {
    const uploads = await uploadImages(files, "accessories");

    console.log("uploads", uploads)


    images = uploads.map(formatCloudinaryMedia)
  }

  const accessory =
    await Accessory.create({
      ...data,
      images,
    });

  return accessory;
};



export const updateAccessoryService = async (
  accessoryId: string,
  data: Partial<UpdateAccessoryInput>,
  files: Express.Multer.File[],
  existingImages: ExistingImage[],
  removedImages: string[]
) => {
  const accessory = await Accessory.findById(accessoryId);
  if (!accessory) {
    throw new AppError("Accessory not found", 404);
  };

  if (removedImages.length) {
    await deleteImages(
      removedImages
    );
  }

  let uploadedImages: FormattedImage[] = [];
  if (files?.length) {
    const uploads =
      await uploadImages(
        files,
        "accessories"
      );
    uploadedImages =
      uploads.map(
        formatCloudinaryMedia
      );
  }
  const finalImages = [
    ...existingImages,
    ...uploadedImages
  ];
  accessory.set({
    ...data,
    images: finalImages,
  });

  await accessory.save();
  return accessory;
};

export const getAccessoryService =
  async (accessoryId: string) => {
    const accessory =
      await Accessory.findById(accessoryId)
        .populate(
          "compatibleModels"
        )

    if (!accessory) {
      throw new AppError(
        "Accessory not found",
        404
      );
    }

    if (!accessory.isActive) {
      throw new AppError("Accessory is currently not available.")
    }

    return accessory;
  };


export const getAccessoriesService = async (
  query: ProductQuery
) => {
  const {
    page = "1",
    limit = "6",

    category,

    minPrice,
    maxPrice,

    inventoryStatus,

    featured,
    newArrival,

    search,

    sort = "newest",
  } = query;

  const filters: Record<string, any> = {
    isActive: true,
  };

  if (category) {
    filters.category = category;
  }

  if (inventoryStatus) {
    filters.inventoryStatus =
      inventoryStatus;
  }

  if (featured === "true") {
    filters.isFeatured = true;
  }

  if (newArrival === "true") {
    filters.isNewArrival = true;
  }

  if (search) {
    filters.$or = [
      {
        name: {
          $regex: search,
          $options: "i",
        },
      },
      {
        description: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  if (
    minPrice !== undefined ||
    maxPrice !== undefined
  ) {
    const priceFilter: Record<string, number> = {};

    if (minPrice) {
      priceFilter.$gte = Number(minPrice);
    }

    if (maxPrice) {
      priceFilter.$lte = Number(maxPrice);
    }

    filters.price = priceFilter;
  }

  let sortOption = {};

  switch (sort) {
    case "price-asc":
      sortOption = {
        price: 1,
      };
      break;

    case "price-desc":
      sortOption = {
        price: -1,
      };
      break;

    case "rating":
      sortOption = {
        averageRating: -1,
      };
      break;

    case "newest":
      sortOption = {
        createdAt: -1,
      };
      break;

    default:
      sortOption = {
        createdAt: -1,
      };
  }

  const pageNumber = Math.max(1, Number(page) || 1);

  const limitNumber = Math.max(1, Number(limit) || 6);

  const skip =
    (pageNumber - 1) * limitNumber;

  const [accessories, total, categoryCounts] = await Promise.all([
    Accessory.find(filters)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber)
      .lean(),

    Accessory.countDocuments(
      filters
    ),
    Accessory.aggregate([
      {
        $match: {
          isActive: true
        }
      },

      {
        $group: {
          _id: "$category",
          count: {
            $sum: 1
          }
        }
      }
    ])
  ]);

  return {
    accessories,
    total,
    page: pageNumber,
    limit: limitNumber,
    totalPages: Math.ceil(
      total / limitNumber
    ),
    categoryCounts,
  };
};


export const archiveAccessoryService = async (
  accessoryId: string
) => {
  const accessory = await Accessory.findById(
    accessoryId
  );

  if (!accessory) {
    throw new AppError(
      "Accessory not found",
      404
    );
  }

  accessory.isActive = false;

  await accessory.save();

  return null;
};