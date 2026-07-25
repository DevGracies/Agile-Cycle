import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { blogService } from "@/src/services/blogUsers.service";

export function useBlogs(page: number, limit = 10) {
  return useQuery({
    queryKey: ["blogs", page, limit],
    queryFn: () => blogService.getBlogs(page, limit),
    placeholderData: keepPreviousData,
  });
}

export function useBlog(id: string) {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => blogService.getBlog(id),
    enabled: !!id,
  });
}