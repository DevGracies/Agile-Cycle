import { Router } from "express";
import {
  createComment,
  getComments,
} from "../controllers/comment";
import { authenticate } from "../middlewares/auth";

const router = Router();


router.get( "/:blogId/comments", getComments);

router.post("/:blogId/comments", createComment);

export default router;