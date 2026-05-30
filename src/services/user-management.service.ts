import { delay } from "../lib/utils";
import { USERS_MOCK } from "../mocks/index.mock";
import {
  CreateUserRequest,
  User,
} from "@/src/types/index";

let usersDB: User[] = [...USERS_MOCK];

export const userManagementService = {
  async getUsers(): Promise<User[]> {
    await delay(400);
    return usersDB;
  },

  async createUser(payload: CreateUserRequest): Promise<User> {
    await delay(600);

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

    return newUser;
  },

  async deleteUser(userId: string): Promise<boolean> {
    await delay(300);

    usersDB = usersDB.filter((user) => user.id !== userId);

    return true;
  },

  async updateUser(
    userId: string,
    payload: Partial<CreateUserRequest>
  ): Promise<User | null> {
    await delay(500);

    const index = usersDB.findIndex((u) => u.id === userId);

    if (index === -1) return null;

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

    return updatedUser;
  },
};