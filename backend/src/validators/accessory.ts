import z from "zod";
import { ACCESSORY_CATEGORIES } from "../types/accessory";


export const createAccessorySchema = z.object({
    name: z.string().min(2),
    description: z.string(),
    shortDescription: z.preprocess(
        value => value === "" ? undefined : value,
        z.string().min(10).max(300).optional()
    ),

    category: z.enum(ACCESSORY_CATEGORIES),
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
})

export const updateAccessorySchema = z.object({
    name: z.string().min(2),
    description: z.string(),
    shortDescription: z.preprocess(
        value => value === "" ? undefined : value,
        z.string().min(10).max(300).optional()
    ),

    category: z.enum(ACCESSORY_CATEGORIES),
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
    images:
        z.preprocess(
            value => {
                if (typeof value === "string") {
                    return JSON.parse(value)
                }
                return value
            },

            z.array(
                z.object({
                    public_id: z.string(),
                    secure_url: z.string()
                })
            )
                .optional()
        ),
    isFeatured: z.boolean().optional(),
})
