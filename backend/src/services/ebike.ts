
import { Accessory } from "../models/accessories";
import { Enhancement } from "../models/enhancement";
import { Ebike } from "../models/ebike";
import { CreateEbikeInput, ExistingImage, FormattedImage, ProductQuery, UpdateEbikeInput } from "../types/ebike";
import { AppError } from "../utils/AppError";
import { Review } from "../models/review";
import { deleteImages, formatCloudinaryMedia, uploadImages } from "../utils/cloudinary";

export const createEbikeService = async (
  data: CreateEbikeInput,
  files: Express.Multer.File[]
) => {

  let images: Array<ReturnType<typeof formatCloudinaryMedia>> = [];

  if (files?.length) {
    const uploads = await uploadImages(files, "ebikes");

    images = uploads.map(formatCloudinaryMedia);
  }

  return Ebike.create({
    ...data,
    images
  });

};

export const updateEbikeService = async (
  ebikeId: string,
  data: Partial<UpdateEbikeInput>,
  files: Express.Multer.File[],
  existingImages: ExistingImage[],
  removedImages: string[]
) => {
  const ebike = await Ebike.findById(ebikeId);
  if (!ebike) {
    throw new AppError("Ebike not found", 404);
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
        "ebikes"
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
  ebike.set({
    ...data,
    images: finalImages,
  });

  await ebike.save();
  return ebike;
};

export const archiveEbikeService = async (
  ebikeId: string
) => {
  console.log(ebikeId)
  const ebike = await Ebike.findById(
    ebikeId
  );

  if (!ebike) {
    throw new AppError(
      "Ebike not found",
      404
    );
  }

  ebike.isActive = false;

  await ebike.save();

  return null;
};


export const getEbikeService =
  async (ebikeId: string) => {
    const [ebike, compatibleAccessories, compatibleEnhancements, reviews] = await Promise.all([
      Ebike.findById(ebikeId),
      Accessory.find({ compatibleModels: ebikeId }).populate("compatibleModels"),
      Enhancement.find({ compatibleModels: ebikeId }).populate("compatibleModels"),
      Review.find({ productId: ebikeId }).populate("productId"),
    ])

    if (!ebike) {
      throw new AppError(
        "Ebike not found",
        404
      );
    }

    if (!ebike.isActive) {
      throw new AppError("Ebike is currently not available.")
    }

    return {
      ebike,
      compatibleAccessories: compatibleAccessories ?? [],
      compatibleEnhancements: compatibleEnhancements ?? [],
      reviews: reviews ?? [],
    };
  };

export const getEbikesService = async (
  query: ProductQuery
) => {
  const {
    page = "1",
    limit = "10",

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

  const limitNumber = Math.max(1, Number(limit) || 10);

  const skip =
    (pageNumber - 1) * limitNumber;

  const [ebikes, total, categoryCounts] = await Promise.all([
    Ebike.find(filters)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber)
      .lean(),

    Ebike.countDocuments(
      filters
    ),
    Ebike.aggregate([
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
    ebikes,
    total,
    page: pageNumber,
    limit: limitNumber,
    totalPages: Math.ceil(
      total / limitNumber
    ),
    categoryCounts
  };
};