import z from "zod";
import { createEbikeSchema, updateEbikeSchema } from "../validators/ebike";
import { formatCloudinaryMedia } from "../utils/cloudinary";

export const EBIKE_CATEGORIES = [
  "cruiser",
  "commuter",
  "cargo",
  "folding",
  "utility",
  "trikes",
  "rideShare",
];

export type EbikeCategory = typeof EBIKE_CATEGORIES[number];

export type CreateEbikeInput =  z.infer<typeof createEbikeSchema>;

export type UpdateEbikeInput =  z.infer<typeof updateEbikeSchema>;

export interface ProductQuery {
  page?: string;
  limit?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  inventoryStatus?: string;
  featured?: string;
  newArrival?: string;
  search?: string;
  sort?: string;
}

export interface ExistingImage {
  secure_url: string;
  public_id: string;
}

export type FormattedImage = ReturnType<typeof formatCloudinaryMedia>;