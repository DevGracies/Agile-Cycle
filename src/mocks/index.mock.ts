
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




// export const products: Product[] = [
//   {
//     id: "product1",
//     name: "AeroX E-Bike",
//     description:
//       "Agile Comet X is designed for urban adventurers and daily commuters. It features a powerful 500W Peak motor ensuring smooth and efficient driving on city streets. The removable 48V lithium-ion battery provides reliable performance and long-range riding capability.",
//     shortDescription: "Easy to Maneuver. Built for Power.",
//     image: [
//       "/home/product-image.png",
//       "/ebikes/Ebikes.png",
//       "/ebikes/Ebike2.png",
//       "/ebikes/Ebikes3.png",
//     ],
//     currentPrice: 240000,
//     originalPrice: 280000,
//     rating: 4.8,
//     stock: 10,
//     reviewCount: 105,
//     category: "bike",
//     badge: "E-Bike",
//     quantity: 1,
//     specs: {
//       range: "120km",
//       material: "Carbon",
//       weight: "15kg",
//       torque: "90Nm",
//       motor: "750W",
//       batterySize: "48V",
//       batteryAh: "12Ah",
//       extraBatteryAh: "15Ah",
//       color: "Sage",
//       size: "Regular / 5'3 - 5'6",
//     },
//   },

//   {
//     id: "product2",
//     name: "VoltRunner Pro",
//     description:
//       "Built for high-performance commuting, VoltRunner Pro combines a powerful motor with responsive handling and a durable aluminum frame. Perfect for city riders seeking speed and comfort.",
//     shortDescription: "Fast, Responsive & Reliable.",
//     image: [
//       "/ebikes/Ebikes.png",
//       "/ebikes/Ebike2.png",
//       "/home/product-image.png",
//       "/ebikes/Ebikes3.png",
//     ],
//     currentPrice: 310000,
//     originalPrice: 350000,
//     rating: 4.9,
//     stock: 15,
//     reviewCount: 182,
//     category: "bike",
//     badge: "Best Seller",
//     quantity: 1,
//     specs: {
//       range: "140km",
//       material: "Aluminum Alloy",
//       weight: "18kg",
//       torque: "95Nm",
//       motor: "1000W",
//       batterySize: "52V",
//       batteryAh: "24Ah",
//       extraBatteryAh: "30Ah",
//       color: "Matte Black",
//       size: "Large / 5'7 - 6'2",
//     },
//   },

//   {
//     id: "product3",
//     name: "TrailBlazer X",
//     description:
//       "Designed for off-road adventures, TrailBlazer X delivers exceptional power and suspension performance. Conquer trails, hills, and rugged terrain with confidence.",
//     shortDescription: "Conquer Every Trail.",
//     image: [
//       "/ebikes/Ebike2.png",
//       "/ebikes/Ebikes3.png",
//       "/home/product-image.png",
//       "/ebikes/Ebikes.png",
//     ],
//     currentPrice: 420000,
//     originalPrice: 470000,
//     rating: 4.7,
//     stock: 7,
//     reviewCount: 94,
//     category: "bike",
//     badge: "Off-Road",
//     quantity: 1,
//     specs: {
//       range: "100km",
//       material: "Carbon Fiber",
//       weight: "20kg",
//       torque: "110Nm",
//       motor: "1200W",
//       batterySize: "60V",
//       batteryAh: "25Ah",
//       extraBatteryAh: "30Ah",
//       color: "Forest Green",
//       size: "Medium / 5'5 - 5'11",
//     },
//   },

//   {
//     id: "product4",
//     name: "Urban Glide S",
//     description:
//       "Urban Glide S is engineered for daily city commuting. Its lightweight design, integrated lighting system, and efficient battery make it a dependable companion for everyday travel.",
//     shortDescription: "Smooth City Commutes.",
//     image: [
//       "/ebikes/Ebikes3.png",
//       "/home/product-image.png",
//       "/ebikes/Ebike2.png",
//       "/ebikes/Ebikes.png",
//     ],
//     currentPrice: 195000,
//     originalPrice: 230000,
//     rating: 4.5,
//     stock: 20,
//     reviewCount: 76,
//     category: "bike",
//     badge: "City Rider",
//     quantity: 1,
//     specs: {
//       range: "90km",
//       material: "Aluminum",
//       weight: "14kg",
//       torque: "70Nm",
//       motor: "500W",
//       batterySize: "36V",
//       batteryAh: "12Ah",
//       extraBatteryAh: "18Ah",
//       color: "Pearl White",
//       size: "Regular / 5'2 - 5'8",
//     },
//   },

//   {
//     id: "product5",
//     name: "ThunderBolt GT",
//     description:
//       "ThunderBolt GT combines raw power with premium comfort. Featuring a high-capacity battery and advanced braking system, it's built for long-distance riders.",
//     shortDescription: "Long Range. Extreme Power.",
//     image: [
//       "/home/product-image.png",
//       "/ebikes/Ebikes3.png",
//       "/ebikes/Ebikes.png",
//       "/ebikes/Ebike2.png",
//     ],
//     currentPrice: 550000,
//     originalPrice: 620000,
//     rating: 5,
//     stock: 5,
//     reviewCount: 221,
//     category: "bike",
//     badge: "Premium",
//     quantity: 1,
//     specs: {
//       range: "180km",
//       material: "Carbon Fiber",
//       weight: "22kg",
//       torque: "130Nm",
//       motor: "1500W",
//       batterySize: "72V",
//       batteryAh: "30Ah",
//       extraBatteryAh: "40Ah",
//       color: "Crimson Red",
//       size: "Large / 5'8 - 6'4",
//     },
//   },

//   {
//     id: "product6",
//     name: "EcoRide Mini",
//     description:
//       "EcoRide Mini is a compact foldable e-bike ideal for urban dwellers. Easy to store and transport while still delivering excellent range and efficiency.",
//     shortDescription: "Compact. Foldable. Efficient.",
//     image: [
//       "/ebikes/Ebike2.png",
//       "/home/product-image.png",
//       "/ebikes/Ebikes3.png",
//       "/ebikes/Ebikes.png",
//     ],
//     currentPrice: 160000,
//     originalPrice: 190000,
//     rating: 4.6,
//     stock: 25,
//     reviewCount: 68,
//     category: "bike",
//     badge: "Foldable",
//     quantity: 1,
//     specs: {
//       range: "75km",
//       material: "Aluminum",
//       weight: "12kg",
//       torque: "60Nm",
//       motor: "350W",
//       batterySize: "36V",
//       batteryAh: "12Ah",
//       extraBatteryAh: "18Ah",
//       color: "Ocean Blue",
//       size: "One Size Fits Most",
//     },
//   },
// ];

// slug: string;
// sku: string;
// isFeatured: boolean;
// isNewArrival: boolean;
// discountPercentage: number;
// availabilityStatus: "in-stock" | "low-stock" | "out-of-stock";



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