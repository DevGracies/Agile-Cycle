import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import { deleteAllUsers, deleteCurrentUser, getAllUsers, getCurrentUser } from "../controllers/user";


const router = Router();

router.get("/all", getAllUsers);
router.get("/", authenticate, getCurrentUser);
router.delete("/delete", authenticate, deleteCurrentUser);
router.delete("/all/delete", deleteAllUsers);

export default router;