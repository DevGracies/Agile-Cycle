import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import { deleteAllUsers, deleteCurrentUser, getAllUsers, getCurrentUser } from "../controllers/user";


const userRouter = Router();

userRouter.get("/all", authenticate, getAllUsers);
userRouter.get("/", authenticate, getCurrentUser);
userRouter.delete("/delete", deleteCurrentUser);
userRouter.delete("/all/delete", deleteAllUsers);

export default userRouter;