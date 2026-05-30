import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  Home,
  Package,
  RotateCcw,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const formatPrice = (value: number) => {
  return new Intl.NumberFormat("en-NG").format(value);
};

export const DASHBOARD_NAVS = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    id: "products",
    label: "Products",
    path: "/dashboard/products",
    icon: Package,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    id: "customers",
    label: "Customers",
    path: "/dashboard/customers",
    icon: Users,
  },
  {
    id: "return",
    label: "Return & Refund",
    path: "/dashboard/return",
    icon: RotateCcw,
  },
  {
    id: "settings",
    label: "Settings",
    path: "/dashboard/setting",
    icon: Settings,
  },
];

export function formatPrice(amount: number) {
  return `₦${amount.toLocaleString("en-NG", { minimumFractionDigits: 2 })}`;
}
