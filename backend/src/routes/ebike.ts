import { Router } from "express";
import { adminOnly, authenticate } from "../middlewares/auth";
import { archiveEbike, createEbike, getAllEbikes, getEbike, updateEbike } from "../controllers/ebike";
import upload from "../middlewares/upload";

const router = Router();

// Public Routes
router.get("/", getAllEbikes);
router.get("/:id", getEbike);

// Protected Routes
router.use(authenticate, );
router.post(
    "/",
    upload.array("images", 4),
    createEbike
);

router.patch(
    "/:id",
    upload.array("images", 4),
    updateEbike
);

router.patch(
    "/:id/delete",
    archiveEbike
);

export default router;