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
