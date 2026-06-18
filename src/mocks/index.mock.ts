
import EbikesImage1 from "@/public/ebikes/ebikesm.png"
import EbikesImage2 from "@/public/ebikes/Ebike2.png"
import EbikesImage3 from "@/public/ebikes/Ebikes3.png"
import EbikeImage from "@/public/home/product-image.png"
import { NavbarUser, User, UserProfile } from "../types/user";
import { Product } from "../types/product";
import { Payment, PaymentSettingsState, PaymentStatus } from "../types/payment";
import { NotificationLog, NotificationStatus, NotificationTab, NotificationToggleState } from "../types/notification";
import { SecurityActivityLog, SecuritySettingsState, SecurityStatus, SecurityTab, SecurityToggleItem } from "../types/security";
import { DataPrivacyState } from "../types/dataPrivacy";
import { BlogLog, BlogMetrics, BlogStatus, BlogTab, BlogToggleState } from "../types/blog";
import { ClubLog, ClubMetrics, ClubTab, ClubToggleState } from "../types/club.";

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




export const PAYMENTS_MOCK: Payment[] = [
  ...Array.from({ length: 3 }).map((_, i) => ({
    transactionId: `#CUST001${i + 1}`,
    orderId: "CUST001",
    paymentMethod: "Card Payment",
    amount: 2400000,
    status: "Successful" as PaymentStatus,
    date: "2026-04-12",
  })),
  ...Array.from({ length: 3 }).map((_, i) => ({
    transactionId: `#CUST00${i + 4}`,
    orderId: "CUST002",
    paymentMethod: "Card Payment",
    amount: 2400000,
    status: "Pending" as PaymentStatus,
    date: "2026-04-12",
  })),
  ...Array.from({ length: 10 }).map((_, i) => ({
    transactionId: `#CUST00${i + 7}`,
    orderId: "CUST003",
    paymentMethod: "Card Payment",
    amount: 2400000,
    status: "Failed" as PaymentStatus,
    date: "2026-04-12",
  })),
];


export const paymentSettingsMock: PaymentSettingsState = {
  activeGateway: "Paystack",
  defaultCurrency: "Naira",
};



export const notificationLogs: NotificationLog[] = [
  ...Array.from({ length: 3 }).map((_, i) => ({
    id: `#NTF00${i + 1}`,
    trigger: "Payment Received",
    recipient: "Customer",
    status: "Delivered" as NotificationStatus,
    date: "12 Apr 2026, 10:20",
  })),
  ...Array.from({ length: 3 }).map((_, i) => ({
    id: `#NTF00${i + 4}`,
    trigger: "New Order Placed",
    recipient: "Customer",
    status: "Pending" as NotificationStatus,
    date: "11 Apr 2026, 16:45",
  })),
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `#NTF00${i + 7}`,
    trigger: "Refund Processed",
    recipient: "Customer",
    status: "Failed" as NotificationStatus,
    date: "11 Apr 2026, 16:45",
  })),
]

const now = new Date();

const daysAgo = (days: number) => {
  const date = new Date(now);
  date.setDate(date.getDate() - days);
  return date;
};

export const blogLogs: BlogLog[] = [
  {
    id: "1",
    title: "Tips and Tricks for Keeping Your Home Clean",
    category: "Tips & Maintenance",
    comments: 25,
    likes: 345,
    status: "Active",
    image: "/lifestyle/lifestyle1.png",
    createdAt: daysAgo(1),
  },
  {
    id: "2",
    title: "How to Improve Product Performance",
    category: "Business",
    comments: 18,
    likes: 220,
    status: "Active",
    image: "/lifestyle/lifestyle2.png",
    createdAt: daysAgo(2),
  },
  {
    id: "3",
    title: "The Future of Digital Commerce",
    category: "Technology",
    comments: 30,
    likes: 410,
    status: "Inactive",
    image: "/lifestyle/lifestyle3.png",
    createdAt: daysAgo(3),
  },
  {
    id: "4",
    title: "Understanding Modern Customer Behaviour",
    category: "Marketing",
    comments: 15,
    likes: 175,
    status: "Active",
    image: "/lifestyle/lifestyle4.png",
    createdAt: daysAgo(5),
  },

  // Last Week
  {
    id: "5",
    title: "Why Branding Matters in 2026",
    category: "Branding",
    comments: 12,
    likes: 150,
    status: "Active",
    createdAt: daysAgo(8),
  },
  {
    id: "6",
    title: "Building Trust Through Content Marketing",
    category: "Marketing",
    comments: 9,
    likes: 120,
    status: "Inactive",
    createdAt: daysAgo(10),
  },
  {
    id: "7",
    title: "Best Practices for E-commerce Growth",
    category: "Business",
    comments: 22,
    likes: 260,
    status: "Active",
    createdAt: daysAgo(12),
  },
  {
    id: "8",
    title: "Improving Customer Retention Strategies",
    category: "Business",
    comments: 14,
    likes: 180,
    status: "Active",
    createdAt: daysAgo(13),
  },
];

export const blogMetrics: BlogMetrics = {
  totalBlogs: 15500,
  totalComments: 3200,
  totalVisitors: 9000,
};

export const blogChartData = {
  blogs: [100, 120, 110, 130, 140, 150, 160],

  comments: [20, 22, 21, 25, 27, 26, 28],

  visitors: [15, 18, 17, 16, 18, 19, 17],
};

export const blogTabs: BlogTab[] = [
  { label: "This week", key: "this-week" },
  { label: "Last week", key: "last-week" },
];

export const defaultBlogSettings: BlogToggleState = {
  Manual: true,
  Automatic: false,
}
export const clubLogs: ClubLog[] = [
  {
    id: "1",
    title: "Tips and Tricks for Keeping Your Home Clean",
    category: "Tips & Maintenance",
    comments: 25,
    likes: 345,
    status: "Active",
    image: "/lifestyle/lifestyle1.png",
    createdAt: daysAgo(1),
  },
  {
    id: "2",
    title: "How to Improve Product Performance",
    category: "Business",
    comments: 18,
    likes: 220,
    status: "Active",
    image: "/lifestyle/lifestyle2.png",
    createdAt: daysAgo(2),
  },
  {
    id: "3",
    title: "The Future of Digital Commerce",
    category: "Technology",
    comments: 30,
    likes: 410,
    status: "Inactive",
    image: "/lifestyle/lifestyle3.png",
    createdAt: daysAgo(3),
  },
  {
    id: "4",
    title: "Understanding Modern Customer Behaviour",
    category: "Marketing",
    comments: 15,
    likes: 175,
    status: "Active",
    image: "/lifestyle/lifestyle4.png",
    createdAt: daysAgo(5),
  },

  // Last Week
  {
    id: "5",
    title: "Why Branding Matters in 2026",
    category: "Branding",
    comments: 12,
    likes: 150,
    status: "Active",
    createdAt: daysAgo(8),
  },
  {
    id: "6",
    title: "Building Trust Through Content Marketing",
    category: "Marketing",
    comments: 9,
    likes: 120,
    status: "Inactive",
    createdAt: daysAgo(10),
  },
  {
    id: "7",
    title: "Best Practices for E-commerce Growth",
    category: "Business",
    comments: 22,
    likes: 260,
    status: "Active",
    createdAt: daysAgo(12),
  },
  {
    id: "8",
    title: "Improving Customer Retention Strategies",
    category: "Business",
    comments: 14,
    likes: 180,
    status: "Active",
    createdAt: daysAgo(13),
  },
];

export const clubMetrics: ClubMetrics = {
  totalClubs: 15500,
  totalComments: 3200,
  totalVisitors: 9000,
};

export const clubChartData = {
  clubs: [100, 120, 110, 130, 140, 150, 160],

  comments: [20, 22, 21, 25, 27, 26, 28],

  visitors: [15, 18, 17, 16, 18, 19, 17],
};

export const clubTabs: ClubTab[] = [
  { label: "This week", key: "this-week" },
  { label: "Last week", key: "last-week" },
];

export const defaultClubSettings: ClubToggleState = {
  Manual: true,
  Automatic: false,
}

export const approvalMethods = [
  { label: "Manual Approval(Admin)", key: "Manual" },
  { label: "Automatic Approval(System)", key: "Automatic" },
] as const;

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
  ...Array.from({ length: 3 }).map((_, i) => ({
    id: `#ACT00${i + 1}`,
    adminUser: "John Okon",
    action: "Logged in",
    status: "Pending" as SecurityStatus,
    date: "12 Apr 2026, 10:15",
  })),
  ...Array.from({ length: 3 }).map((_, i) => ({
    id: `#ACT00${i + 4}`,
    adminUser: "Mary Effiong",
    action: "Changed password policy",
    status: "Delivered" as SecurityStatus,
    date: "12 Apr 2026, 10:20",
  })),
  ...Array.from({ length: 4 }).map((_, i) => ({
    id: `#ACT00${i + 7}`,
    adminUser: "Mary Effiong",
    action: "Failed login attempt",
    status: "Failed" as SecurityStatus,
    date: "11 Apr 2026, 16:45",
  })),
  {
    id: "#ACT0011",
    adminUser: "Grace Akpon",
    action: "Enabled 2FA",
    status: "Delivered" as SecurityStatus,
    date: "11 Apr 2026, 14:30",
  },
  {
    id: "#ACT0012",
    adminUser: "Admin Team",
    action: "Viewed activity logs",
    status: "Delivered" as SecurityStatus,
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