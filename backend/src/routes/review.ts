import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import { createReview, getReviews } from "../controllers/review";

const router  = Router();

// Public Routes
router.get("/", getReviews);

// Protected Routes
router.use(authenticate);
router.post("/", createReview);

export default router;