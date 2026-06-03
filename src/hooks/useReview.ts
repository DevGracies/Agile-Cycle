"use client";

import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { Review } from "../types/review";
import { reviewService } from "../services/review.service";

type LoadingState = {
    reviews: boolean;
    review: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
};

export const useReview = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [review, setReview] = useState<Review | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] =
        useState<LoadingState>({
            reviews: false,
            review: false,
            create: false,
            update: false,
            delete: false,
        });

    const setLoadingState = useCallback(
        (key: keyof LoadingState, value: boolean) => {
            setLoading((prev) => ({
                ...prev,
                [key]: value,
            }));
        }, []);

    const fetchReviews = useCallback(async (productId: string) => {
        try {
            setLoadingState("reviews", true);
            const data = await reviewService.getReviewsByProductId(productId);
            setReviews(data);
            return data;
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Error fetching reviews");
            throw error;
        } finally {
            setLoadingState("reviews", false);
        }
    },
        [setLoadingState]
    );

    const fetchReview = useCallback(async (reviewId: string) => {
        try {
            setLoadingState("review", true);
            const data = await reviewService.getReviewById(reviewId);
            setReview(data);
            return data;
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Error fetching review");
            throw error;
        } finally {
            setLoadingState("review", false);
        }
    }, [setLoadingState]);

    const updateReview = useCallback(async (reviewId: string, payload: Partial<Review>) => {
        try {
            setLoadingState("update", true);
            const updated = await reviewService.updateReview(reviewId, payload);
            setReview(updated);
            setReviews((prev) =>
                prev.map((review) => review.id === reviewId ? updated : review)
            );
            toast.success("Review updated successfully");
            return updated;
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Error updating review");
            throw error;
        } finally {
            setLoadingState("update", false);
        }
    }, [setLoadingState]);

    const deleteReview = useCallback(async (reviewId: string) => {
        try {
            setLoadingState("delete", true);
            await reviewService.deleteReview(reviewId);
            setReviews((prev) => prev.filter((review) => review.id !== reviewId));
            toast.success("Review deleted successfully");
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Error deleting review");
            throw error;
        } finally {
            setLoadingState("delete", false);
        }
    }, [setLoadingState]);


    const createReviewForProduct = useCallback(
        async (payload: {
            productId: string;
            title: string;
            description: string;
            name: string;
            email: string;
            images?: string[];
            reviewScore: {
                speedPerformance: number;
                rideComfortability: number;
                buildQuality: number;
            };
        }) => {
            try {
                setLoadingState("create", true);

                const review = await reviewService.createReview({
                    ...payload,
                } as any);

                setReviews((prev) => [review, ...prev]);

                toast.success("Review submitted successfully");

                return review;
            } catch (error) {
                toast.error(
                    error instanceof Error
                        ? error.message
                        : "Error submitting review"
                );
                throw error;
            } finally {
                setLoadingState("create", false);
            }
        },
        [setLoadingState]
    );

    return {
        open,
        setOpen,
        review,
        reviews,

        loading,

        fetchReview,
        fetchReviews,

        createReviewForProduct,
        updateReview,
        deleteReview,
    };
};