import { MOCK_PROFILE } from "../mocks/index.mock";
import { UserProfile } from "../types/user";
import { apiRequest } from "./api.service";

const USE_MOCK = true;

export const profileService = {
  getProfile(): Promise<UserProfile> {
    return apiRequest<UserProfile>({
      endpoint: "/profile",
      mockData: MOCK_PROFILE,
      useMock: USE_MOCK,
    });
  },

  updateProfile(
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
      useMock: USE_MOCK,
    });
  },

  //   uploadAvatar(file: File): Promise<{ url: string }> {
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   return apiRequest<{ url: string }>({
  //     endpoint: "/profile/avatar",
  //     method: "POST",
  //     body: formData,
  //   });
  // }

  async uploadAvatar(file: File): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return URL.createObjectURL(file);
  },
};