
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



export const returnCharge = [
  "If the return is due to our reasons (such as: incorrect products, quality problems of products), we will provide a full refund for you, and the consumer is not required to bear the shipping fee for this reason.",
  "If the return is caused by the consumer (such as: don’t like/want the item, ordered a wrong product/size), consumer should be responsible for the shipping fee. The specific fee should be based on the express company you choose.",
  "No restocking fee and handling fee to be charged to the consumers for the return of a product. Just be responsible for the return shipping fee.",
  "In the case of a consumer-responsible return, the consumer can purchase a return shipping label at their own expense, or request a return shipping label service from the seller, who will designate a carrier to collect the return package. The original shipping fee will be deducted from the consumer's refund.",
  "If the consumer chooses freight collect, the return shipping cost will be deducted from your refund. Return shipping costs are the responsibility of the customer. Shipping costs are non-refundable.",
]
export const afterSalesSolutions = [
  {
    title: "For Quality Issues Outside of the Return Policy:",
    description: "If the quality issue is not covered under the above-mentioned return policy, repairs or replacements will be the primary solutions. Returns are generally not accepted. If the customer insists on returning the product, a 50% return fee of the original order amount and return shipping costs will be applied",
  },
  {
    title: "Non-Customer-Caused Issues (Excluding Quality Problems &  incorrect shipments):",
    description: "Non-quality-related issues (e.g., shipping delays) are generally not eligible for returns. However, appropriate compensation may be offered to the customer.",
  },
  {
    title: "For Customers Willing to Resolve Quality Issues Independently:",
    description: "Customers who choose to handle the quality issue themselves may be eligible for compensation."
  },
  {
    title: "Incorrect shipments:",
    description: "Please assist with the return, and we will send you the correct item.",
  }
]
export const cookieTypes = [
  {
    title: "Advertising Cookies",
    description: "Advertising cookies are placed on your computer by advertisers and ad servers in order to display advertisements that are most likely to be of interest to you. These cookies allow advertisers and ad servers to gather information about your visits to the Site and other websites, alternate the ads sent to a specific computer, and track how often an ad has been viewed and by whom. These cookies are linked to a computer and do not gather any personal information about you.",
  },
  {
    title: "Analytics Cookies",
    description: "Analytics cookies monitor how users reached the Site, and how they interact with and move around once on the Site. These cookies let us know what features on the Site are working the best and what features on the Site can be improved.",
  },
  {
    title: "Our Cookies",
    description: "Our cookies are “first-party cookies”, and can be either permanent or temporary. These are necessary cookies, without which the Site won't work properly or be able to provide certain features and functionalities. Some of these may be manually disabled in your browser, but may affect the functionality of the Site."
  },
  {
    title: "Personalization Cookies",
    description: "Personalization cookies are used to recognize repeat visitors to the Site. We use these cookies to record your browsing history, the pages you have visited, and your settings and preferences each time you visit the Site.",
  },
  {
    title: "Security Cookies",
    description: "Security cookies help identify and prevent security risks. We use these cookies to authenticate users and protect user data from unauthorized parties.",
  },
  {
    title: "Site Management Cookies",
    description: "Site management cookies are used to maintain your identity or session on the Site so that you are not logged off unexpectedly, and any information you enter is retained from page to page. These cookies cannot be turned off individually, but you can disable all cookies in your browser.",
  },
  {
    title: "Third-Party Cookies",
    description: "Third-party cookies may be place on your computer when you visit the Site by companies that run certain services we offer. These cookies allow the third parties to gather and track certain information about you. These cookies can be manually disabled in your browser.",
  },
]

export const options = [
  {
    title: "Single Product Compensation Options:",
    items: [
      "Accessories valued between ₦150,000 and ₦300,000.",
      "Discounts of up to ₦150,000.",
      "For compensation exceeding the above amounts or cases with special customer requests, customer service staff must obtain authorization from their supervisor.",
    ]
  },
  {
    title: "Return Shipping Costs:",
    items: [
      "Customers are responsible for return shipping. These costs are non-refundable.",
    ]
  },
  {
    title: "Original Packaging Required",
    items: [
      "All returns must include original packaging, be free of wear, dirt, and damage, and include all items (battery, charger, keys, etc.).",
      "Customers should retain the original packaging.",
      "If new packaging is required for a return, the customer will be responsible for packaging material fees and return shipping costs: ₦200,000 for bike packaging.",
    ]
  },
]

export const returnPolicies = [
  "If goods are returned in perfect condition within 30 days of the goods being dispatched to you, we will be happy to offer you a return, account credit or refund.",
  "When we have received your notification of withdrawal, you must return or hand over the products to us within a maximum of 30 days. You are therefore on time if you return the products before the period of 30 days has expired.",
  "In the case of free shipping, if there is no quality problem, the consumer needs to bear the return shipping fee. If you cancel your order before it ships, you will not be charged for return shipping.",
]
