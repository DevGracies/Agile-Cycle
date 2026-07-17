import { Enhancement } from "../models/enhancement";
import { AppError } from "../utils/AppError";

import type {
  CreateEnhancementInput,
} from "../types/enhancement";
import { ProductQuery } from "../types/ebike";
import { formatCloudinaryMedia, uploadImages } from "../utils/cloudinary";


export const createEnhancementService = async (
  data: CreateEnhancementInput,
  files: Express.Multer.File[]
) => {
  let images: Array<ReturnType<typeof formatCloudinaryMedia>> = [];

  if (files?.length) {
    const uploads = await uploadImages(files, "accessories");

    images = uploads.map(formatCloudinaryMedia)
  }

  const enhancement =
    await Enhancement.create({
      ...data,
      images
    });

  return enhancement;
};



export const updateEnhancementService = async (
  enhancementId: string,
  data: Partial<CreateEnhancementInput>
) => {
  const updatedEnhancement =
    await Enhancement.findByIdAndUpdate(
      enhancementId,
      data,
      {
        new: true,
        runValidators: true,
      }
    );

  if (!updatedEnhancement) {
    throw new AppError(
      "Enhancement not found",
      404
    );
  }

  return updatedEnhancement;
};



export const getEnhancementService =
  async (enhancementId: string) => {
    const enhancement =
      await Enhancement.findById(enhancementId)
        .populate(
          "compatibleModels"
        )

    if (!enhancement) {
      throw new AppError(
        "Enhancement not found",
        404
      );
    }

    if (!enhancement.isActive) {
      throw new AppError("Enhancement is currently not available.")
    }

    return enhancement;
  };


export const getAllEnhancementsService = async (
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

  const [enhancements, total, categoryCounts] = await Promise.all([
    Enhancement.find(filters)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber)
      .lean(),

    Enhancement.countDocuments(
      filters
    ),
    Enhancement.aggregate([
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
    enhancements,
    total,
    page: pageNumber,
    limit: limitNumber,
    totalPages: Math.ceil(
      total / limitNumber
    ),
    categoryCounts
  };
};

export const archiveEnhancementService = async (
  enhancementId: string
) => {
  const enhancement = await Enhancement.findById(
    enhancementId
  );

  if (!enhancement) {
    throw new AppError(
      "Enhancement not found",
      404
    );
  }

  enhancement.isActive = false;

  await enhancement.save();

  return null;
};