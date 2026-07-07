import { Schema, model, InferSchemaType } from "mongoose";
import { mediaSchema } from "./schemas/product";

const blogSchema = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    content: {
      type: String,
      required: true,
    },

    image: mediaSchema,

    category: {
      type: String,
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "archived"],
      default: "draft",
      index: true,
    },

    publishedAt: {
      type: Date,
      index: true,
    },

    stats: {
      views: {
        type: Number,
        default: 0,
      },

      likes: {
        type: Number,
        default: 0,
      },

      comments: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

blogSchema.index({ status: 1, publishedAt: -1 });
blogSchema.index({ title: "text", excerpt: "text", content: "text" });

export type Blog = InferSchemaType<typeof blogSchema>;

export default model("Blog", blogSchema);