import { insights } from "@/src/lib/data";
import { api } from "../lib/api";
import { GetCommentsResponse } from "@/src/types";

export const commentService = {
  async getComments( blogId: string): Promise<GetCommentsResponse> {
    try {
      const data = await api.get<any, GetCommentsResponse>(
        `/blogss/${blogId}/comments`
      );

      return data;
    } catch (error) {
      console.warn(
        "Using mock comments because API request failed.",
        error
      );

      const blog = insights.find(
        (item) => item._id === blogId
      );

      return {
        success: true,
        comments: blog?.commentsData ?? [],
      };
    }
  },
};