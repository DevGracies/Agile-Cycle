import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { Role } from "../types/user";
import crypto from "crypto";

export const generateAccessToken = (payload: { id: string, role: Role }) => {
    return jwt.sign(payload, env.JWT_ACCESS_SECRET, {
        expiresIn: "30m",
    })
}

export const generateEmailToken = () => {
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