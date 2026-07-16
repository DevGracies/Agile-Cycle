import { GetAccessoryResponse } from "../types/accessory";
import { ApiResponse } from "../types/api";
import { ProductFilters } from "../types/ebikes";
import { Accessories } from "../types/product";
import { buildQueryParams } from "../utils/product";
import { api } from "./api.service";

export const getAllAccessories = async(filters?: Partial<ProductFilters>): Promise<GetAccessoryResponse> => {
    const params = buildQueryParams(filters);

    const { data } = await api.get(`/accessories?${params.toString()}`);

    return data
}

export const getAccessory = async(id: string): Promise<ApiResponse<Accessories>> => {
    const { data } = await api.get(`/accessories/${id}`);

    return data;
}
export const createAccessory = async(body: Partial<Accessories>)=> {
    const { data } = await api.post(`/accessories`, body);
    
    return data;
}
export const updateAccessory = async(id: string, body: Partial<Accessories>) => {
    const { data } = await api.patch(`/accessories/${id}`, body);

    return data;
}
export const deleteAccessory = async(id: string) => {
    const { data } = await api.patch(`/accessories/${id}`);

    return data;
}