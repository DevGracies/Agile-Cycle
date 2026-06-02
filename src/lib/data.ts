import EbikesImage1 from "@/public/ebikes/ebikesm.png"
import EbikesImage2 from "@/public/ebikes/Ebike2.png"
import EbikesImage3 from "@/public/ebikes/Ebikes3.png"

import accessory1 from "@/public/accessories/accessory1.png"
import accessory2 from "@/public/accessories/accessory2.png"
import accessory3 from "@/public/accessories/accessory3.png"
import accessory4 from "@/public/accessories/accessory4.png"
import accessory5 from "@/public/accessories/accessory5.png"
import accessory6 from "@/public/accessories/accessory6.png"

import enhancement1 from "@/public/enhancement/enhancement1.png"
import enhancement2 from "@/public/enhancement/enhancement2.png"
import enhancement3 from "@/public/enhancement/enhancement3.png"
import enhancement4 from "@/public/enhancement/enhancement4.png"
import enhancement5 from "@/public/enhancement/enhancement5.png"
import enhancement6 from "@/public/enhancement/enhancement6.png"
import { Product } from "../types/product"


export const categories = [
  {
    title: 'Cruisers',
    description:
      'Relaxed stylish bikes designed for comfort and leisure rides. Perfect for anyone who values comfort.',
    image: EbikesImage1.src,
  },
  {
    title: 'Commuters',
    description:
      'Sleek lightweight e‑bikes designed for daily commutes, short trips, and urban exploration.',
    image: EbikesImage2.src,
  },
  {
    title: 'Cargo Bikes',
    description:
      'Heavy duty frames built to carry groceries, gear, or even passengers. Ideal for eco-friendly transport solutions.',
    image: EbikesImage3.src,
  },
  {
    title: 'Folding Bikes',
    description:
      'Compact designs that fold for easy storage and portability. Great for riders who need flexibility on the go.',
    image: EbikesImage1.src,
  },
  {
    title: 'Utility Bikes',
    description:
      'Versatile all‑purpose models that balances comfort and durability. A smart choice without needing multiple bikes.',
    image: EbikesImage2.src,
  },
  {
    title: 'Trikes ((3 Wheelers))',
    description:
      'High performance models engineered for riders who demand speed, endurance, and cutting-edge technology.',
    image: EbikesImage3.src,
  },
]

export const services = [
  {
    title: 'After‑Sales Services',
    description:
      'Professional maintenance repairs and support to keep your e-bike running smoothly long after purchase.',
  },
  {
    title: 'Tourism Packages',
    description:
      'Guided e‑bike tours and adventure experiences designed for leisure riders. and explorers',
  },
  {
    title: 'Advertising Packages',
    description:
      'Promotional opportunities for businesses using e‑bike fleets or branded accessories.',
  },
  {
    title: 'Consultancies',
    description:
      'Expert advice on fleet management sustainability programs and e‑bike integration for organizations.',
  },
  {
    title: 'Ride Sharing Services',
    description:
      'Community and corporate ride share solutions, offering eco‑friendly mobility at scale.',
  },
]

export const accessories: Product[] = [
  {
    id: "product7",
    slug: "adjustable-bike-stem",
    sku: "ACC-001",

    name: "Adjustable Bike Stem",
    description: "High-quality adjustable stem for better riding posture",
    shortDescription: "Ergonomic adjustable stem",

    category: "accessory",

    images: [{
      id: "img-1",
      url: accessory1.src,
      alt: "Adjustable Bike Stem"
    }],

    currentPrice: 73500,
    originalPrice: 80000,

    stock: 20,

    rating: 5,
    reviewCount: 12,

    isFeatured: false,
    isNewArrival: true,

    availabilityStatus: "in-stock",

    colors: [],
  },

  {
    id: "product8",
    slug: "oversize-saddle",
    sku: "ACC-002",

    name: "Oversize Saddle",
    description: "Comfortable oversized saddle designed for long-distance rides",
    shortDescription: "Comfort padded saddle",

    category: "accessory",

    images: [
      {
        id: "img-1",
        url: accessory2.src,
        alt: "Oversize Saddle",
      },
    ],

    currentPrice: 73500,
    originalPrice: 80000,

    stock: 18,

    rating: 5,
    reviewCount: 10,

    isFeatured: false,
    isNewArrival: false,

    availabilityStatus: "in-stock",

    colors: [],
  },

  {
    id: "product9",
    slug: "ebike-hitch-rack",
    sku: "ACC-003",

    name: "Ebike Hitch Rack",
    description: "Heavy-duty rack for transporting electric bikes securely",
    shortDescription: "Durable bike transport rack",

    category: "accessory",

    images: [
      {
        id: "img-1",
        url: accessory3.src,
        alt: "Ebike Hitch Rack",
      },
    ],

    currentPrice: 100000,
    originalPrice: 115000,

    stock: 12,

    rating: 5,
    reviewCount: 8,

    isFeatured: true,
    isNewArrival: false,

    availabilityStatus: "in-stock",

    colors: [],
  },

  {
    id: "product10",
    slug: "hunter-light",
    sku: "ACC-004",

    name: "Hunter Light",
    description: "High-intensity front bike light for night riding safety",
    shortDescription: "Powerful LED bike light",

    category: "accessory",

    images: [
      {
        id: "img-1",
        url: accessory4.src,
        alt: "Hunter Light",
      },
    ],

    currentPrice: 73500,
    originalPrice: 82000,

    stock: 25,

    rating: 5,
    reviewCount: 15,

    isFeatured: true,
    isNewArrival: true,

    availabilityStatus: "in-stock",

    colors: [],
  },

  {
    id: "product11",
    slug: "ebike-pump",
    sku: "ACC-005",

    name: "E-bike Pump",
    description: "Compact electric pump designed for quick tire inflation",
    shortDescription: "Portable electric pump",

    category: "accessory",

    images: [
      {
        id: "img-1",
        url: accessory5.src,
        alt: "E-bike Pump",
      },
    ],

    currentPrice: 73500,
    originalPrice: 79000,

    stock: 30,

    rating: 5,
    reviewCount: 6,

    isFeatured: false,
    isNewArrival: true,

    availabilityStatus: "in-stock",

    colors: [],
  },

  {
    id: "product12",
    slug: "brake-handle-bell",
    sku: "ACC-006",

    name: "Brake Handle Bell",
    description: "Integrated brake handle with built-in bell for safety",
    shortDescription: "2-in-1 brake and bell system",

    category: "accessory",

    images: [
      {
        id: "img-1",
        url: accessory6.src,
        alt: "Brake Handle Bell",
      },
    ],

    currentPrice: 100000,
    originalPrice: 110000,

    stock: 14,

    rating: 5,
    reviewCount: 9,

    isFeatured: false,
    isNewArrival: false,

    availabilityStatus: "in-stock",

    colors: [],
  },
];

export const enhancements: Product[] = [
  {
    id: "product13",
    slug: "extended-range-battery",
    sku: "ENH-001",

    name: "Extended Range Lithium Battery",
    description: "Upgrade your bike with longer battery life",
    shortDescription: "High capacity battery upgrade",

    category: "enhancement",

    images: [{
      id: "img-1",
      url: enhancement1.src,
      alt: "Extended Range Lithium Battery"
    }],

    currentPrice: 73000,
    originalPrice: 90000,

    stock: 15,

    rating: 5,
    reviewCount: 8,

    isFeatured: true,
    isNewArrival: false,

    availabilityStatus: "in-stock",

    colors: [],
  },
  {
  id: "product14",
  slug: "smart-display-console",
  sku: "ENH-002",

  name: "Smart Display Console",
  description: "Advanced LCD display with real-time ride metrics",
  shortDescription: "Ride data smart display",

  category: "enhancement",

  images: [
    {
      id: "img-1",
      url: enhancement2.src,
      alt: "Smart Display Console",
    },
  ],

  currentPrice: 73000,
  originalPrice: 88000,

  stock: 20,

  rating: 5,
  reviewCount: 11,

  isFeatured: true,
  isNewArrival: true,

  availabilityStatus: "in-stock",

  colors: [],
},

{
  id: "product15",
  slug: "suspension-seat-post",
  sku: "ENH-003",

  name: "Suspension Seat Post",
  description: "Improves comfort by absorbing road shocks",
  shortDescription: "Shock-absorbing seat post",

  category: "enhancement",

  images: [
    {
      id: "img-1",
      url: enhancement3.src,
      alt: "Suspension Seat Post",
    },
  ],

  currentPrice: 73000,
  originalPrice: 85000,

  stock: 18,

  rating: 5,
  reviewCount: 6,

  isFeatured: false,
  isNewArrival: true,

  availabilityStatus: "in-stock",

  colors: [],
},

{
  id: "product16",
  slug: "led-lighting-system",
  sku: "ENH-004",

  name: "Integrated LED Lighting System",
  description: "Front and rear LED lighting for enhanced night visibility",
  shortDescription: "Full bike LED lighting kit",

  category: "enhancement",

  images: [
    {
      id: "img-1",
      url: enhancement4.src,
      alt: "LED Lighting System",
    },
  ],

  currentPrice: 73000,
  originalPrice: 82000,

  stock: 25,

  rating: 5,
  reviewCount: 14,

  isFeatured: true,
  isNewArrival: false,

  availabilityStatus: "in-stock",

  colors: [],
},

{
  id: "product17",
  slug: "cargo-rear-rack",
  sku: "ENH-005",

  name: "Cargo Rear Rack with Panniers",
  description: "Heavy-duty rear rack with storage panniers for long rides",
  shortDescription: "Storage rack system",

  category: "enhancement",

  images: [
    {
      id: "img-1",
      url: enhancement5.src,
      alt: "Cargo Rear Rack",
    },
  ],

  currentPrice: 73000,
  originalPrice: 89000,

  stock: 12,

  rating: 5,
  reviewCount: 7,

  isFeatured: false,
  isNewArrival: false,

  availabilityStatus: "in-stock",

  colors: [],
},

{
  id: "product18",
  slug: "ergonomic-gel-saddle",
  sku: "ENH-006",

  name: "Ergonomic Gel Saddle",
  description: "Premium gel saddle designed for maximum riding comfort",
  shortDescription: "Comfort gel seat",

  category: "enhancement",

  images: [
    {
      id: "img-1",
      url: enhancement6.src,
      alt: "Ergonomic Gel Saddle",
    },
  ],

  currentPrice: 73000,
  originalPrice: 87000,

  stock: 22,

  rating: 5,
  reviewCount: 10,

  isFeatured: false,
  isNewArrival: true,

  availabilityStatus: "in-stock",

  colors: [],
},

];