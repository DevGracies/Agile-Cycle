import bcrypt from "bcryptjs";
import { loginSchema, registerSchema } from "../validators/auth";
import { generateAccessToken, roles } from "../utils";
import { AppError } from "../utils/AppError";
import type { LoginInput, RegisterInput } from "../types/auth";
import User from "../models/user";
import { Role } from "../types/user";

export const registerService = async (
  body: RegisterInput
): Promise<{ accessToken: string, verificationToken: string }> => {
  const parsed = registerSchema.safeParse(body);

  if (!parsed.success) {
    throw new AppError(
      JSON.stringify(parsed.error.format()) ?? "Invalid input", 400);
  }

  const { name, email, password } = parsed.data;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new AppError("User already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: roles.user,
    provider: "local",
  });

  const accessToken = generateAccessToken({
    id: user._id.toString(),
    role: user.role as Role,
  });


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

  return { accessToken, verificationToken };
};


export const loginService = async (body: LoginInput): Promise<{ accessToken: string }> => {
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    throw new AppError(
      JSON.stringify(parsed.error.format()) ?? "Invalid input", 400);
  }

  const { email, password } = parsed.data;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (user && user.provider !== "local") {
    throw new AppError(
      `Email already registered via ${user.provider}. Please use ${user.provider} to login.`,
    );
  }

  if (!user.password) {
    throw new AppError("Invalid email or password", 400);
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new AppError("Invalid email or password", 400);
  }

  const accessToken = generateAccessToken({
    id: user._id.toString(),
    role: user.role as Role,
  });

  return { accessToken };
}