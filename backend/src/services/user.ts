import User from "../models/user";
import { generateEmailToken } from "../utils";
import { AppError } from "../utils/AppError";
// import { changePasswordSchema } from "../validators/user";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export interface RequestPasswordResetInput {
    email: string;
}

export interface ConfirmPasswordResetInput {
    token: string;
    newPassword: string;
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

export const resetPasswordService = async ({ token, newPassword }: ConfirmPasswordResetInput) => {
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

    return;
}

export const requestEmailVerificationService = async (userId: string) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new AppError("User not found", 404);
    }


    if (user.isEmailVerified) {
        throw new AppError("Email already verified", 400);
    }

    const { rawToken, hashedToken } = generateEmailToken();

    user.emailVerificationToken = hashedToken;
    user.emailVerificationExpiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await user.save({ validateBeforeSave: false });
    // const verifyUrl =
    //     `${env.CLIENT_URL}/verify-email?token=${rawToken}`;

    // await sendEmail({
    //     to: user.email,
    //     subject: "Verify your email",
    //     html: `
    //   <p>Verify your email address</p>
    //   <a href="${verifyUrl}">
    //     Verify Email
    //   </a>
    // `,
    // });
}

export const confirmEmailVerificationService = async (userId: string, token: string): Promise<void> => {
    const hashedToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

    const user = await User.findOne({
        _id: userId,
        emailVerificationToken: hashedToken,
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
}

// interface ChangePasswordInput {
//     currentPassword: string;
//     newPassword: string;
// }
// export const changePassword = async (body: ChangePasswordInput, id: string): Promise<void> => {
//     const parsed = await changePasswordSchema.safeParse(body);

//     if (!parsed.success) {
//         throw new AppError(
//             JSON.stringify(parsed.error.format())
//         );
//     }

//     const { currentPassword, newPassword } = parsed.data;

//     if (!currentPassword || !!newPassword) {
//         throw new AppError("Current and new password are required", 400);
//     }


//     const user = await User.findById(id);
//     if (!user) {
//         throw new AppError("User not found", 404);
//     }

//     if (user.provider !== "local") {
//         throw new AppError("Password change not available for social login account", 400)
//     }

//     if (!user.password) {
//         throw new AppError("User does not have a password set", 400);
//     }

//     const hashed = await bcrypt.hash(newPassword, 10);

//     const isMatch = await bcrypt.compare(currentPassword, user.password);

//     if (!isMatch) {
//         throw new AppError("Invalid password", 400);
//     }

//     const isSame = await bcrypt.compare(hashed, user.password);

//     if (isSame) {
//         throw new AppError("New password must be different from old password", 400);
//     }

//     user.password = hashed;
//     user.passwordChangedAt = Date.now();
//     await user.save();
// }