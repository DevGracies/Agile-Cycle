
import Accessories from "../models/accessories";
import Enhancement from "../models/enhancement";
import Ebike from "../models/ebike";
import { CreateEbikeInput, ProductQuery } from "../types/ebike";
import { AppError } from "../utils/AppError";
import slugify from "slugify";
import Review from "../models/review";
import { deleteImage, formatCloudinaryMedia, uploadImages } from "../utils/cloudinary";

export const createEbikeService = async (
    data: CreateEbikeInput,
    files: Express.Multer.File[]
) => {
    const exists = await Ebike.findOne({
        $or: [
            { sku: data.sku },
            { slug: slugify(data.name) },
        ],
    });

    if (exists) {
        throw new AppError(
            "Ebike already exists",
            409
        );
    }

    let images: Array<ReturnType<typeof formatCloudinaryMedia>> = [];

    if (files?.length) {

        const uploads = await uploadImages(
            files,
            "ebikes"
        );

        images = uploads.map(formatCloudinaryMedia);

    }

    return Ebike.create({
        ...data,
        slug: slugify(data.name, {
            lower: true,
            strict: true,
        }),
        images,
    });

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
    const exists = await Ebike.findOne({
      sku: data.sku,
      _id: { $ne: ebikeId },
    });

    if (exists) {
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

export const uploadEbikeImagesService = async (
    ebikeId: string,
    files: Express.Multer.File[]
) => {

    const ebike = await Ebike.findById(ebikeId);

    if (!ebike) {
        throw new AppError(
            "Ebike not found",
            404
        );
    }

    const uploads =
        await uploadImages(
            files,
            "ebikes"
        );

    const images = uploads.map(formatCloudinaryMedia);

    ebike.images.push(...images);

    await ebike.save();

    return ebike.images;

};

export const deleteEbikeImageService = async (
    ebikeId: string,
    publicId: string
) => {

    const ebike = await Ebike.findById(ebikeId);

    if (!ebike) {
        throw new AppError(
            "Ebike not found",
            404
        );
    }

    const imageExists =
        ebike.images.some(
            image =>
                image.public_id === publicId
        );

    if (!imageExists) {
        throw new AppError(
            "Image not found",
            404
        );
    }

    await deleteImage(publicId);

    ebike.images = (ebike.images.filter(
      image => image.public_id !== publicId
    ) as any);

    await ebike.save();

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


export const getEbikeService =
  async (ebikeId: string) => {
    const [ebike, compatibleAccessories, compatibleEnhancements] = await Promise.all([
      Ebike.findOne({
        _id: ebikeId,
        isActive: true,
      }),
      Accessories.find({ compatibleModels: ebikeId }).populate("compatibleModels"),
      Enhancement.find({ compatibleModels: ebikeId }).populate("compatibleModels"),
      // Review.find({ productId: ebikeId }).populate("productId"),
    ])

    if (!ebike) {
      throw new AppError(
        "Ebike not found",
        404
      );
    }
    if (!compatibleAccessories.length) {
      console.log("No compatible accessories found")
      throw new AppError("No compatible accessories found", 404)
    }
    if (!compatibleEnhancements.length) {
      console.log("No compatible enhancements found")
      throw new AppError("No compatible enhancements found", 404)

    }
    // if (!review.length) {
    //   console.log("No compatible review found")
    //   throw new AppError("No compatible review found", 404)
    // }
    
    console.log("reached", ebike);
    return {
      ebike,
      compatibleAccessories,
      compatibleEnhancements,
    };
  };

export const getEbikesService = async (
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