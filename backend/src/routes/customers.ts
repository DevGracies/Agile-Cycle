import {Router} from "express";
import { adminOnly, authenticate } from "../middlewares/auth";
import { getAllCustomers } from "../controllers/customers";

const router = Router();

router.use(
    authenticate,
    // adminOnly
)
router.get("/", getAllCustomers);

export default router;