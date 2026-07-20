import { GetEnhancementResponse } from "../types/enhancement";
import { ApiResponse } from "../types/api";
import { ProductFilters } from "../types/ebikes";
import { Enhancement } from "../types/product";
import { api } from "./api.service";
import { buildQueryParams } from "../utils/product";


export const getAllEnhancements = async (filters?: Partial<ProductFilters>): Promise<GetEnhancementResponse> => {
    const params = buildQueryParams(filters);
    const { data } = await api.get(`/enhancements?${params.toString()}`);
    return data
}

export const getEnhancement = async (id: string): Promise<ApiResponse<Enhancement>> => {
    const { data } = await api.get(`/enhancements/${id}`);
    return data;
}

export const createEnhancement = async (formData: FormData) => {
    const { data } = await api.post(
        "/enhancements",
        formData,
    );
    return data;
};

export const updateEnhancement = async (id: string, formData: FormData) => {
    const { data } = await api.patch(`/enhancements/${id}`, formData);
    return data;
}
export const deleteEnhancement = async (id: string) => {
    const { data } = await api.patch(`/enhancements/${id}/delete`);
    return data;
}