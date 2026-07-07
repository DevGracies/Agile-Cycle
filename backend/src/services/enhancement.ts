import slugify from "slugify";

import Enhancement from "../models/enhancement";

import { AppError } from "../utils/AppError";

import type {
  CreateEnhancementInput,
} from "../types/enhancement";
import { ProductQuery } from "../types/ebike";


export const createEnhancementService =
  async (
    data: CreateEnhancementInput
  ) => {
    const exists =
      await Enhancement.findOne({
        $or: [
          { slug: data.slug },
          { sku: data.sku },
        ],
      });

    if (exists) {
      throw new AppError(
        "Enhancement already exists",
        409
      );
    }

    const slug = slugify(data.name, {
      lower: true,
      strict: true,
    });

    const enhancement =
      await Enhancement.create({
        ...data,
        slug,
      });

    return enhancement;
  };



export const updateEnhancementService = async (
  enhancementId: string,
  data: Partial<CreateEnhancementInput>
) => {
  const enhancement = await Enhancement.findById(enhancementId);

  if (!enhancement) {
    throw new AppError(
      "Enhancement not found",
      404
    );
  }

  if (data.sku && data.sku !== enhancement.sku) {
    const existingSku = await Enhancement.findOne({
      sku: data.sku,
      _id: { $ne: enhancementId },
    });

    if (existingSku) {
      throw new AppError(
        "SKU already exists",
        409
      );
    }
  }

  if (data.name) {
    data.slug = slugify(data.name, {
      lower: true,
      strict: true,
    });
  }

  const updatedEnhancement =
    await Enhancement.findByIdAndUpdate(
      enhancementId,
      data,
      {
        new: true,
        runValidators: true,
      }
    );

  return updatedEnhancement;
};



export const getEnhancementService =
  async (enhancementId: string) => {
    const enhancement =
      await Enhancement.findOne({
        _id: enhancementId,
        isActive: true,
      })
        .populate(
          "compatibleModels"
        )

    if (!enhancement) {
      throw new AppError(
        "Enhancement not found",
        404
      );
    }

    return enhancement;
  };


export const getAllEnhancementsService = async (
  query: ProductQuery
) => {
  const {
    page = "1",
    limit = "12",

    category,

    minPrice,
    maxPrice,

    inventoryStatus,

    featured,
    newArrival,

    search,

    sort,
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

  if (minPrice || maxPrice) {
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

  const pageNumber =
    Number(page);

  const limitNumber =
    Number(limit);

  const skip =
    (pageNumber - 1) *
    limitNumber;

  const [enhancements, total] = await Promise.all([
    Enhancement.find(filters)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber)
      .lean(),

    Enhancement.countDocuments(
      filters
    ),
  ]);

  return {
    enhancements,

    pagination: {
      total,
      page: pageNumber,
      limit: limitNumber,
      totalPages: Math.ceil(
        total / limitNumber
      ),
    },
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