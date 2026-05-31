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
