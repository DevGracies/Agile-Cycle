import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import { postReview, getReviewsByProductId, getReviews } from "../controllers/review";

const router  = Router();

// Public Routes
router.get("/", getReviews);
router.get("/:productId", getReviewsByProductId);

// Protected Routes
router.use(authenticate);
router.post("/:productId", postReview);

export default router;