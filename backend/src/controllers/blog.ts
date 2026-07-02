import { Request, Response } from "express";
import * as blogService from "../services/blog";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthenticatedRequest } from "../types/auth";
import { AppError } from "../utils/AppError";



//  @desc    Create blog
//  @route   POST /blogs
//  @access  Private

export const createBlog = asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
        throw new AppError("User not found", 404);
    }

    const blog = await blogService.createBlog({
        ...req.body,
        authorId: req.user.id,
        image: req.file,
    });

    return res.status(201).json({
        success: true,
        message: "Blog created successfully.",
        blog,
    });
});


//  @desc    Get all blogs
//  @route   GET /blogs
//  @access  Public

export const getBlogs = asyncHandler(async (req: Request, res: Response) => {
    const blogs = await blogService.getBlogs(req.query);

    return res.status(200).json({
        success: true,
        message: "Blogs fetched successfully.",
        blogs,
    })
});


//  @desc    Get blog by id
//  @route   GET /blogs/:id
//  @access  Public

export const getBlog = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const blog = await blogService.getBlog(id as string);

    return res.status(200).json({
        success: true,
        message: "Blog fetched successfully.",
        blog,
    })
});


//  @desc    Update blog
//  @route   PATCH /blogs/:id
//  @access  Private

export const updateBlog = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const blog = await blogService.updateBlog(id, {
        ...req.body,
        image: req.file,
    });

    res.status(200).json({
        success: true,
        message: "Blog updated successfully.",
        blog,
    });
});


//  @desc    Update blog status
//  @route   PATCH /blogs/:id/status
//  @access  Private

export const updateBlogStatus = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
        throw new AppError("User not found", 404);
    }
    const { id } = req.params;
    const { status } = req.body;

    const blog = await blogService.updateBlogStatus(id as string, status);

    return res.status(200).json({
        success: true,
        message: "Blog status updated successfully.",
        blog,
    })
});


//  @desc    Delete blog
//  @route   DELETE /blogs/:id
//  @access  Private

export const deleteBlog = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
        throw new AppError("User not found", 404);
    }
    const { id } = req.params;

    await blogService.deleteBlog(id as string);

    return res.status(200).json({
        success: true,
        message: "Blog deleted successfully.",
    })
});