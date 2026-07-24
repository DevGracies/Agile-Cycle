import { Request, Response } from "express";
import * as blogService from "../services/blog";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthenticatedRequest } from "../types/auth";
import { AppError } from "../utils/AppError";
import { Blog } from "../models/blog";

import { BlogView } from "../models/view";
import Comment from "../models/comment";


export const createBlog = asyncHandler(
    async (req: Request, res: Response) => {
        const authReq = req as AuthenticatedRequest;
        if (!authReq.user) {
            throw new AppError("User not found", 404)
        };

        const blog = await blogService.createBlog({
            ...req.body,
            authorId: authReq.user.id,
            image: req.file,
        });

        return res.status(201).json({
            success: true,
            message: "Blog created successfully.",
            blog,
        });
    });

export const getBlogs = asyncHandler(async (req: Request, res: Response) => {
    const { blogs, pagination } = await blogService.getBlogs(req.query);

    return res.status(200).json({
        success: true,
        message: "Blogs fetched success.",
        blogs,
        pagination,
    });
});

export const getBlog = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

   const { blog } = await blogService.getBlog(id as string);

return res.status(200).json({
  success: true,
  message: "Blog fetched successful.",
  blog,
 
});
});

export const updateBlog = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const blog = await blogService.updateBlog(id as string, {
        ...req.body,
        image: req.file,
    });

    res.status(200).json({
        success: true,
        message: "Blog updated successfully.",
        blog,
    });
});

export const updateBlogStatus = asyncHandler(
    async (req: Request, res: Response) => {
        const authReq = req as AuthenticatedRequest;
        if (!authReq.user) {
            throw new AppError("User not found", 404)
        };

        const { id } = req.params;
        const { status } = req.body;

        const blog = await blogService.updateBlogStatus(id as string, status);

        return res.status(200).json({
            success: true,
            message: "Blog status updated successfully.",
            blog,
        })
    });

export const deleteBlog = asyncHandler(
    async (req: Request, res: Response) => {
        const authReq = req as AuthenticatedRequest;
        if (!authReq.user) {
            throw new AppError("User not found", 404)
        };

        const { id } = req.params;

        await blogService.deleteBlog(id as string);

        return res.status(200).json({
            success: true,
            message: "Blog deleted successfully.",
        })
    });

export const getBlogDashboardStats = asyncHandler(
    async (req: Request, res: Response) => {
        const authReq = req as AuthenticatedRequest;
        if (!authReq.user) {
            throw new AppError("User not found", 404)
        };

        const [blogs, comments, views] = await Promise.all([
            Blog.countDocuments(),
            Comment.countDocuments(),
            BlogView.countDocuments(),
        ]);


        return res.status(200).json({
            success: true,
            message: "Blog Dashboard stats fetched successfully.",
            data: {
                blogs,
                comments,
                views,
            }
        })
    });


