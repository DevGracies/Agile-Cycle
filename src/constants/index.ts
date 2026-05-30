import { PaymentTab } from "../types";

export const ROLE_STYLES: Record<string, string> = {
  Admin: "bg-[#ecfdf3] text-[#027A48]",
  CEO: "bg-[#eff6ff] text-[#175CD3]",
  CTO: "bg-[#fdf2fa] text-[#C11574]",
};


export const paymentTabs: PaymentTab[] = [
  { label: "All payments", key: "all" },
  { label: "Successful", key: "Successful" },
  { label: "Pending", key: "Pending" },
  { label: "Failed", key: "Failed" },
];