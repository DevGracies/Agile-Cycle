import { Router } from "express";
import { getDashboardStats } from "../controllers/dashboard-stats";


const router = Router();

router.get("/stats", getDashboardStats);

export default router