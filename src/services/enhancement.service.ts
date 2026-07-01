import { GetEnhancementResponse } from "../types/enhancement";
import { ApiResponse } from "../types/api";
import { Filters } from "../types/ebikes";
import { Enhancement } from "../types/product";
import { api } from "./api.service";


export const getAllEnhancements = async(filters?: Filters): Promise<GetEnhancementResponse> => {
    const { data } = await api.get("/enhancements", {params: filters});

    return data
}
export const getEnhancement = async(id: string): Promise<ApiResponse<Enhancement>> => {
    const { data } = await api.get(`/enhancements/${id}`);

    return data;
}
export const createEnhancement = async(body: Partial<Enhancement>)=> {
    const { data } = await api.post(`/enhancements`, body);
    
    return data;
}
export const updateEnhancement = async(id: string, body: Partial<Enhancement>) => {
    const { data } = await api.patch(`/enhancements/${id}`, body);

    return data;
}
export const deleteEnhancement = async(id: string) => {
    const { data } = await api.patch(`/enhancements/${id}`);

    return data;
}