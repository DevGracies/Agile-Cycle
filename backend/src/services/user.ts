import { Newsletter } from "../models/newsletter";
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

export const confirmEmailVerificationService = async ( token: string): Promise<void> => {

    const user = await User.findOne({
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


interface CyclingExperienceInput {
    userId: string;
    bikeType: BikeType;
    bikeBrand: string;
    belongsToClub: boolean;
    clubName: string;
}

export const setUpCyclingExperienceService = async (userId: string, data: CyclingExperienceInput) => {
    const user = await User.findByIdAndUpdate(
        userId,
        {
            $set: {
                riderProfile: data
            }
        },
        { new: true, runValidators: true }
    )

    if (!user) {
        throw new AppError("User not found", 404)
    }

    return user;
}

interface ProfileInput {
    userId: string;
    country: string;
    state: string;
    ridingPurpose: string;
}

export const setUpProfileService = async (userId: string, data: ProfileInput) => {
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

interface ToggleSubscribeInput {
    userId: string;
    email: string;
    isSubscribed: boolean;
    isTipsEnabled: boolean;
}

export const toggleSubscribeToNewsLetterService = async ({ userId, email, isSubscribed, isTipsEnabled }: ToggleSubscribeInput) => {
    const [user, alreadySubscribed] = await Promise.all([
        User.findByIdAndUpdate(
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
        ),

        Newsletter.findOne({ email }),
    ]);

if (!user) {
    throw new AppError("User not found", 404)
}


if (alreadySubscribed?.isSubscribed) {
    return alreadySubscribed;
}

if (alreadySubscribed) {
    alreadySubscribed.isSubscribed = true;
    alreadySubscribed.subscribedAt = new Date();

    return alreadySubscribed.save();
}

if (!alreadySubscribed) {
    await Newsletter.create({
        email,
    })
};

return { user, alreadySubscribed };
}

interface GetSubscribersQuery {
    page?: number;
    limit?: number;
    search?: string;
    isSubscribed?: boolean;
}

export const subscribeToNewsletter = async (email: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const existingSubscriber = await Newsletter.findOne({ email: normalizedEmail });

    if (existingSubscriber?.isSubscribed) {
        return existingSubscriber;
    }

    if (existingSubscriber) {
        existingSubscriber.isSubscribed = true;
        existingSubscriber.subscribedAt = new Date();

        return existingSubscriber.save();
    }

    return Newsletter.create({
        email: normalizedEmail,
    })
}
export const unSubscribeToNewsletter = async (email: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const subscriber = await Newsletter.findOne({ email: normalizedEmail });

    if (!subscriber) {
        throw new AppError("Subscriber not found", 404);
    }
    subscriber.isSubscribed = false;
    return subscriber.save();
}

export const getNewsletterSubscribers = async (query: GetSubscribersQuery) => {
    const page = Math.max(Number(query.page) || 1, 1);
    const limit = Math.max(Number(query.limit) || 10, 1);

    const skip = (page - 1) * limit;

    const filter: Record<string, any> = {};

    if (query.search) {
        filter.email = {
            $regex: query.search,
            $options: "i"
        };
    }

    if (typeof query.isSubscribed === "boolean") {
        filter.isSubscribed = query.isSubscribed;
    }

    const [subscribers, total] = await Promise.all([
        Newsletter.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean(),

        Newsletter.countDocuments(filter),
    ]);

    return {
        subscribers, pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        }
    }
}