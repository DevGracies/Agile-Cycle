import { useQuery } from "@tanstack/react-query";
import { commentService } from "@/src/services/comments.service";

export function useComments(
  blogId: string,
  enabled = true
) {
  return useQuery({
    queryKey: ["blog-comments", blogId],
    queryFn: () => commentService.getComments(blogId),
    enabled: enabled && !!blogId,
  });
}