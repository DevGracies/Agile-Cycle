import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import { archiveEbike, createEbike, getAllEbikes, getEbike, updateEbike } from "../controllers/ebike";

const router = Router();

// Public Routes
router.get("/", getAllEbikes);
router.get("/:id", getEbike);

// Protected Routes
router.use(authenticate);
router.post("/", createEbike);
router.patch("/:id", updateEbike);
router.patch("/:id", archiveEbike);

export default router;