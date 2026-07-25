import { useQuery } from "@tanstack/react-query";
import { getEnhancements } from "../services/enhancement.service";

export const useEnhancements = (category: string) => {
    return useQuery({
        queryKey: ["enhancements", category],

        queryFn: () => getEnhancements(category),

        staleTime: 0,

        gcTime: 1000 * 60 * 5,

        placeholderData: (previous) => previous,
    });
};