import { Schema, model } from "mongoose";

const likeSchema = new Schema(
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
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

likeSchema.index(
  {
    blogId: 1,
    userId: 1,
  },
  {
    unique: true,
  }
);

export const Like = model("Like", likeSchema);