import { insights } from "@/src/lib/data";
import { api } from "@/src/lib/api"; // your axios instance
import { BlogListResponse, BlogResponse } from "../types/blog";

export const blogService = {
  async getBlogs() {
    try {
      const data = await api.get<any, BlogListResponse>("/blogs");

      return data;
    } catch (error) {
      console.warn("Using mock blog data");

      return {
        success: true,
        blogs: insights,
      };
    }
  },

  async getBlog(id: string) {
  try {
    const data = await api.get<any, BlogResponse>(`/blogs/${id}`);

    return data.blog;
  } catch {
    console.warn("Using mock blog");

    const blog = insights.find((item) => item._id === id);

    return blog ?? null;
  }
}
};
