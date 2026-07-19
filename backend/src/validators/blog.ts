import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(3),
  description: z
    .string()
    .min(10, "Description is required")
    .max(250),

  content: z.string().min(20),

  category: z.string(),

  status: z.enum(["draft", "active"]).optional(),
});