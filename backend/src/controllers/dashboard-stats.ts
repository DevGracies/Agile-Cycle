import { Request, Response } from "express";
import { Order } from "../models/order";
import User from "../models/user";
import { asyncHandler } from "../utils/asyncHandler";
import { AppError } from "../utils/AppError";



export const getDashboardStats = asyncHandler(
    async (req: Request, res: Response) => {
        if (!req.user) {
            throw new AppError("User not found", 404)
        }
        const [revenueResult, orders, users] = await Promise.all([
            Order.aggregate([
                {
                    $group: {
                        _id: null,
                        total: { $sum: "$totalPrice" },
                    }
                }
            ]),
            Order.countDocuments(),
            User.countDocuments(),
        ]);
        const totalRevenue = revenueResult[0]?.total || 0;

        return res.status(200).json({
            success: true,
            message: "Dashboard stats fetched successfully",
            data: {
                revenue: totalRevenue,
                orders,
                users,
            }
        })

    }
)


