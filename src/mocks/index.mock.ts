import {
  DataPrivacyState,
  NavbarUser,
  NotificationLog,
  NotificationTab,
  NotificationToggleState,
  Payment,
  PaymentSettingsState,
  Product,
  SecurityActivityLog,
  SecuritySettingsState,
  SecurityTab,
  SecurityToggleItem,
  User,
  UserProfile
} from "../types";
import EbikesImage1 from "@/public/ebikes/ebikesm.png"
import EbikesImage2 from "@/public/ebikes/Ebike2.png"
import EbikesImage3 from "@/public/ebikes/Ebikes3.png"
import EbikeImage from "@/public/home/product-image.png"

export const MOCK_NAVBAR_USER: NavbarUser = {
  name: "John Doe",
  role: "Administrator",
  avatar: "https://i.pravatar.cc/300",
};



export const MOCK_PROFILE: UserProfile = {
  id: "usr_001",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "08034858355",
  avatar: "https://i.pravatar.cc/300",
  dateOfBirth: "1801-04-29",
  address:
    "Speedy House, Araromi Street Off Moloney/McCarthy Street, Onikan Lagos, Nigeria",
};



export const USERS_MOCK: User[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    role: "Admin",
    email: "johndoe@gmail.com",
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: "2",
    firstName: "Sarah",
    lastName: "Wilson",
    role: "CEO",
    email: "sarah@gmail.com",
    image: "https://i.pravatar.cc/300?img=2",
  },
  {
    id: "3",
    firstName: "Michael",
    lastName: "Scott",
    role: "CTO",
    email: "michael@gmail.com",
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    id: "4",
    firstName: "Emma",
    lastName: "Watson",
    role: "Admin",
    email: "emma@gmail.com",
    image: "https://i.pravatar.cc/300?img=4",
  },
  {
    id: "5",
    firstName: "Daniel",
    lastName: "Craig",
    role: "CEO",
    email: "daniel@gmail.com",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: "6",
    firstName: "Sophia",
    lastName: "Lee",
    role: "CTO",
    email: "sophia@gmail.com",
    image: "https://i.pravatar.cc/300?img=6",
  },
];




export const products: Product[] = Array.from({ length: 6 }).map((_, index) => ({
  id: `#product${index + 1}`,
  name: "AeroX E-Bike",
  image: "/home/product-image.png",
  price: 240000,
  oldPrice: 280000,
  rating: 5,
  reviewCount: 105,
  category: "bike",
  badge: "E-Bike",

  specs: {
    range: "120km",
    material: "Carbon",
    weight: "15kg",
    torque: "90Nm",
    motor: "750W",
    battery: "48V",
  },
}));




export const PAYMENTS_MOCK: Payment[] = [
  {
    transactionId: "#CUST001",
    orderId: "CUST001",
    paymentMethod: "Card Payment",
    amount: 2400000,
    status: "Successful",
    date: "2026-04-12",
  },
  {
    transactionId: "#CUST002",
    orderId: "CUST002",
    paymentMethod: "Card Payment",
    amount: 2400000,
    status: "Pending",
    date: "2026-04-12",
  },
  {
    transactionId: "#CUST003",
    orderId: "CUST003",
    paymentMethod: "Card Payment",
    amount: 2400000,
    status: "Failed",
    date: "2026-04-12",
  },
];


export const paymentSettingsMock: PaymentSettingsState = {
  activeGateway: "Paystack",
  defaultCurrency: "Naira",
};



export const notificationLogs: NotificationLog[] = [
  {
    id: "#NTF001",
    trigger: "New Order Placed",
    recipient: "Customer",
    status: "Pending",
    date: "12 Apr 2026, 10:15",
  },
  {
    id: "#NTF002",
    trigger: "Payment Received",
    recipient: "Customer",
    status: "Delivered",
    date: "12 Apr 2026, 10:20",
  },
  {
    id: "#NTF003",
    trigger: "Refund Processed",
    recipient: "Customer",
    status: "Failed",
    date: "11 Apr 2026, 16:45",
  },
];

export const notificationTabs: NotificationTab[] = [
  { label: "All notifications", key: "all" },
  { label: "Delivered", key: "Delivered" },
  { label: "Pending", key: "Pending" },
  { label: "Failed", key: "Failed" },
];

export const notificationTypes = [
  { label: "Email Alerts", key: "EmailAlerts" },
  { label: "SMS Alerts", key: "SMSAlerts" },
  { label: "Push Notifications", key: "PushNotifications" },
];

export const triggerEvents = [
  { label: "New Order Placed", key: "NewOrderPlaced" },
  { label: "Payment Received", key: "PaymentReceived" },
  { label: "Refund Processed", key: "RefundProcessed" },
  { label: "System Alerts", key: "SystemAlerts" },
];

export const defaultNotificationSettings: NotificationToggleState = {
  EmailAlerts: true,
  SMSAlerts: true,
  PushNotifications: false,
  NewOrderPlaced: true,
  PaymentReceived: true,
  RefundProcessed: true,
  SystemAlerts: true,
};




export const securityActivityLogs: SecurityActivityLog[] = [
  {
    id: "#ACT001",
    adminUser: "John Okon",
    action: "Logged in",
    status: "Pending",
    date: "12 Apr 2026, 10:15",
  },
  {
    id: "#ACT002",
    adminUser: "Mary Effiong",
    action: "Changed password policy",
    status: "Delivered",
    date: "12 Apr 2026, 10:20",
  },
  {
    id: "#ACT003",
    adminUser: "David Udo",
    action: "Failed login attempt",
    status: "Failed",
    date: "11 Apr 2026, 16:45",
  },
  {
    id: "#ACT004",
    adminUser: "Grace Akpon",
    action: "Enabled 2FA",
    status: "Delivered",
    date: "11 Apr 2026, 14:30",
  },
  {
    id: "#ACT005",
    adminUser: "Admin Team",
    action: "Viewed activity logs",
    status: "Delivered",
    date: "10 Apr 2026, 09:00",
  },
];

export const securityTabs: SecurityTab[] = [
  {
    label: "All Activities",
    key: "all",
  },
  {
    label: "Delivered",
    key: "Delivered",
  },
  {
    label: "Pending",
    key: "Pending",
  },
  {
    label: "Failed",
    key: "Failed",
  },
];

export const passwordPolicies: SecurityToggleItem[] = [
  {
    label: "Uppercase",
    key: "Uppercase",
  },
  {
    label: "Numbers",
    key: "Numbers",
  },
  {
    label: "Special Characters",
    key: "SpecialCharacters",
  },
  {
    label: "Preventing Password Route",
    key: "PreventingPasswordRoute",
  },
];

export const twoFactorAuthOptions: SecurityToggleItem[] = [
  {
    label: "Two-Factor Authentication",
    key: "TwoFactorAuthentication",
  },
  {
    label: "Enforce 2FA For High-Value Transactions",
    key: "Enforce2FA",
  },
];

export const sessionManagementOptions: SecurityToggleItem[] = [
  {
    label: "Force Logout After Password Change",
    key: "ForceLogout",
  },
  {
    label: "Restrict Concurrent Logins",
    key: "RestrictConcurrentLogins",
  },
];

export const defaultSecuritySettings: SecuritySettingsState = {
  Uppercase: true,
  Numbers: true,
  SpecialCharacters: true,
  PreventingPasswordRoute: true,
  TwoFactorAuthentication: true,
  Enforce2FA: true,
  ForceLogout: true,
  RestrictConcurrentLogins: true,
};




export const dataPrivacySettings: DataPrivacyState = {
  autoBackup: true,
  gdpr: true,
  localRules: true,
  restrictExports: true,
  managerView: true,
  backupFrequency: "weekly",
  exportModule: "orders",
};




const reviewImages = [
  EbikesImage1,
  EbikesImage2,
  EbikesImage3,
  EbikeImage,
]

export const reviews = [
  {
    id: 1,
    name: "Chimaka Favour",
    rating: 5,
    text: "Absolutely love Agile Cycle; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their ebike needs.",
    product: "Oversize Saddle",
    images: reviewImages,
    date: "January 22, 2026",
  },
  {
    id: 2,
    name: "Chimaka Favour",
    rating: 5,
    text: "Best damn place to buy your ebikes and accessories at great prices",
    product: "Oversize Saddle",
    images: reviewImages,
    date: "January 22, 2026",
  },
  {
    id: 3,
    name: "Chimaka Favour",
    rating: 5,
    text: "Best damn place to buy your ebikes and accessories at great prices",
    product: "Oversize Saddle",
    images: reviewImages,
    date: "January 22, 2026",
  },
];




export const recentlyViewedProducts = [
  {
    id: 1,
    name: "Adjustable Bike Stem",
    price: "₦73,000",
    image: "/products/stem.png",
    reviews: 191,
  },
  {
    id: 2,
    name: "Oversize Saddle",
    price: "₦73,000",
    image: "/products/saddle.png",
    reviews: 191,
  },
  {
    id: 3,
    name: "Ebike Hitch Rack",
    price: "₦73,000",
    image: "/products/rack.png",
    reviews: 191,
  },
  {
    id: 4,
    name: "Hunter Light",
    price: "₦73,000",
    image: "/products/light.png",
    reviews: 191,
  },
];