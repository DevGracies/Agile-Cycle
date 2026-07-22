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

export type PaymentStatus = "Pending" | "Successful" | "Failed";

export interface Payment {
  transactionId: string;
  orderId: string;
  paymentMethod: string;
  amount: number;
  status: PaymentStatus;
  date: string;
};

export type PaymentGateway = "Paystack" | "Flutter";

export type CurrencyType = "Naira" | "USD" | "Euro" | "Pounds";

export interface PaymentSettingsState {
  activeGateway: PaymentGateway;
  defaultCurrency: CurrencyType;
}

export interface PaymentTab {
  label: string;
  key: "all" | PaymentStatus;
}



export type NotificationStatus = "Pending" | "Delivered" | "Failed";

export interface NotificationLog {
  id: string;
  trigger: string;
  recipient: string;
  status: NotificationStatus;
  date: string;
}

export type NotificationToggleKey =
  | "EmailAlerts"
  | "SMSAlerts"
  | "PushNotifications"
  | "NewOrderPlaced"
  | "PaymentReceived"
  | "RefundProcessed"
  | "SystemAlerts";

export interface NotificationToggleState {
  EmailAlerts: boolean;
  SMSAlerts: boolean;
  PushNotifications: boolean;
  NewOrderPlaced: boolean;
  PaymentReceived: boolean;
  RefundProcessed: boolean;
  SystemAlerts: boolean;
}

export interface NotificationTab {
  label: string;
  key: "all" | NotificationStatus;
}




export type SecurityStatus =
  | "Pending"
  | "Delivered"
  | "Failed";

export interface SecurityActivityLog {
  id: string;
  adminUser: string;
  action: string;
  status: SecurityStatus;
  date: string;
}

export interface SecurityToggleItem {
  label: string;
  key: keyof SecuritySettingsState;
}

export interface SecurityTab {
  label: string;
  key: "all" | SecurityStatus;
}

export interface SecuritySettingsState {
  Uppercase: boolean;
  Numbers: boolean;
  SpecialCharacters: boolean;
  PreventingPasswordRoute: boolean;
  TwoFactorAuthentication: boolean;
  Enforce2FA: boolean;
  ForceLogout: boolean;
  RestrictConcurrentLogins: boolean;
}

export interface SecurityConfigurations {
  passwordLength: number;
  methodSupported: string;
  loginAttempts: number;
  timeDuration: number;
}




export type DataPrivacyState = {
  autoBackup: boolean;
  gdpr: boolean;
  localRules: boolean;
  restrictExports: boolean;
  managerView: boolean;
  backupFrequency: string;
  exportModule: string;
};

export type DataPrivacyToggleKeys =
  | "autoBackup"
  | "gdpr"
  | "localRules"
  | "restrictExports"
  | "managerView";


export interface BlogSection {
  id: number;
  title: string;
  content: string;
  image?: string;
}

export interface Insight {
  id: number;
  image: string;
  heroImage: string;
  title: string;
  description: string;
  date: string;
  author: string;
  likes: number;
  comments: number;
    commentsData?: Comment[];
  sections: BlogSection[];
}

export type InsightCardProp = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
};

// end of src/types/insight.ts

// types/navbar.ts

export type BikeCategory =
  | "Cruisers"
  | "Commuters"
  | "Cargo Bikes"
  | "Folding Bikes"
  | "Utility Bikes"
  | "Trikes"
  | "Ride share";

  export interface Comment {
  id: number;
  name: string;
  time: string;
  likes: number;
  content: string;
  replies?: Comment[];
}



// 
export interface Blog {
  _id: string;

  title: string;
  description: string;

  content: string;

  image: string;

  category: string;

  author: {
    _id: string;
    name: string;
  };

  status: "active" | "inactive" | "archived";

  publishedAt: string;

  stats: {
    views: number;
    likes: number;
    comments: number;
  };

  createdAt: string;
  updatedAt: string;
}