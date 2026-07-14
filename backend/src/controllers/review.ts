import { Request, Response } from "express";
import { AuthenticatedRequest } from "../types/auth";
import { asyncHandler } from "../utils/asyncHandler";
import { postReviewService, getReviewsByProductIdService, getReviewsService } from "../services/review";
import { AppError } from "../utils/AppError";



export const postReview = asyncHandler(
    async(req: AuthenticatedRequest, res: Response) => {
        if(!req.user){
            throw new AppError("User not found", 404);
        }
        const review = await postReviewService(
            req.user.id, 
            req.params.productId as string,
            req.body
        );

        return res.status(200).json({
            success: true,
            message: "Review posted successfully",
            review,
        })
    }
)

export const getReviews = asyncHandler(
    async(req: Request, res: Response) => {
        const reviews = await getReviewsService();

        return res.status(200).json({
            success: true,
            message: "Review posted successfully",
            reviews,
        })
    }
)

export const getReviewsByProductId = asyncHandler(
    async(req: Request, res: Response) => {
        const reviews = await getReviewsByProductIdService(req.params.productId as string);

        return res.status(200).json({
            success: true,
            message: "Review created successfully",
            reviews,
        })
    }
)