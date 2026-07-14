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


export interface NavbarUser {
  name: string;
  role: string;
  avatar: string;
}

export interface NavbarProps {
  setSidebarOpen: (value: boolean) => void;
  user: NavbarUser;
}



// ADMIN USER MOCK PROFILE
export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  dateOfBirth: string;
  address: string;
}
export interface UpdateProfilePayload {
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
  address: string;
}
export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}




// export type UserRole = "Admin" | "CEO" | "CTO";

// export interface User {
//   id: string;
//   firstName: string;
//   lastName: string;
//   role: UserRole;
//   email: string;
//   phone?: string;
//   position?: string;
//   gender?: string;
//   image?: string;
// }

// // FORM STATE (UI only)
// export interface CreateUserFormState {
//   firstName: string;
//   lastName: string;
//   role: UserRole;
//   email: string;
//   phone: string;
//   position: string;
//   gender: string;
//   image: File | null;
// }

// // API REQUEST PAYLOAD (what backend receives)

// export interface CreateUserRequest {
//   firstName: string;
//   lastName: string;
//   role: UserRole;
//   email: string;
//   phone: string;
//   position: string;
//   gender: string;
//   image?: File | null;
// }

