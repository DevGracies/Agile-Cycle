import { apiRequest } from "./api.service";
import { USERS_MOCK } from "../mocks/index.mock";
import {
  CreateUserRequest,
  User,
} from "@/src/types/user";
import { z } from "zod";

const USE_MOCK = true;

let usersDB: User[] = structuredClone(USERS_MOCK);

// VALIDATION SCHEMA
const createUserSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  role: z.string().min(1, "Role is required"),
  email: z.string().email("Invalid email"),
  gender: z.string().min(1, "Gender is required"),
  image: z
    .any()
    .refine((file) => file !== undefined && file !== null, {
      message: "Image is required",
    }),
});

export const userManagementService = {
  // GET USERS
  getUsers(): Promise<User[]> {
    return apiRequest<User[]>({
      endpoint: "/users",
      mockData: usersDB,
      useMock: USE_MOCK,
      delay: 400,
    });
  },

  // CREATE USER
  createUser(payload: CreateUserRequest): Promise<User> {
    const parsed = createUserSchema.safeParse(payload);

    if (!parsed.success) {
      const message = parsed.error.issues
        .map((e) => e.message)
        .join(", ");

      throw new Error(message);
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      firstName: payload.firstName,
      lastName: payload.lastName,
      role: payload.role,
      email: payload.email,
      phone: payload.phone,
      position: payload.position,
      gender: payload.gender,
      image: payload.image
        ? URL.createObjectURL(payload.image)
        : "https://i.pravatar.cc/300",
    };

    usersDB = [newUser, ...usersDB];

    return apiRequest<User>({
      endpoint: "/users",
      method: "POST",
      body: payload,
      mockData: newUser,
      useMock: USE_MOCK,
      delay: 600,
    });
  },

  // DELETE USER
  deleteUser(userId: string): Promise<boolean> {
    usersDB = usersDB.filter((user) => user.id !== userId);

    return apiRequest<boolean>({
      endpoint: `/users/${userId}`,
      method: "DELETE",
      mockData: true,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  // UPDATE USER
  updateUser(
    userId: string,
    payload: Partial<CreateUserRequest>,
  ): Promise<User | null> {
    const index = usersDB.findIndex((u) => u.id === userId);

    if (index === -1) {
      return apiRequest<null>({
        endpoint: `/users/${userId}`,
        method: "PATCH",
        mockData: null,
        useMock: USE_MOCK,
        delay: 500,
      });
    }

    const updatedUser: User = {
      ...usersDB[index],
      ...payload,
      image: payload.image
        ? URL.createObjectURL(payload.image)
        : payload.image === null
        ? undefined
        : usersDB[index].image,
    };

    usersDB[index] = updatedUser;

    return apiRequest<User>({
      endpoint: `/users/${userId}`,
      method: "PATCH",
      body: payload,
      mockData: updatedUser,
      useMock: USE_MOCK,
      delay: 500,
    });
  },
};