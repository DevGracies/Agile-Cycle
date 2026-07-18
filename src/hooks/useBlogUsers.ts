
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/src/services/blogUsers.service";

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: blogService.getBlogs,
  });
}

export function useBlog(id: string) {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => blogService.getBlog(id),
    enabled: !!id,
  });
}