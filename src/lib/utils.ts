import {
  Home,
  Package,
  RotateCcw,
  Settings,
  ShoppingBag,
  Users
} from "lucide-react";

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
]