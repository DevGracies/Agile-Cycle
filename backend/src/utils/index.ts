import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { Role } from "../types/user";
import crypto from "crypto";

import { Model } from "mongoose";
import { Ebike } from "../models/ebike";
import { Accessory } from "../models/accessories";
import { Enhancement } from "../models/enhancement";
import { ProductType } from "../models/cart";

export const generateAccessToken = (payload: { id: string, role: Role }) => {
    return jwt.sign(payload, env.JWT_ACCESS_SECRET, {
        expiresIn: "7d",
    })
}

export const generateToken = () => {
    const rawToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
        .createHash("sha256")
        .update(rawToken)
        .digest("hex");

    return { rawToken, hashedToken };
}

export const roles = {
    user: "user",
    admin: "admin",
};

export const allRoles = Object.values(roles);


export const PRODUCT_MODELS: Record<ProductType, Model<any>> = {
  ebikes: Ebike,
  accessories: Accessory,
  enhancements: Enhancement,
};