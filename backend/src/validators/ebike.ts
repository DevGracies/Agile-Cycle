import { z } from "zod";
import { EBIKE_CATEGORIES } from "../types/ebike";

export const createEbikeSchema = z.object({
  name: z.string().min(2).max(150),

  description: z.string().min(10),

  shortDescription: z.preprocess(
    value => value === "" ? undefined : value,
    z.string().min(10).max(300).optional()
  ),

  price: z.coerce.number().positive(),

  discountPrice: z.preprocess(
    value =>
      value === "" ||
        value === null ||
        value === undefined
        ? undefined
        : value,
    z.coerce.number().positive().optional()
  ),

  shippingDuration: z.preprocess(
    value => value === "" ? undefined : value,
    z.string().optional()
  ),

  category: z.enum(EBIKE_CATEGORIES),

  stock: z.coerce.number().min(0),

  badge: z.string().optional(),

  isFeatured: z.boolean().optional(),

  isNewArrival: z.boolean().optional(),

  colors: z.preprocess(
    value => {
      if (typeof value === "string") {
        return JSON.parse(value);
      }

      return value;
    },

    z.array(
      z.object({
        name: z.string().min(1),
        color: z.string().min(1)
      })
    )
  ).optional()
});

export const updateEbikeSchema = z.object({
  name: z.string().min(2).max(150),

  description: z.string().min(10),

  shortDescription: z.preprocess(
    value => value === "" ? undefined : value,
    z.string().min(10).max(300).optional()
  ),

  price: z.coerce.number().positive(),

  discountPrice: z.preprocess(
    value =>
      value === "" ||
        value === null ||
        value === undefined
        ? undefined
        : value,
    z.coerce.number().positive().optional()
  ),

  shippingDuration: z.preprocess(
    value => value === "" ? undefined : value,
    z.string().optional()
  ),

  category: z.enum(EBIKE_CATEGORIES),

  stock: z.coerce.number().min(0),

  badge: z.string().optional(),

  isFeatured: z.boolean().optional(),

  isNewArrival: z.boolean().optional(),

  images: z.array(
    z.object({
      public_id: z.string().min(1),
      secure_url: z.string().optional(),
    })
  ).optional(),

  colors: z.preprocess(
    value => {
      if (typeof value === "string") {
        return JSON.parse(value);
      }

      return value;
    },

    z.array(
      z.object({
        name: z.string().min(1),
        color: z.string().min(1)
      })
    )
  ).optional()
});
