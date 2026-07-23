import { Router } from "express";
import { adminOnly, authenticate } from "../middlewares/auth";
import { archiveAccessory, createAccessory, getAllAccessories, getAccessory, updateAccessory } from "../controllers/accessory";
import upload from "../middlewares/upload";

const router = Router();

//  Public Routes
router.get("/", getAllAccessories);
router.get("/:id", getAccessory);

// Protected Routes
router.use(authenticate, );
router.post(
    "/",
    upload.array("images", 5),
    createAccessory
);
router.patch(
    "/:id",
    upload.array("images", 5),
    updateAccessory
);
router.patch("/:id/delete", archiveAccessory);

export default router;