import { Blog } from "../models/blog";
import comment from "../models/comment";

import { AppError } from "../utils/AppError";

type CreateCommentDto = {
  name: string;
  content: string;
};

export const createComment = async (
  blogId: string,
  data: CreateCommentDto
) => {
  const blog = await Blog.findById(blogId);

  if (!blog) {
    throw new AppError("Blog not found");
  }

  return comment.create({
    blog: blogId,
    name: data.name,
    content: data.content,
  });
};

export const getComments = async (blogId: string) => {
  const blog = await Blog.findById(blogId);

  if (!blog) {
    throw new AppError("Blog not found");
  }

  const comments = await comment.find({
    blog: blogId,
  }).sort({
    createdAt: -1,
  });

  return {
    comments,
  };
};