import Review, { ReviewDocument } from "../models/review";
import { AppError } from "../utils/AppError";

export const createReviewService = async (data: Partial<ReviewDocument>) => {
    const { userId, productId, title, review, speedPerformanceRating, rideComfortability, buildQuality, images, } = data;

    const existing = await Review.findOne({ userId, productId });

    if (existing) {
        throw new AppError("Review already exist for this product")
    }

    const newReview = await Review.create({
        userId,
        productId,
        title,
        review,
        speedPerformanceRating,
        rideComfortability,
        buildQuality,
        images,
    });

    return newReview;
};


export const getReviewsService = async () => {
    const reviews = await Review.find().limit(3);

    if(!reviews.length){
        throw new AppError("Reviews not found", 404);
    }

    return reviews;
}