import { Router } from "express";
import * as blogController from "../controllers/blog";
import { adminOnly, authenticate } from "../middlewares/auth";
import upload from "../middlewares/upload";

const router = Router();

//  Public
router.get("/", blogController.getBlogs);
router.get("/:id", blogController.getBlog);
router.post(
    "/",
    authenticate,
    upload.single("image"),
    blogController.createBlog,
);

//  Protected
router.use(authenticate, adminOnly);

// router.post(
//     "/",
//     upload.single("image"),
//     blogController.createBlog
// );

router.patch(
    "/:id",
    upload.single("image"),
    blogController.updateBlog
);

router.patch("/:id/status", blogController.updateBlogStatus);

router.delete("/:id", blogController.deleteBlog);

router.get("/stats", blogController.getBlogDashboardStats);

export default router;