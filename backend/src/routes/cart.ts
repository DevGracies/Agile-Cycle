import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import { addToCart, clearCart, getCart, removeFromCart, updateCartItem } from "../controllers/cart";


const router = Router();

router.use(authenticate);

router.get("/", getCart);
router.post("/", addToCart);
router.put("/:productId", updateCartItem);
router.delete("/:productId", removeFromCart);
router.delete("/", clearCart);


export default router