import { InferSchemaType, Schema, model } from "mongoose";

const commentSchema = new Schema(
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

    parentCommentId: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
      index: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

commentSchema.index({ blogId: 1, createdAt: -1 });

export type CommentDocument = InferSchemaType<typeof commentSchema>;

export const Comment = model("Comment", commentSchema);