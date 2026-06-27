import {
    Schema,
    model,
    InferSchemaType,
} from "mongoose";

import {
    productColorSchema,
    productFeatureSchema,
    productMediaSchema,
} from "./schemas/product";
import { ENHANCEMENT_CATEGORIES } from "../types/ebike";

const enhancementSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true,
        },

        sku: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            index: true,
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
            type: [productMediaSchema],
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
            enum: ENHANCEMENT_CATEGORIES,
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

export type EnhancementDocument =
    InferSchemaType<typeof enhancementSchema>;

export default model(
    "Enhancement",
    enhancementSchema
);