import { Router } from "express";
import { 
    getAllProducts,
    getProduct, 
    // getDashboardStats 
} from "../controllers/dashboard-stats";


const router = Router();

// router.get("/stats", getDashboardStats);
router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);

export default router