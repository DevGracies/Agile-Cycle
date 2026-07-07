import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import { archiveAccessory, createAccessory, getAllAccessories, getAccessory, updateAccessory } from "../controllers/accessory";

const router = Router();

//  Public Routes
router.get("/", getAllAccessories);
router.get("/:id", getAccessory);

// Protected Routes
router.use(authenticate);
router.post("/", createAccessory);
router.patch("/:id", updateAccessory);
router.patch("/:id", archiveAccessory);

export default router;