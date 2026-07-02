import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import { archiveEbike, createEbike, deleteEbikeImage, getAllEbikes, getEbike, updateEbike, uploadEbikeImages } from "../controllers/ebike";
import upload from "../middlewares/upload";

const router = Router();

// Public Routes
router.get("/", getAllEbikes);
router.get("/:id", getEbike);

// Protected Routes
router.use(authenticate);
router.post(
    "/",
    upload.array("images", 10),
    createEbike
);

router.patch(
    "/:id",
    updateEbike
);

router.post(
    "/:id/images",
    upload.array("images", 10),
    uploadEbikeImages
);

router.delete(
    "/:id/images/:publicId",
    deleteEbikeImage
);

router.patch(
    "/:id/archive",
    archiveEbike
);

export default router;