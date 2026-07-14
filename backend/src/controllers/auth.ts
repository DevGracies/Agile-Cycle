import { Request, Response } from "express";
import { env } from "../config/env";
import { loginService, registerService } from "../services/auth";
import { asyncHandler } from "../utils/asyncHandler";

const isProd = env.NODE_ENV === "production";

export const register = asyncHandler(async (
  req: Request,
  res: Response,
) => {
  const { accessToken } = await registerService(req.body);

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(201).json({
    success: true,
    message: "Account created successfully",
  });
});

export const login = asyncHandler(async (
  req: Request,
  res: Response,
) => {
  const { accessToken } = await loginService(req.body);

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    success: true,
    message: "User Login successful"
  });
});

export const logout = asyncHandler(async (
  _: Request,
  res: Response,
) => {

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    success: true,
    message: "User logged out successfully"
  });
});