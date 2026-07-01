import { Request, Response } from "express";
import { AuthenticatedRequest } from "../types/auth";
import { asyncHandler } from "../utils/asyncHandler";
import { createReviewService, getReviewsService } from "../services/review";
import { AppError } from "../utils/AppError";



export const createReview = asyncHandler(
    async(req: AuthenticatedRequest, res: Response) => {
        if(!req.user){
            throw new AppError("User not found", 404);
        }
        const review = await createReviewService(req.body);

        return res.status(200).json({
            success: true,
            message: "Review created successfully",
            review,
        })
    }
)
export const getReviews = asyncHandler(
    async(req: Request, res: Response) => {
        const review = await getReviewsService();

        return res.status(200).json({
            success: true,
            message: "Review created successfully",
            review,
        })
    }
)