import z from "zod";
import { createAccessorySchema, updateAccessorySchema } from "../validators/accessory";

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
  "riding glasses",
  "regenerative kits"
];

export type AccessoryCategory = typeof ACCESSORY_CATEGORIES[number];

export type CreateAccessoryInput = z.infer<typeof createAccessorySchema>;

export type UpdateAccessoryInput = z.infer<typeof updateAccessorySchema>;
