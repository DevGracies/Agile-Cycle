
import Ebike from "../models/ebike";
import { CreateEbikeInput, GetEbikesQuery } from "../types/product";
import { AppError } from "../utils/AppError";
import slugify from "slugify";

export const createEbikeService = async (
    data: CreateEbikeInput
) => {
    const existingBike = await Ebike.findOne({
        $or: [
            { slug: data.slug },
            { sku: data.sku },
        ],
    });

    if (existingBike) {
        throw new AppError(
            "Ebike already exists",
            409
        );
    }

    const slug = slugify(data.name, {
        lower: true,
        strict: true,
    });

    const ebike = await Ebike.create({
        ...data,
        slug,
    });

    return ebike;
};

export const getEbikeService =
  async (ebikeId: string) => {
    const ebike =
      await Ebike.findOne({
        _id: ebikeId,
        isActive: true,
      })
        .populate(
          "compatibleAccessories"
        )
        .populate(
          "compatibleEnhancements"
        );

    if (!ebike) {
      throw new AppError(
        "Ebike not found",
        404
      );
    }

    return ebike;
};

export const getEbikesService = async (
  query: GetEbikesQuery
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

  const [ebikes, total] = await Promise.all([
      Ebike.find(filters)
        .sort(sortOption)
        .skip(skip)
        .limit(limitNumber)
        .lean(),

      Ebike.countDocuments(
        filters
      ),
    ]);

  return {
    ebikes,

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

export const updateEbikeService = async (
  ebikeId: string,
  data: Partial<CreateEbikeInput>
) => {
  const ebike = await Ebike.findById(ebikeId);

  if (!ebike) {
    throw new AppError(
      "Ebike not found",
      404
    );
  }

  if (data.sku && data.sku !== ebike.sku) {
    const existingSku = await Ebike.findOne({
      sku: data.sku,
      _id: { $ne: ebikeId },
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

  const updatedEbike =
    await Ebike.findByIdAndUpdate(
      ebikeId,
      data,
      {
        new: true,
        runValidators: true,
      }
    );

  return updatedEbike;
};


export const archiveEbikeService = async (
    ebikeId: string
) => {
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