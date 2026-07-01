import { GetAccessoryResponse } from "../types/accessory";
import { ApiResponse } from "../types/api";
import { Filters } from "../types/ebikes";
import { Accessories } from "../types/product";
import { api } from "./api.service";


export const getAllAccessories = async(filters?: Filters): Promise<GetAccessoryResponse> => {
    const { data } = await api.get("/accessories", {params: filters});

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