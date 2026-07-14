import {
  Schema,
  model,
  InferSchemaType,
} from "mongoose";
import { mediaSchema } from "./schemas/product";

const reviewSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Ebike",
      required: true,
      index: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    speedPerformanceRating: {
      type: Number,
      min: 1,
      max: 5,
    },

    rideComfortability: {
      type: Number,
      min: 1,
      max: 5,
    },

    buildQuality: {
      type: Number,
      min: 1,
      max: 5,
    },

    title: {
      type: String,
      trim: true,
    },

    review: {
      type: String,
      trim: true,
    },

    images: {
      type: [mediaSchema],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Compound indexes
reviewSchema.index({ productId: 1, createdAt: -1 });
reviewSchema.index({ userId: 1, createdAt: -1 });

// Prevent duplicate reviews by the same user for a product
reviewSchema.index(
  { productId: 1, userId: 1 },
  { unique: true }
);

export type ReviewDocument = InferSchemaType<typeof reviewSchema>;

export const Review = model("Review", reviewSchema);