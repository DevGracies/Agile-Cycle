import type { Request } from "express";
import { z } from "zod";
import { loginSchema, registerSchema } from "../validators/auth";

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

export interface RegisterResponse {
  success: true;
  message: string;
}

export interface AuthUser {
  id: string;
  email: string;
  role: string;
}

export interface JwtPayload {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

export interface AuthenticatedRequest extends Request {
  user?: AuthUser;
}