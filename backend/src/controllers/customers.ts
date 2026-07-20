import { Response } from "express";
import User from "../models/user";
import { AppError } from "../utils/AppError";
import { asyncHandler } from "../utils/asyncHandler";

export const getAllCustomers = asyncHandler(
    async (_, res: Response) => {
        console.log("Fetching all users");
        const users = await User.find().lean();

        if (!users.length) {
            throw new AppError("No users found", 404);
        }

        return res.status(200).json({
            success: true,
            users,
        });
    }
);

export const getCustomersKPIData = asyncHandler(
    async (req, res) => {
        const [] = await Promise.all([
            User.countDocuments({ isActive: true }),
        ]);

        return res.status(200).json({
            success: true,
            message: "Customers KPI data fetched"
        })
    }
)