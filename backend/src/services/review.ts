
import { Ebike } from "../models/ebike";
import { Review, ReviewDocument } from "../models/review";
import { AppError } from "../utils/AppError";

export const postReviewService = async (userId: string, productId: string, data: Partial<ReviewDocument>) => {
    const {
        title,
        review,
        speedPerformanceRating,
        rideComfortability,
        buildQuality, 
        images
    } = data;

    const ebike = await Ebike.findById(productId);
    if (!ebike) {
        throw new AppError("Product not found", 404)
    }

    const existing = await Review.findOne({ userId, productId });
    if (existing) {
        throw new AppError("Review already exist for this product")
    }
    if(!title || !review || !speedPerformanceRating || !rideComfortability || !buildQuality) {
        throw new AppError("Please provide all required fields", 400);
    }
    if(speedPerformanceRating < 1 || speedPerformanceRating > 5 || rideComfortability < 1 || rideComfortability > 5 || buildQuality < 1 || buildQuality > 5) {
        throw new AppError("Ratings must be between 1 and 5", 400);
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

    if (!reviews.length) {
        throw new AppError("No reviews found", 404);
    }

    return reviews;
}

export const getReviewsByProductIdService = async (productId: string) => {
    const reviews = await Review.find({ productId }).limit(3);

    if (!reviews.length) {
        throw new AppError("No reviews found", 404);
    }

    return reviews || [];
}