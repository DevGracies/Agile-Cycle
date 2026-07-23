import z from "zod";
import { ENHANCEMENT_CATEGORIES } from "../types/enhancement";


export const createEnhancementSchema = z.object({
    name: z.string().min(2),
    description: z.string(),
    shortDescription: z.preprocess(
        value => value === "" ? undefined : value,
        z.string().min(10).max(300).optional()
    ),

    category: z.enum(ENHANCEMENT_CATEGORIES),
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
    stock: z.coerce.number().min(0),
    shippingDuration: z.preprocess(
        value => value === "" ? undefined : value,
        z.string().optional()
    ),
    isFeatured: z.boolean().optional(),
});

export const updateEnhancementSchema = z.object({
    name: z.string().min(2),
    description: z.string(),
    shortDescription: z.preprocess(
        value => value === "" ? undefined : value,
        z.string().min(10).max(300).optional()
    ),

    category: z.enum(ENHANCEMENT_CATEGORIES),
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
    stock: z.coerce.number().min(0),
    shippingDuration: z.preprocess(
        value => value === "" ? undefined : value,
        z.string().optional()
    ),
    images: z.array(
        z.object({
            public_id: z.string().min(1),
            secure_url: z.string().optional(),
        })
    ).optional(),
    isFeatured: z.boolean().optional(),
})
