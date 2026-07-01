import z from "zod";
import { ACCESSORY_CATEGORIES } from "../types/accessory";


export const createAccessorySchema = z.object({
    name: z.string().min(2),
    slug: z.string().min(2),
    sku: z.string().min(2),
    description: z.string(),
    shortDescription: z.string(),

    category: z.enum(ACCESSORY_CATEGORIES),
    price: z.number().positive(),
    discountPrice: z.number().positive().optional(),
    stock: z.number().min(0),
    shippingDuration: z.string().optional(),
    images: z.array(
        z.object({
            url: z.string().url(),
            alt: z.string(),
        })
    ).optional(),
    isFeatured: z.boolean().optional(),
})

export const updateAccessorySchema = createAccessorySchema.partial();