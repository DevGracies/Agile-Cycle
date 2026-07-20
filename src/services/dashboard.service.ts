import { ApiResponse } from "../types/api";
import { DashboardProductsResponse } from "../types/product";
import { api } from "./api.service";

interface QueryFilters {
    page?: number;
    limit?: number;
}

export const buildProductParams = (
    query?: Partial<QueryFilters>
) => {
    const params = new URLSearchParams();

    if (!query) return params;

    if (query.page) {
        params.set("page", String(query.page));
    }
    if (query.limit) {
        params.set("limit", String(query.limit));
    }
    return params;
}

export const getAllProducts =
    async (
        query?: QueryFilters
    ): Promise<ApiResponse<DashboardProductsResponse>> => {

        const params = buildProductParams(query);

        const { data } = await api.get(
            `/dashboard/products?${params.toString()}`
        );
        return data;
    };

export const getProduct = async (id: string)=> {
    const { data } = await api.get(
        `/dashboard/products/${id}`
    );
    return data;
};