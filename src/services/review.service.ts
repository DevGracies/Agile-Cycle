import { apiRequest } from "./api.service";
import { Review } from "../types/review";

const USE_MOCK = true;

let reviewsDb: Review[] = [];

export const reviewService = {
  getReviewsByProductId(
    productId: string
  ): Promise<Review[]> {
    const reviews = reviewsDb.filter(
      (review) => review.productId === productId
    );

    return apiRequest<Review[]>({
      endpoint: `/products/${productId}/reviews`,
      mockData: reviews,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  getReviewById(
    reviewId: string
  ): Promise<Review> {
    const review = reviewsDb.find(
      (item) => item.id === reviewId
    );

    if (!review) {
      return apiRequest<Review>({
        endpoint: `/reviews/${reviewId}`,
        mockData: (() => {
          throw new Error("Review not found");
        })(),
        useMock: USE_MOCK,
      });
    }

    return apiRequest<Review>({
      endpoint: `/reviews/${reviewId}`,
      mockData: review,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  createReview(
    payload: Omit<Review, "id">
  ): Promise<Review> {
    const newReview: Review = {
      id: crypto.randomUUID(),
      ...payload,
    };

    reviewsDb = [newReview, ...reviewsDb];

    return apiRequest<Review>({
      endpoint: "/reviews",
      method: "POST",
      body: payload,
      mockData: newReview,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  updateReview(
    reviewId: string,
    payload: Partial<Review>
  ): Promise<Review> {
    const index = reviewsDb.findIndex(
      (review) => review.id === reviewId
    );

    if (index === -1) {
      return apiRequest<Review>({
        endpoint: `/reviews/${reviewId}`,
        method: "PATCH",
        mockData: (() => {
          throw new Error("Review not found");
        })(),
        useMock: USE_MOCK,
      });
    }

    reviewsDb[index] = {
      ...reviewsDb[index],
      ...payload,
    };

    return apiRequest<Review>({
      endpoint: `/reviews/${reviewId}`,
      method: "PATCH",
      body: payload,
      mockData: reviewsDb[index],
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  deleteReview(
    reviewId: string
  ): Promise<{ success: boolean }> {
    reviewsDb = reviewsDb.filter(
      (review) => review.id !== reviewId
    );

    return apiRequest<{ success: boolean }>({
      endpoint: `/reviews/${reviewId}`,
      method: "DELETE",
      mockData: {
        success: true,
      },
      useMock: USE_MOCK,
      delay: 300,
    });
  },
};