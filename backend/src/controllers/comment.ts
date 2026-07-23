import { Request, Response } from "express";
import * as commentService from "../services/commentService";
// GET /api/blogs/:blogId/comments

type CommentParams = {
  blogId: string;
};

export const getComments =  async (req: Request<CommentParams>, res: Response) => {
    const { blogId } = req.params;

    const { comments } = await commentService.getComments(blogId);

    return res.status(200).json({
      success: true,
      message: "Comments fetched successfully.",
      comments,
    });
  }


export const createComment = 
  async (req: Request<CommentParams>, res: Response) => {
    const { blogId } = req.params;

    const comment = await commentService.createComment(
      blogId,
      req.body
    );

    return res.status(201).json({
      success: true,
      message: "Comment created successfully.",
      comment,
    });
  }