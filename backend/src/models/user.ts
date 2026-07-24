import {
  Schema,
  model,
  Model,
} from "mongoose";

import {
  AUTH_PROVIDERS,
} from "../types/user";

import type {User} from "../types/user"

import {
  allRoles,
  roles,
} from "../utils";
import { userPreferencesSchema } from "./schemas/user-preferences";
import { riderProfileSchema } from "./schemas/rider-profile";


const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      immutable: true,
      index: true,
      trim: true,
    },

    password: {
      type: String,

      required: function (this: { provider?: string }) {
        return this.provider === "local";
      },

      minlength: 6,

      select: false,
    },

    role: {
      type: String,
      enum: allRoles,
      default: roles.user,
      index: true,
    },

    provider: {
      type: String,
      enum: AUTH_PROVIDERS,
      default: "local",
    },

    avatar: {
      type: String,
      default: null,
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },

    isSuspended: {
      type: Boolean,
      default: false,
      index: true,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    emailVerificationToken: String,

    emailVerificationExpiresAt: Date,

    passwordResetToken: String,

    passwordResetExpiresAt: Date,

    passwordChangedAt: Date,

    lastLoginAt: Date,

    preferences: {
      type: userPreferencesSchema,
      default: () => ({}),
    },

    riderProfile: {
      type: riderProfileSchema,
      default: () => ({}),
    },
  },
  {
    timestamps: true,

    versionKey: false,
  }
);

const User: Model<User> =
  model<User>("User", userSchema);

export default User;