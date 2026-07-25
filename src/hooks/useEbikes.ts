import { useQuery } from "@tanstack/react-query";
import { getEbikes } from "../services/ebike.service";

export const useEbikes = (category: string) => {
    return useQuery({
        queryKey: ["ebikes", category],

        queryFn: () => getEbikes(category),

        staleTime: 0,

        gcTime: 1000 * 60 * 5,

        placeholderData: (previous) => previous,
    });
};