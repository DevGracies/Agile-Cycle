import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import { archiveEbike, createEbike, getAllEbikes, getEbike, updateEbike } from "../controllers/ebike";

const router = Router();

router.post("/", authenticate, createEbike);
router.get("/", getAllEbikes);
router.get("/:id", getEbike);

router.patch("/:id", authenticate, updateEbike);
router.patch("/:id", authenticate, archiveEbike);

export default router;