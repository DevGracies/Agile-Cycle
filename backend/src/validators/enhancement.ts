import z from "zod";
import { ENHANCEMENT_CATEGORIES } from "../types/enhancement";


export const createEnhancementSchema = z.object({
    name: z.string().min(2),
    slug: z.string().min(2),
    sku: z.string().min(2),
    description: z.string(),
    shortDescription: z.string(),

    category: z.enum(ENHANCEMENT_CATEGORIES),
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

export const updateEnhancementSchema = createEnhancementSchema.partial();