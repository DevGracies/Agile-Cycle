import z from "zod";
import { createEbikeSchema } from "../validators/ebike";

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

export type CreateEbikeInput =
  z.infer<typeof createEbikeSchema>;

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