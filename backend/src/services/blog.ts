import { Types } from "mongoose";
import Blog from "../models/blog";
import slugify from "slugify";
import Comment from "../models/comment";
import { AppError } from "../utils/AppError";
import { deleteImage, replaceImage, uploadImage } from "../utils/cloudinary";

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
    const {
        title,
        content,
        category,
        status,
        authorId,
        image,
    } = data;

    let slug = generateSlug(title);

    const exists = await Blog.exists({ slug });

    if (exists) {
        slug = `${slug}-${Date.now()}`;
    }

    let uploadedImage;

    if (image) {
        uploadedImage = await uploadImage(image.path, "blogs");
    }

    return Blog.create({
        authorId,
        title,
        content,
        category,
        slug,
        status: status ?? "draft",
        publishedAt:
            status === "active"
                ? new Date()
                : undefined,

        image: uploadedImage
            ? {
                public_id: uploadedImage.public_id,
                secure_url: uploadedImage.secure_url,
            }
            : undefined,
    });
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
export const updateBlog = async (
    id: string,
    data: any
) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new AppError("Invalid blog id");
    }

    const blog = await Blog.findById(id);

    if (!blog) {
        throw new AppError("Blog not found");
    }

    if (
        data.title &&
        data.title !== blog.title
    ) {
        let slug = generateSlug(data.title);

        const exists = await Blog.exists({
            slug,
            _id: { $ne: id },
        });

        if (exists) {
            slug = `${slug}-${Date.now()}`;
        }

        data.slug = slug;
    }

    if (data.image) {

        const uploaded = await replaceImage(
            data.image,
            blog.image?.public_id,
            "blogs"
        );

        data.image = {
            public_id: uploaded.public_id,
            secure_url: uploaded.secure_url,
        };

    }

    return Blog.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true,
        }
    );
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
export const deleteBlog = async (
    id: string
) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new AppError("Invalid blog id");
    }

    const blog = await Blog.findById(id);

    if (!blog) {
        throw new AppError("Blog not found");
    }

    if (blog.image?.public_id) {
        await deleteImage(blog.image.public_id);
    }

    await blog.deleteOne();

    return true;
};