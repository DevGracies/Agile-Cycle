import {
  Schema,
  model,
  InferSchemaType,
} from "mongoose";

import { 
    productColorSchema, 
    productFeatureSchema, 
    productMediaSchema, 
    productSpecSchema, 
    productVariantSchema 
} from "./schemas/product";
import { EBIKE_CATEGORIES } from "../types/product";

const ebikeSchema = new Schema(
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
      enum: EBIKE_CATEGORIES,
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
    specs: productSpecSchema,

    video: {
      url: {
        type: String,
        default: null,
      },
    },
    colors: {
      type: [productColorSchema],
      default: [],
    },

    batteryOptions: [
      {
        label: String,
      },
    ],

    variants: {
      type: [productVariantSchema],
      default: [],
    },

    compatibleAccessories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Accessory",
      },
    ],
    compatibleEnhancements: [
      {
        type: Schema.Types.ObjectId,
        ref: "Enhancement",
      },
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

export type EbikeDocument =
  InferSchemaType<typeof ebikeSchema>;

export default model(
  "Ebike",
  ebikeSchema
);