import slugify from "slugify";

import Accessory from "../models/accessories";

import { AppError } from "../utils/AppError";

import type {
  CreateAccessoryInput,
} from "../types/accessory";
import { ProductQuery } from "../types/ebike";


export const createAccessoryService =
  async (
    data: CreateAccessoryInput
  ) => {
    const exists =
      await Accessory.findOne({
        $or: [
            { slug: data.slug },
            { sku: data.sku },
        ],
    });

    if (exists) {
      throw new AppError(
        "Accessory already exists",
        409
      );
    }

    const slug = slugify(data.name, {
            lower: true,
            strict: true,
        });

    const accessory =
      await Accessory.create({
        ...data,
        slug,
      });

    return accessory;
  };



export const updateAccessoryService = async (
  accessoryId: string,
  data: Partial<CreateAccessoryInput>
) => {
  const accessory = await Accessory.findById(accessoryId);

  if (!accessory) {
    throw new AppError(
      "Accessory not found",
      404
    );
  }

  if (data.sku && data.sku !== accessory.sku) {
    const existingSku = await Accessory.findOne({
      sku: data.sku,
      _id: { $ne: accessoryId },
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

  const updatedAccessory =
    await Accessory.findByIdAndUpdate(
      accessoryId,
      data,
      {
        new: true,
        runValidators: true,
      }
    );

  return updatedAccessory;
};



export const getAccessoryService =
  async (accessoryId: string) => {
    const accessory =
      await Accessory.findOne({
        _id: accessoryId,
        isActive: true,
      })
        .populate(
          "compatibleModels"
        )

    if (!accessory) {
      throw new AppError(
        "Accessory not found",
        404
      );
    }

    return accessory;
};


export const getAccessoriesService = async (
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

  const [accessories, total] = await Promise.all([
      Accessory.find(filters)
        .sort(sortOption)
        .skip(skip)
        .limit(limitNumber)
        .lean(),

      Accessory.countDocuments(
        filters
      ),
    ]);

  return {
    accessories,

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