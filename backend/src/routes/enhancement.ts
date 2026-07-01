import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import { archiveEnhancement, createEnhancement, getAllEnhancements, getEnhancement, updateEnhancement } from "../controllers/enhancement";

const router = Router();

// Public Routes
router.get("/", getAllEnhancements);
router.get("/:id", getEnhancement);

// Protected Routes
router.use(authenticate);
router.post("/", createEnhancement);
router.patch("/:id", updateEnhancement);
router.patch("/:id", archiveEnhancement);

export default router;