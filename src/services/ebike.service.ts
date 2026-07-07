import { ApiResponse } from "../types/api";
import { Filters, GetEbikeResponse, GetEbikesResponse } from "../types/ebikes";
import { Ebike } from "../types/product";
import { api } from "./api.service";



export const getAllEbikes = async(filters?: Filters): Promise<GetEbikesResponse> => {
    const { data } = await api.get("/ebikes", {params: filters});

    return data
}
export const getEbike = async(id: string): Promise<ApiResponse<GetEbikeResponse>> => {
    const { data } = await api.get(`/ebikes/${id}`);
    return data;
}
export const createEbike = async(body: Partial<Ebike>)=> {
    const { data } = await api.post(`/ebikes`, body);
    
    return data;
}
export const updateEbike = async(id: string, body: Partial<Ebike>) => {
    const { data } = await api.patch(`/ebikes/${id}`, body);

    return data;
}
export const deleteEbike = async(id: string) => {
    const { data } = await api.patch(`/ebikes/${id}`);

    return data;
}