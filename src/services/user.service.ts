import { ApiResponse, AuthResponse } from "../types/api";
import { BikeType, User } from "../types/user";
import { api, apiError } from "./api.service";

export const getUser = async (): Promise<ApiResponse<User>> => {
    const { data } = await api.get("/user");
    return data;
};

export const getAllUsers = async (): Promise<ApiResponse<User[]>> => {
    const { data } = await api.get("/user/all");
    return data;
};

export const requestPasswordReset = async (email: string): Promise<AuthResponse> => {
    const { data } = await api.post("/user/forgot-password", { email });
    return data;
};

export const resetPassword = async (token: string, password: string): Promise<AuthResponse> => {
    const { data } = await api.patch(`/user/reset-password/${token}`, { password });
    return data;
};

export const requestEmailVerification = async (email: string): Promise<AuthResponse> => {
    const { data } = await api.post("/user/email-verification", { email });
    return data;
};

export const verifyEmail = async (token: string): Promise<AuthResponse> => {
    const { data } = await api.patch("/user/verify-email", { token });
    return data;
};

export const profileSetUp = async (form: {
    country: string;
    state: string;
    ridingPurpose: string;
    bikeType: BikeType;
    bikeBrand: string;
    belongsToClub: boolean;
    clubName: string
}): Promise<AuthResponse> => {
    const { data } = await api.patch("/user/profile", form);
    return data;
};

export const subscribeToNewsLetter = async (form: {
    isSubscribed: boolean;
    isTipsEnabled: boolean;
}): Promise<AuthResponse> => {
    const { data } = await api.patch("/user/profile", form);
    return data;
};