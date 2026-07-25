import { Router } from "express";
import { 
    getAllProducts,
    getProduct,
    getProductsInStock, 
    // getDashboardStats 
} from "../controllers/dashboard-stats";


const router = Router();

// router.get("/stats", getDashboardStats);
router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.get("/products-in-stock", getProductsInStock);

export default router