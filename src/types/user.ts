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




export type UserRole = "Admin" | "CEO" | "CTO";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  email: string;
  phone?: string;
  position?: string;
  gender?: string;
  image?: string;
}

// FORM STATE (UI only)
export interface CreateUserFormState {
  firstName: string;
  lastName: string;
  role: UserRole;
  email: string;
  phone: string;
  position: string;
  gender: string;
  image: File | null;
}

// API REQUEST PAYLOAD (what backend receives)

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  role: UserRole;
  email: string;
  phone: string;
  position: string;
  gender: string;
  image?: File | null;
}