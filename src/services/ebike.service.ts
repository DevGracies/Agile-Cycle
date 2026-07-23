import { ApiResponse } from "../types/api";
import { GetEbikeResponse, GetEbikesResponse, ProductFilters } from "../types/ebikes";
import { buildQueryParams } from "../utils/product";
import { api } from "./api.service";

export const getAllEbikes = async (
    filters?: Partial<ProductFilters>
): Promise<GetEbikesResponse> => {
    const params = buildQueryParams(filters);

    console.log(params.toString());
    const { data } = await api.get<GetEbikesResponse>(
        `/ebikes?${params.toString()}`
    );

    return data;
};

export const getEbike = async (id: string): Promise<ApiResponse<GetEbikeResponse>> => {
    const { data } = await api.get(`/ebikes/${id}`);
    return data;
}

export const createEbike = async (formData: FormData) => {
    const { data } = await api.post("/ebikes", formData,);
    return data;
};

export const updateEbike = async (id: string, formData: FormData) => {
    const { data } = await api.patch(`/ebikes/${id}`, formData);
    return data;
}

export const deleteEbike = async (id: string) => {
    const { data } = await api.patch(`/ebikes/${id}/delete`);

    return data;
}