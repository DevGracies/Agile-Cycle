import { Router } from "express";
import * as blogController from "../controllers/blog";
import { authenticate } from "../middlewares/auth";


const router = Router();

//  Public Routes

router.get("/", blogController.getBlogs);

router.get("/:id", blogController.getBlog);

//  Protected Routes

router.use(authenticate);

router.post("/", blogController.createBlog);

router.patch("/:id", blogController.updateBlog);

router.patch("/:id/status", blogController.updateBlogStatus);

router.delete("/:id", blogController.deleteBlog);

export default router;