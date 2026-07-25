import { api } from "@/src/lib/api";
import { BlogListResponse, BlogResponse } from "../types/blog";

export const blogService = {
  async getBlogs(page = 1, limit = 10) {
  const data = await api.get<any, BlogListResponse>(
    `/blogs?page=${page}&limit=${limit}`
  );

  return data;
},

  async getBlog(id: string) {
   // await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 seconds
    const data = await api.get<any, BlogResponse>(`/blogs/${id}`);
    return data.blog;
  },
};