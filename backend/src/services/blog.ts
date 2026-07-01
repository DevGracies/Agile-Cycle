import { Types } from "mongoose";
import Blog from "../models/blog";
import slugify from "slugify";
import Comment from "../models/comment";
import { AppError } from "../utils/AppError";

// Utility: generate slug from title
const generateSlug = (title: string) => {
    const slug = slugify(title, {
        lower: true,
        strict: true,
    });
    return slug;
};

// CREATE BLOG
export const createBlog = async (data: any) => {
    const { title, content, category, image, status, authorId } = data;

    let slug = generateSlug(title);

    const existing = await Blog.findOne({ slug });

    if (existing) {
        slug = `${slug}-${Date.now()}`;
    }

    const blog = await Blog.create({
        authorId,
        title,
        content,
        category,
        image,
        slug,
        status: status || "draft",
        publishedAt: status === "active" ? new Date() : undefined,
    });

    return blog;
};

// GET BLOGS (FILTER + PAGINATION)
export const getBlogs = async (query: any) => {
    const {
        page = 1,
        limit = 10,
        search,
        category,
        status,
        sort = "newest",
    } = query;

    const filter: any = {};

    if (category) filter.category = category;
    if (status) filter.status = status;

    if (search) {
        filter.$text = { $search: search };
    }

    const sortOption: any =
        sort === "oldest"
            ? { createdAt: 1 }
            : { createdAt: -1 };

    const skip = (Number(page) - 1) * Number(limit);

    const [blogs, total] = await Promise.all([
        Blog.find(filter)
            .sort(sortOption)
            .skip(skip)
            .limit(Number(limit))
            .select("-content")
            .lean(),

        Blog.countDocuments(filter),
    ]);

    return {
        blogs,
        pagination: {
            total,
            page: Number(page),
            limit: Number(limit),
            pages: Math.ceil(total / Number(limit)),
        },
    };
};

// GET BLOG BY ID + INCREMENT VIEWS
export const getBlog = async (blogId: string) => {
    const [blog, comments] = await Promise.all([
        Blog.findByIdAndUpdate(
            blogId,
            {
                $inc: { "stats.views": 1 },
            },
            {
                new: true,
            }
        ).lean(),
        Comment.find({ blogId })
    ])

    if (!blog) {
        throw new AppError("Blog not found");
    }
    if (!comments.length) {
        throw new AppError("Blog not found");
    }

    return {
        blog,
        comments,
    };
};

// UPDATE BLOG
export const updateBlog = async (id: string, data: any) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new AppError("Invalid blog id");
    }

    const blog = await Blog.findById(id);

    if (!blog) {
        throw new AppError("Blog not found");
    }

    // If title changes, regenerate slug
    if (data.title && data.title !== blog.title) {
        data.slug = generateSlug(data.title);

        const existing = await Blog.findOne({
            slug: data.slug,
            _id: { $ne: id },
        });

        if (existing) {
            data.slug = `${data.slug}-${Date.now()}`;
        }
    }

    const updated = await Blog.findByIdAndUpdate(id, data, {
        new: true,
    });

    return updated;
};

// UPDATE BLOG STATUS
export const updateBlogStatus = async (id: string, status: string) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new AppError("Invalid blog id");
    }

    const blog = await Blog.findById(id);

    if (!blog) {
        throw new AppError("Blog not found");
    }

    const updateData: any = { status };

    // publish timestamp logic
    if (status === "active" && !blog.publishedAt) {
        updateData.publishedAt = new Date();
    }

    const updated = await Blog.findByIdAndUpdate(id, updateData, {
        new: true,
    });

    return updated;
};

// DELETE BLOG
export const deleteBlog = async (id: string) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new AppError("Invalid blog id");
    }

    const blog = await Blog.findById(id);

    if (!blog) {
        throw new AppError("Blog not found");
    }

    await Blog.findByIdAndDelete(id);

    return true;
};