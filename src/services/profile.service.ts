import { MOCK_PROFILE } from "../mocks/index.mock";
import { UserProfile } from "../types";
import { apiRequest } from "./api.service";

export const profileService = {
  async getProfile(): Promise<UserProfile> {
    return apiRequest<UserProfile>({
      endpoint: "/profile",
      method: "GET",
      mockData: MOCK_PROFILE,
      useMock: true,
    });
  },

  async updateProfile(
    payload: Partial<UserProfile>,
  ): Promise<UserProfile> {
    return apiRequest<UserProfile>({
      endpoint: "/profile",
      method: "PATCH",
      body: payload,

      mockData: {
        ...MOCK_PROFILE,
        ...payload,
      },

      useMock: true,
    });
  },

  async uploadAvatar(file: File): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // MOCK IMAGE URL
    return URL.createObjectURL(file);
  },
};