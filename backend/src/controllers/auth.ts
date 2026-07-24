import { NextFunction, Request, Response } from "express";
import { env } from "../config/env";
import { loginService, registerService } from "../services/auth";
import { asyncHandler } from "../utils/asyncHandler";
import { generateAccessToken } from "../utils";
import { Role, User } from "../types/user";
import { AppError } from "../utils/AppError";

const isProd = env.NODE_ENV === "production";

export const register = asyncHandler(async (
  req: Request,
  res: Response,
) => {
  const { accessToken, verificationToken } = await registerService(req.body);

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  console.log("Token", verificationToken)
  return res.status(201).json({
    success: true,
    message: "Account created successfully",
    data: verificationToken,
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
    maxAge: 7 * 24 * 60 * 60 * 1000,
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
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    success: true,
    message: "User logged out successfully"
  });
});

export const googleAuth = async (req: Request, res: Response, next: NextFunction) => {
  const redirect = (req.query.redirect as string) || "/";

  res.cookie("redirect_after_login", redirect, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  next();
};


export const googleCallback = async (req: Request, res: Response) => {
  const user = req.user;

  if (!user) {
    throw new AppError("Authentication failed", 401);
  }

  const authUser = user as User & {
    isNewUser?: boolean;
  };

  const accessToken = generateAccessToken({
    id: authUser._id.toString(),
    role: authUser.role as Role,
  });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.clearCookie("redirect_after_login", {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
  });

  // Redirect based on whether the user was just created
  const redirectPath = authUser.isNewUser
    ? "/setUpProfile"
    : "/";

  return res.redirect(new URL(redirectPath, env.CLIENT_URL).toString());
};