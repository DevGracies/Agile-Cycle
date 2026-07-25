import { useState } from "react";
import { api, apiError } from "../services/api.service";
import { Accessories, Ebike, Enhancement } from "../types/product";

interface FeaturedProductsResponse {
    success: boolean;
    message: string;
    data: {
        ebikes: Ebike[];
        accessories: Accessories[];
        enhancements: Enhancement[];

        pagination: {
            page: number;
            limit: number;

            ebikes: {
                totalItems: number;
                totalPages: number;
            };

            accessories: {
                totalItems: number;
                totalPages: number;
            };

            enhancements: {
                totalItems: number;
                totalPages: number;
            };
        };
    };
}

interface Query {
    page?: string;
    limit?: string;
}
export const getFeaturedProducts = async (query?: Query): Promise<FeaturedProductsResponse> => {
    const { data } = await api.get("/featured-products", { params: query });

    return data;
}

export const useFeaturedProducts = () => {
    const [ebikes, setEbikes] = useState<Ebike[]>([]);
    const [accessories, setAccessories] = useState<Accessories[]>([]);
    const [enhancements, setEnhancements] = useState<Enhancement[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 6,
        ebikes: {
            totalItems: 0,
            totalPages: 1,
        },
        accessories: {
            totalItems: 0,
            totalPages: 1,
        },
        enhancements: {
            totalItems: 0,
            totalPages: 1,
        },
    });

    const fetchFeaturedProducts = async (query?: Query) => {
        try {
            setIsLoading(true);

            const { data } = await getFeaturedProducts(query);

            setEbikes(data.ebikes);
            setAccessories(data.accessories);
            setEnhancements(data.enhancements);
            setPagination(data.pagination);
        } catch (error) {
            console.error(apiError(error));
        } finally {
            setIsLoading(false);
        }
    };

    return {
        ebikes,
        accessories,
        enhancements,
        pagination,
        fetchFeaturedProducts,
        isLoading,
    };
}