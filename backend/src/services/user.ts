import User from "../models/user";
import { BikeType } from "../types/user";
import { AppError } from "../utils/AppError";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export interface RequestPasswordResetInput {
    email: string;
}

export const requestPasswordResetService = async ({ email }: RequestPasswordResetInput): Promise<void> => {
    const formattedEmail = email && email.trim().toLowerCase();

    const user = await User.findOne({ email: formattedEmail });

    if (!user) {
        throw new AppError("User not found", 400);
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.passwordResetToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

    user.passwordResetExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await user.save({ validateBeforeSave: false });

    // const resetUrl = `${env.CLIENT_URL}/reset-password?token=${token}`;

    // await sendEmail({
    //   to: "okoosiemmanuel@gmail.com",
    //   subject: "Reset Your Password",
    //   html: `
    //     <h2>Password Reset</h2>
    //     <p>Click the button below to reset your password:</p>
    //     <a href="${resetUrl}" 
    //        style="padding:10px 20px;background:black;color:white;text-decoration:none;">
    //        Reset Password
    //     </a>
    //     <p>This link expires in 10 minutes.</p>
    //   `,
    // });
}

export const resetPasswordService = async (token: string, newPassword: string) => {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpiresAt: { $gt: new Date() },
    });

    if (!user) {
        throw new AppError("Invalid or expired token", 400);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpiresAt = undefined;
    user.passwordChangedAt = new Date();

    await user.save();

    // await sendEmail({
    //     to: user.email,
    //     subject: "Password Reset Successful",
    //     html: `
    //   <h2>Password reset successful</h2>
    // `,
    // });
}

export const requestEmailVerificationService = async (email: string) => {
    const user = await User.findById({ email });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    if (user.isEmailVerified) {
        throw new AppError("Email already verified", 400);
    }


    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

    user.emailVerificationToken = verificationToken;
    user.emailVerificationExpiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await user.save({ validateBeforeSave: false });

    // await sendEmail({
    //     to: user.email,
    //     subject: "Verify your email",
    //     html: `
    //   <p>Here is your verification code.</p>
    //   <h2>${verificationToken}</h2>
    // `,
    // });
}

export const confirmEmailVerificationService = async (userId: string, token: string): Promise<void> => {

    const user = await User.findOne({
        _id: userId,
        emailVerificationToken: token,
        emailVerificationExpiresAt: {
            $gt: new Date(),
        },
    });

    if (!user) {
        throw new AppError("Invalid or expired token", 400);
    }

    user.isEmailVerified = true;

    user.emailVerificationToken = undefined;
    user.emailVerificationExpiresAt = undefined;

    await user.save();

    // await sendEmail({
    //     to: user.email,
    //     subject: "Email Verification Successful",
    //     html: `
    //   <p>Your email verification was successful. Visit page and login</p>
    // `,
    // });
}


interface ProfileInput {
    userId: string;
    country: string;
    state: string;
    ridingPurpose: string;
    bikeType: BikeType;
    bikeBrand: string;
    belongsToClub: boolean;
    clubName: string;
}

export const setUpProfileService = async (userId:  string, data: ProfileInput) => {
    const user = await User.findByIdAndUpdate(
        userId,
        {
            $set: {
                riderProfile: {
                    data,
                }
            }
        },
        { new: true, runValidators: true }
    )

    if (!user) {
        throw new AppError("User not found", 404)
    }

    return user;
}

interface SubscribeInput {
    userId: string;
    isSubscribed: boolean;
    isTipsEnabled: boolean;
}

export const subscribeToNewsLetterService = async ({ userId, isSubscribed, isTipsEnabled }: SubscribeInput) => {
    const user = await User.findByIdAndUpdate(
        userId,
        {
            $set: {
                preferences: {
                    isSubscribed,
                    isTipsEnabled,
                }
            }
        },
        { new: true, runValidators: true }
    )

    if (!user) {
        throw new AppError("User not found", 404)
    }

    return user;
}