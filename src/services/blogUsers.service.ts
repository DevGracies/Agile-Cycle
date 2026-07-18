
import { insights } from "@/src/lib/data";

export const blogService = {
  async getBlogs() {
    return {
      success: true,
      blogs: insights,
    };
  },



  async getBlog(id: string) {
    const blog = insights.find(
      (item) => item._id === id
    );

    if (!blog) {
      throw new Error("Blog not found");
    }

    return blog;
  },
};