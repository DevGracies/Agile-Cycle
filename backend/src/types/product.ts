import z from "zod";
import { createEbikeSchema } from "../validators/ebike";

export const EBIKE_CATEGORIES = [
  "cruiser",
  "commuter",
  "cargo",
  "folding",
  "utility",
  "trikes",
  "rideSahre",
];

export type EbikeCategory = typeof EBIKE_CATEGORIES[number];

export type CreateEbikeInput =
  z.infer<typeof createEbikeSchema>;

export interface GetEbikesQuery {
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

export const ACCESSORY_CATEGORIES = [
  "lights",
  "carrier bags",
  "mirrors",
  "helmets",
  "phone holders",
  "alarms",
  "electric pumps",
  "seats",
  "brake pods",
  "batteries",
  "gloves",
  "storage",
  " riding glasses",
  "regenerative kits"
];

export type AccessoryCategory = typeof EBIKE_CATEGORIES[number];

export const ENHANCEMENT_CATEGORIES = [
  "performance",
  "comfort",
  "safety",
  "technology",
  "utility",
  "style",
]

export type EnhancementCategory = typeof ENHANCEMENT_CATEGORIES[number];
