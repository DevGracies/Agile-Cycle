import { Schema, model } from "mongoose";

const blogViewSchema = new Schema(
  {
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
      index: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true,
    },

    ipAddress: String,

    userAgent: String,
  },
  {
    timestamps: true,
  }
);

blogViewSchema.index({ blogId: 1, createdAt: -1 });

export const BlogView = model("BlogView", blogViewSchema);