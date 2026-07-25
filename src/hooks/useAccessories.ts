import { useQuery } from "@tanstack/react-query";
import { getAccessories } from "../services/accessory.service";

export const useAccessories = (category: string) => {
    return useQuery({
        queryKey: ["accessories", category],

        queryFn: () => getAccessories(category),

        staleTime: 0,

        gcTime: 1000 * 60 * 5,

        placeholderData: (previous) => previous,
    });
};