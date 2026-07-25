import { Request, Response } from "express";
import { Order } from "../models/order";
import { asyncHandler } from "../utils/asyncHandler";
import { AppError } from "../utils/AppError";
import { AuthenticatedRequest } from "../types/auth";

export const getAllOrders = asyncHandler(
    async (_, res: Response) => {
        const orders = await Order.find()
            .populate("userId", "name email")
            .populate("orderItems.ebikeId")
            .populate("orderItems.accessoryId")
            .populate("orderItems.enhancementId")
            .sort({ createdAt: -1 })

        return res.status(200).json({
            success: true,
            message: "Orders fethced successfully",
            data: orders ?? [],
        })
    }
);

export const updateOrderStatus = asyncHandler(
    async (req: Request, res) => {
        const authReq = req as AuthenticatedRequest;
        if (!authReq.user) {
            throw new AppError("User not found", 404)
        }
        const { id } = req.params;
        const { status } = req.body;

        if (!["pending", "shipped", "delivered"].includes(status)) {
            throw new AppError("Invalid status", 400)
        }

        const order = await Order.findById(id);
        if (!order) {
            throw new AppError("Order not found", 404)
        }

        if (status === "shipped" && !order.shippedAt) {
            order.shippedAt = new Date();
        }
        if (status === "delivered" && !order.deliveredAt) {
            order.deliveredAt = new Date();
        }
        order.status = status;
        await order.save();

        return res.status(200).json({
            success: true,
            message: "Order status updated successfully",
            data: order,
        })
    }
)


export const getUserOrders = asyncHandler(
    async (req: Request, res: Response) => {
        const authReq = req as AuthenticatedRequest;
        if (!authReq.user) {
            throw new AppError("User not found", 404)
        }
        const orders = await Order.find({ userId: authReq.user.id })
            .populate("orderItems.ebikeId")
            .populate("orderItems.accessoryId")
            .populate("orderItems.enhancementId")
            .sort({ createdAt: -1 })

        if (!orders.length) {
            throw new AppError("User orders not found", 404)
        }

        return res.status(200).json({
            success: true,
            message: "User orders fetched successfully",
            data: orders,
        })
    }
)


export const getOrderDashboardStats = asyncHandler(
    async (req: Request, res: Response) => {
        const authReq = req as AuthenticatedRequest;
        if (!authReq.user) {
            throw new AppError("User not found", 404)
        }
        
        const totalOrders = await Order.countDocuments();

        return res.status(200).json({
            success: true,
            message: "Dashboard stats fethced successfully",
            data: {
                totalOrders,
            }
        })
    }
)