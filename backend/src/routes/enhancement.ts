import { Router } from "express";
import { adminOnly, authenticate } from "../middlewares/auth";
import { archiveEnhancement, createEnhancement, getAllEnhancements, getEnhancement, updateEnhancement } from "../controllers/enhancement";
import upload from "../middlewares/upload";

const router = Router();

// Public Routes
router.get("/", getAllEnhancements);
router.get("/:id", getEnhancement);

// Protected Routes
router.use(authenticate, );
router.post(
    "/",
    upload.array("images", 4),
    createEnhancement
);
router.patch(
    "/:id",
    upload.array("images", 4),
    updateEnhancement
);

router.patch("/:id/delete", archiveEnhancement);

export default router;