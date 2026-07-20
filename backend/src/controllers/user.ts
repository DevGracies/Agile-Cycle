import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import User from "../models/user";
import {
    confirmEmailVerificationService,
    getNewsletterSubscribers,
    requestEmailVerificationService,
    requestPasswordResetService,
    resetPasswordService,
    setUpCyclingExperienceService,
    setUpProfileService,
    subscribeToNewsletter,
    toggleSubscribeToNewsLetterService,
    unSubscribeToNewsletter
} from "../services/user";
import { AppError } from "../utils/AppError";
import { AuthenticatedRequest } from "../types/auth";
import { newsletterQuerySchema, newsletterSchema } from "../validators/newsletter";


export const getAllUsers = asyncHandler(
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

export const deleteCurrentUser = asyncHandler(
    async (req: Request, res: Response) => {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new AppError("User not found", 404);
        }

        await user.deleteOne();

        return res.status(200).json({
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

        return res.status(200).json({
            success: true,
            message: "All users deleted successfully",
            data: users,
        });
    }
);


export const getCurrentUser = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
        if (!req.user) {
            throw new AppError("User not found", 404);
        }
        const user = await User.findById(req.user.id)
            .select(
                "name email avatar role isActive isEmailVerified lastLoginAt createdAt"
            )
            .populate("riderProfile");

        if (!user) {
            throw new AppError("User not found", 404);
        }

        return res.status(200).json({
            success: true,
            data: user,
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
    const { token } = req.params;
    const { newPassword } = req.body;

    await resetPasswordService(token as string, newPassword);

    return res.status(200).json({
        success: true,
        message: "Password reset successful",
    });
});

export const requestEmailVerification = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
        if (!req.user) {
            throw new AppError("User not found", 404);
        }
        const { email } = req.body;
        await requestEmailVerificationService(email);

        return res.status(200).json({
            success: true,
            message: "Verification email sent",
        });
    }
);

export const confirmEmailVerification = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
        if (!req.user) {
            throw new AppError("User not found", 404);
        }
        await confirmEmailVerificationService(
            req.user.id,
            req.body.token
        );

        return res.status(200).json({
            success: true,
            message: "Email verified successfully",
        });
    }
);

export const setUpProfile = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
        if (!req.user) {
            throw new AppError("User not found", 404);
        }
        const userId = req.user.id;
        await setUpProfileService(userId, req.body)
        return res.status(200).json({
            success: true,
            message: "User profile set up successful"
        })
    }
)

export const setUpCyclingExperience = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
        if (!req.user) {
            throw new AppError("User not found", 404);
        }
        const userId = req.user.id;
        await setUpCyclingExperienceService(userId, req.body)
        return res.status(200).json({
            success: true,
            message: "User cycling experience data set up successful"
        })
    }
)

export const toggleSubscribeToNewsLetter = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
        if (!req.user) {
            throw new AppError("User not found", 404);
        }

        const { id: userId, email } = req.user;

        const { isSubscribed, isTipsEnabled } = req.body;
        await toggleSubscribeToNewsLetterService({ userId, email, isSubscribed, isTipsEnabled });

        return res.status(200).json({
            success: true,
            message: "Newsletter subscription successful",
        })
    }
)

export const subscribe = asyncHandler(
    async (req: Request, res: Response) => {

        const parsed = newsletterSchema.safeParse(req.body);
        if (!parsed.success) {
        throw new AppError(
            JSON.stringify(parsed.error.format()),
            400,
            "Invalid email address",
        );
      }

      const { email } = parsed.data;
        await subscribeToNewsletter(email);

        return res.status(200).json({
            success: true,
            message: "Successfully subscribed to the newsletter",
        })
    }
)

export const unsubscribe = asyncHandler(
    async (req: Request, res: Response) => {

        const parsed = newsletterSchema.safeParse(req.body);

        if (!parsed.success) {
            throw new AppError(
                JSON.stringify(parsed.error.format()),
                400,
                "Invalid email address",
            );
        }

        const { email } = parsed.data;
        await unSubscribeToNewsletter(email);

        return res.status(200).json({
            success: true,
            message: "Successfully unsubscribed to the newsletter",
        })
    }
)

export const getSubscribers = asyncHandler(
    async (req: Request, res: Response) => {

        const parsedQuery = newsletterQuerySchema.safeParse(req.query);

        if (!parsedQuery.success) {
            throw new AppError(
                JSON.stringify(parsedQuery.error.format()),
                400,
                "Invalid query parameters",
            );
        }
        const result = await getNewsletterSubscribers(parsedQuery.data);

        return res.status(200).json({
            success: true,
            message: "Newsletter subscribers fetched successfully",
            data: { ...result },
        })
    }
)