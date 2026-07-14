import {
    Schema,
    model,
    InferSchemaType,
} from "mongoose";

import {
    productColorSchema,
    productFeatureSchema,
    mediaSchema,
} from "./schemas/product";
import { ACCESSORY_CATEGORIES } from "../types/accessory";

const accessorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
        },

        description: {
            type: String,
            required: true,
        },

        shortDescription: {
            type: String,
            required: true,
            maxlength: 300,
        },

        images: {
            type: [mediaSchema],
            default: [],
        },

        price: {
            type: Number,
            required: true,
            min: 0,
            index: true,
        },

        discountPrice: {
            type: Number,
            min: 0,
        },

        shippingDuration: String,
        category: {
            type: String,
            enum: ACCESSORY_CATEGORIES,
            required: true,
            index: true,
        },

        stock: {
            type: Number,
            default: 0,
            min: 0,
        },

        inventoryStatus: {
            type: String,
            enum: [
                "in-stock",
                "low-stock",
                "out-of-stock",
            ],
            default: "in-stock",
        },

        averageRating: {
            type: Number,
            default: 0,
        },

        reviewCount: {
            type: Number,
            default: 0,
        },

        badge: String,

        isFeatured: {
            type: Boolean,
            default: false,
            index: true,
        },

        isNewArrival: {
            type: Boolean,
            default: false,
            index: true,
        },

        colors: {
            type: [productColorSchema],
            default: [],
        },

        compatibleModels: [
            {
                type: Schema.Types.ObjectId,
                ref: "Ebike",
            }
        ],

        features: {
            type: [productFeatureSchema],
            default: [],
        },

        isActive: {
            type: Boolean,
            default: true,
            index: true,
        },
    },
    {
        timestamps: true,
    }
);

export type AccessoryDocument =
    InferSchemaType<typeof accessorySchema>;

export const Accessory = model("Accessory", accessorySchema);