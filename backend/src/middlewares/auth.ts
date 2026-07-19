import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import User from "../models/user";
import { env } from "../config/env";
import { AppError } from "../utils/AppError";
import { asyncHandler } from "../utils/asyncHandler";
import { JwtPayload, AuthUser, AuthenticatedRequest } from "../types/auth";

export const authenticate = asyncHandler(
  async (req: AuthenticatedRequest, _: Response, next: NextFunction) => {
    const bearerToken = req.headers.authorization?.startsWith("Bearer ")
  ? req.headers.authorization.split(" ")[1]
  : null;

const token = req.cookies?.accessToken || bearerToken;

if (!token) {
  throw new AppError("Unauthorized - not authenticated", 401);
}
console.log(req.user);

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
    next();
  }
);


export const adminOnly = asyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new AppError("Unauthorized - user not found", 401)
    };

    if (req.user.email !== env.ADMIN_EMAIL) {
      throw new AppError("Forbidden - Admin access only", 409)
    };

    next();
  }
)