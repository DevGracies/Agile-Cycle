import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import User from "../models/user";
import { confirmEmailVerificationService, requestEmailVerificationService, requestPasswordResetService, resetPasswordService } from "../services/user";
import { AppError } from "../utils/AppError";
import { AuthenticatedRequest } from "../types/auth";


export const getAllUsers = asyncHandler(
    async (_: Request, res: Response) => {
        const users = await User.find().lean();

        if (!users.length) {
            throw new AppError("No users found", 404);
        }

        res.status(200).json({
            success: true,
            users,
        });
    }
);
export const deleteCurrentUser = asyncHandler(
    async (req: Request, res: Response) => {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new AppError("No user found", 404);
        }

        await user.deleteOne();

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            user,
        });
    }
);

export const deleteAllUsers = asyncHandler(
    async (_: Request, res: Response) => {
        const users = await User.deleteMany()

        if (!users.deletedCount) {
            throw new AppError("No users found", 404);
        }

        res.status(200).json({
            success: true,
            message: "All users deleted successfully",
            users,
        });
    }
);


export const getCurrentUser = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
        if (!req.user) {
            throw new AppError("No user found", 404);
        }
        const user = await User.findById(req.user.id)
            .select(
                "name email avatar role isActive isEmailVerified lastLoginAt createdAt"
            )
            .populate("riderProfile");

        if (!user) {
            throw new AppError("User not found", 404);
        }

        res.status(200).json({
            success: true,
            user,
        });
    }
);

export const requestPasswordReset = asyncHandler(async (
    req: Request,
    res: Response,
) => {
    const { email } = req.body;

    await requestPasswordResetService({ email });

    return res.status(200).json({
        success: true,
        message: "Reset email has been sent",
    })
});

export const resetPassword = asyncHandler(async (
    req: Request,
    res: Response,
) => {
    const { token, newPassword } = req.body;

    await resetPasswordService({ token, newPassword });

    return res.status(200).json({
        success: true,
        message: "Password reset successful",
    });
});

export const requestEmailVerification = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
        if (!req.user) {
            throw new AppError("No user found", 404);
        }
        await requestEmailVerificationService(req.user.id);

        res.status(200).json({
            success: true,
            message: "Verification email sent",
        });
    }
);

export const confirmEmailVerification = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
        if (!req.user) {
            throw new AppError("No user found", 404);
        }
        await confirmEmailVerificationService(
            req.user.id,
            req.body.token
        );

        res.status(200).json({
            success: true,
            message: "Email verified successfully",
        });
    }
);


