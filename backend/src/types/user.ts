import { HydratedDocument } from "mongoose";

export type Role = "user" | "admin";

export const AUTH_PROVIDERS = ["local", "google"] as const;

export const BIKE_TYPES = [
  "",
  "electricBike",
  "tricycle",
  "commuting",
  "kekecycle",
] as const;

export type AuthProvider =
  (typeof AUTH_PROVIDERS)[number];

export type BikeType =
  (typeof BIKE_TYPES)[number];

export interface UserPreferences {
  isSubscribed: boolean;
  isTipsEnabled: boolean;
}

export interface RiderProfile {
  phone?: string;
  country?: string;
  state?: string;
  ridingPurpose?: string;

  bikeType?: BikeType;
  bikeBrand?: string;

  belongsToClub: boolean;
  clubName?: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;

  password?: string;

  role: string;

  provider: AuthProvider;

  avatar?: string | null;

  googleId?: string;

  isActive: boolean;
  isSuspended: boolean;

  isEmailVerified: boolean;

  emailVerificationToken?: string;
  emailVerificationExpiresAt?: Date;

  passwordResetToken?: string;
  passwordResetExpiresAt?: Date;

  passwordChangedAt?: Date;

  lastLoginAt?: Date;

  preferences: UserPreferences;

  riderProfile: RiderProfile;

  createdAt: Date;
  updatedAt: Date;
}

export type UserDocument = HydratedDocument<User>;