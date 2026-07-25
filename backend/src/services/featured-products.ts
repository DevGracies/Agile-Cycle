import { Ebike } from "../models/ebike";
import { Accessory } from "../models/accessories";
import { Enhancement } from "../models/enhancement";

export interface Query {
  page?: string;
  limit?: string;
}

export const getFeaturedProductsService = async (query: Query) => {
  const { page = "1", limit = "6" } = query;

  const pageNumber = Math.max(1, Number(page));
  const limitNumber = Math.max(1, Number(limit));

  const skip = (pageNumber - 1) * limitNumber;

  const [
    ebikes,
    accessories,
    enhancements,
    ebikeCount,
    accessoryCount,
    enhancementCount,
  ] = await Promise.all([
    Ebike.find().skip(skip).limit(limitNumber).lean(),
    Accessory.find().skip(skip).limit(limitNumber).lean(),
    Enhancement.find().skip(skip).limit(limitNumber).lean(),

    Ebike.countDocuments(),
    Accessory.countDocuments(),
    Enhancement.countDocuments(),
  ]);

  return {
    ebikes,
    accessories,
    enhancements,

    pagination: {
      page: pageNumber,
      limit: limitNumber,

      ebikes: {
        totalItems: ebikeCount,
        totalPages: Math.ceil(ebikeCount / limitNumber),
      },

      accessories: {
        totalItems: accessoryCount,
        totalPages: Math.ceil(accessoryCount / limitNumber),
      },

      enhancements: {
        totalItems: enhancementCount,
        totalPages: Math.ceil(enhancementCount / limitNumber),
      },
    },
  };
};