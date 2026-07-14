import { Router } from "express";
import { adminOnly, authenticate } from "../middlewares/auth";
import { archiveEnhancement, createEnhancement, getAllEnhancements, getEnhancement, updateEnhancement } from "../controllers/enhancement";
import upload from "../middlewares/upload";

const router = Router();

// Public Routes
router.get("/", getAllEnhancements);
router.get("/:id", getEnhancement);

// Protected Routes
router.use(authenticate, adminOnly);
router.post(
    "/",
    upload.array("images", 5),
    createEnhancement
);
router.patch("/:id", updateEnhancement);
router.patch("/:id", archiveEnhancement);

export default router;