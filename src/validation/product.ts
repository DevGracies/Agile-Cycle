import { z } from "zod";


export const createProductSchema = z.object({

    name: z
        .string()
        .min(2, "Product name must be at least 2 characters")
        .max(150, "Product name is too long"),


    description: z
        .string()
        .min(10, "Description must be at least 10 characters"),


    shortDescription: z
        .string()
        .min(10, "Short description must be at least 10 characters")
        .max(300, "Short description is too long"),


    price: z
        .number({
            message:"Price is required"
        })
        .positive("Price must be greater than zero"),


    discountPrice: z
        .number()
        .nonnegative("Discount price cannot be negative")
        .optional(),


    stock: z
        .number()
        .min(0,"Stock cannot be negative"),


    inventoryStatus:
        z.enum([
            "in-stock",
            "low-stock",
            "out-of-stock"
        ]),


    category:
        z.string()
        .min(1,"Category is required"),



    colors:
        z.array(
            z.object({
                name:
                z.string()
                .min(1,"Color name is required"),

                color:
                z.string()
                .min(1,"Color hex code is required")
            })
        )
        .optional(),



    variants:
        z.array(
            z.object({
                name:z.string(),
                value:z.string()
            })
        )
        .optional(),



    features:
        z.array(
            z.object({
                title:z.string(),
                description:z.string()
            })
        )
        .optional(),



    specs:
        z.array(
            z.object({
                key:z.string(),
                value:z.string()
            })
        )
        .optional()

});