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