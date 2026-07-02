import { z } from "zod";
import { EBIKE_CATEGORIES } from "../types/ebike";

export const createEbikeSchema = z.object({
  name: z.string().min(2).max(150),

  slug: z.string().min(2),

  sku: z.string().min(2),

  description: z.string().min(10),

  shortDescription: z.string().min(10).max(300),

  price: z.number().positive(),

  discountPrice: z.number().positive().optional(),

  shippingDuration: z.string().optional(),

  category: z.enum(EBIKE_CATEGORIES),

  stock: z.number().min(0),

  badge: z.string().optional(),

  isFeatured: z.boolean().optional(),

  isNewArrival: z.boolean().optional(),

  images: z.array(
    z.object({
      public_id: z.string().url(),
      secure_url: z.string().optional(),
    })
  ).optional(),

  colors: z.array(
    z.object({
      name: z.string(),
      hexCode: z.string(),
    })
  ).optional(),
});

export const updateEbikeSchema = createEbikeSchema.partial();