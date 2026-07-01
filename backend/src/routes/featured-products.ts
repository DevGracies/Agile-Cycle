import { Router } from "express";
import { getFeaturedProducts } from "../controllers/featured-products";

const router = Router();

router.get("/", getFeaturedProducts);

export default router;