import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import User from "../models/user";
import { env } from "../config/env";
import { AppError } from "../utils/AppError";
import { asyncHandler } from "../utils/asyncHandler";
import { JwtPayload, AuthUser, AuthenticatedRequest } from "../types/auth";

export const authenticate = asyncHandler(
  async (req: AuthenticatedRequest, _: Response, __: NextFunction) => {
    const token = req.cookies?.accessToken;

    if (!token) {
      throw new AppError("Not authenticated", 401);
    }

    const decoded = jwt.verify(
      token,
      env.JWT_ACCESS_SECRET
    ) as JwtPayload;

    const user = await User.findById(decoded.id);

    if (!user || !user.isActive) {
      throw new AppError("Unauthorized", 401);
    }

    if (
      user.passwordChangedAt &&
      decoded.iat * 1000 < user.passwordChangedAt.getTime()
    ) {
      throw new AppError(
        "Session expired. Please login again.",
        401
      );
    }

    const authUser: AuthUser = {
      id: user._id.toString(),
      email: user.email,
      role: user.role,
    };

    req.user = authUser;
  }
);