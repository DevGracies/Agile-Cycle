import { AuthResponse } from "../types/api";
import { api } from "./api.service";

export const signUp = async (data: {
    name: string;
    email: string;
    password: string;
}): Promise<AuthResponse> => {
    const res = await api.post("/auth/register", data);
    return res.data;
};

export const login = async (data: {
    email: string;
    password: string;
}): Promise<AuthResponse> => {
    const res = await api.post("/auth/login", data);
    return res.data;
};

export const logout = async (): Promise<AuthResponse> => {
    const res = await api.post("/auth/logout");
    return res.data;
};