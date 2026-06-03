import { Product } from "@/src/types/product";
import { getAvailabilityStatus } from "@/src/utils/product";

const accessories = [
  {
    id: "acc-1",
    name: "Rear Cargo Rack",
    description: "Heavy-duty storage rack",
    image: "/accessories/rack.png",
    price: 35000,
  },
  {
    id: "acc-2",
    name: "LED Headlight",
    description: "Night visibility upgrade",
    image: "/accessories/light.png",
    price: 12000,
  },
  {
    id: "acc-3",
    name: "Phone Mount",
    description: "Secure smartphone holder",
    image: "/accessories/mount.png",
    price: 8000,
  },
];

const variants = [
  {
    id: "variant-1",
    name: "Step Through",
    image: "/ebikes/Ebike2.png",
    description: "Comfortable urban riding",
  },
  {
    id: "variant-2",
    name: "Step Over",
    image: "/ebikes/Ebikes3.png",
    description: "Sport-focused frame",
  },
];

const reviews = [
  {
    id: "review-1",
    userName: "Michael A.",
    rating: 5,
    title: "Excellent Bike",
    comment:
      "Battery life exceeded expectations.",
    createdAt: "2026-01-12",
    verifiedPurchase: true,
  },
  {
    id: "review-2",
    userName: "Sarah T.",
    rating: 4,
    title: "Smooth Ride",
    comment:
      "Very comfortable for daily commuting.",
    createdAt: "2026-02-01",
    verifiedPurchase: true,
  },
];

export const products: Product[] = [
  {
    id: "product1",

    slug: "aerox-e-bike",

    sku: "AEROX-001",

    name: "AeroX E-Bike",

    description:
      "Agile Comet X is designed for urban adventurers and daily commuters. It features a powerful 500W Peak motor ensuring smooth and efficient driving on city streets. The removable 48V lithium-ion battery provides reliable performance and long-range riding capability.",

    shortDescription:
      "Easy to Maneuver. Built for Power.",

    category: "bike",

    images: [
      {
        id: "img1",
        url: "/home/product-image.png",
        alt: "AeroX Front View",
      },
      {
        id: "img2",
        url: "/ebikes/Ebikes.png",
        alt: "AeroX Side View",
      },
      {
        id: "img3",
        url: "/ebikes/Ebike2.png",
        alt: "AeroX Detail View",
      },
      {
        id: "img4",
        url: "/ebikes/Ebikes3.png",
        alt: "AeroX Rear View",
      },
    ],

    currentPrice: 240000,

    originalPrice: 280000,

    stock: 10,

    availabilityStatus:
      getAvailabilityStatus(10),

    rating: 4.8,

    reviewCount: 105,

    badge: "E-Bike",

    isFeatured: true,

    isNewArrival: false,

    specs: {
      range: "120km",
      material: "Carbon",
      weight: "15kg",
      torque: "90Nm",
      motor: "750W",
      batterySize: "48V",
      batteryAh: "12Ah",
      extraBatteryAh: "15Ah",
      color: "Sage",
      size: "Regular / 5'3 - 5'6",
      maxSpeed: "30 MPH",
      chargingTime: "3.5 hrs",
    },

    colors: [
      {
        id: "sage",
        name: "Sage",
        value: "#A8BBA3",
      },
      {
        id: "black",
        name: "Black",
        value: "#000000",
      },
      {
        id: "blue",
        name: "Blue",
        value: "#123D84",
      },
    ],

    batteryOptions: [
      {
        id: "battery-1",
        label: "12Ah",
      },
      {
        id: "battery-2",
        label: "12Ah + 15Ah",
      },
    ],

    variants,

    accessories,

    reviews,

    features: [
      {
        id: "feature-1",

        title: "Powerful Motor",

        subtitle:
          "Effortless acceleration for every ride",

        description:
          "High-performance motor engineered for power.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Motor",
            value: "750W",
          },
          {
            label: "Torque",
            value: "90Nm",
          },
        ],
      },

      {
        id: "feature-2",

        title: "Long Lasting Battery",

        subtitle:
          "Go further on a single charge",

        description:
          "Reliable battery system for long journeys.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Range",
            value: "120km",
          },
          {
            label: "Battery",
            value: "48V",
          },
        ],
      },
    ],
  },
  {
    id: "product2",
    slug: "voltrunner-pro",
    sku: "VOLT-002",
    name: "VoltRunner Pro",
    description:
      "VoltRunner Pro is built for high-speed urban commuting with a reinforced aluminum frame and precision motor control system designed for responsive acceleration and stability.",
    shortDescription: "Fast. Stable. Built for daily riders.",
    category: "bike",

    images: [
      {
        id: "img1",
        url: "/ebikes/Ebikes.png",
        alt: "VoltRunner Front View",
      },
      {
        id: "img2",
        url: "/ebikes/Ebike2.png",
        alt: "VoltRunner Side View",
      },
      {
        id: "img3",
        url: "https://i.pravatar.cc/600?img=12",
        alt: "VoltRunner Rider Preview",
      },
      {
        id: "img4",
        url: "/ebikes/Ebikes3.png",
        alt: "VoltRunner Rear View",
      },
    ],

    currentPrice: 310000,
    originalPrice: 360000,
    stock: 15,
    availabilityStatus: getAvailabilityStatus(15),
    rating: 4.7,
    reviewCount: 189,
    badge: "Best Seller",
    isFeatured: true,
    isNewArrival: false,

    specs: {
      range: "140km",
      material: "Aluminum Alloy",
      weight: "18kg",
      torque: "95Nm",
      motor: "1000W",
      batterySize: "52V",
      batteryAh: "20Ah",
      extraBatteryAh: "30Ah",
      color: "Matte Black",
      size: "Large / 5'7 - 6'2",
      maxSpeed: "35 MPH",
      chargingTime: "4 hrs",
    },

    colors: [
      { id: "black", name: "Matte Black", value: "#111111" },
      { id: "gray", name: "Graphite", value: "#6B7280" },
      { id: "white", name: "Pearl White", value: "#F3F4F6" },
    ],

    batteryOptions: [
      { id: "b1", label: "20Ah" },
      { id: "b2", label: "20Ah + 30Ah" },
    ],

    variants: [],
    accessories: [],
    reviews: [],
    features: [
      {
        id: "feature-1",

        title: "Powerful Motor",

        subtitle:
          "Effortless acceleration for every ride",

        description:
          "High-performance motor engineered for power.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Motor",
            value: "750W",
          },
          {
            label: "Torque",
            value: "90Nm",
          },
        ],
      },

      {
        id: "feature-2",

        title: "Long Lasting Battery",

        subtitle:
          "Go further on a single charge",

        description:
          "Reliable battery system for long journeys.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Range",
            value: "120km",
          },
          {
            label: "Battery",
            value: "48V",
          },
        ],
      },
    ],
  },

  {
    id: "product3",
    slug: "trailblazer-x",
    sku: "TRAIL-003",
    name: "TrailBlazer X",
    description:
      "TrailBlazer X is engineered for off-road terrain with reinforced suspension, high torque output, and durable carbon frame for extreme riding conditions.",
    shortDescription: "Dominate any terrain with confidence.",
    category: "bike",

    images: [
      {
        id: "img1",
        url: "/ebikes/Ebike2.png",
        alt: "TrailBlazer Front View",
      },
      {
        id: "img2",
        url: "/ebikes/Ebikes3.png",
        alt: "TrailBlazer Mountain Shot",
      },
      {
        id: "img3",
        url: "https://i.pravatar.cc/600?img=32",
        alt: "TrailBlazer Rider Action",
      },
      {
        id: "img4",
        url: "/ebikes/Ebikes.png",
        alt: "TrailBlazer Rear View",
      },
    ],

    currentPrice: 420000,
    originalPrice: 470000,
    stock: 7,
    availabilityStatus: getAvailabilityStatus(7),
    rating: 4.6,
    reviewCount: 98,
    badge: "Off-Road",
    isFeatured: false,
    isNewArrival: true,

    specs: {
      range: "110km",
      material: "Carbon Fiber",
      weight: "21kg",
      torque: "120Nm",
      motor: "1200W",
      batterySize: "60V",
      batteryAh: "25Ah",
      extraBatteryAh: "30Ah",
      color: "Forest Green",
      size: "Medium / 5'5 - 5'11",
      maxSpeed: "40 MPH",
      chargingTime: "5 hrs",
    },

    colors: [
      { id: "green", name: "Forest Green", value: "#14532D" },
      { id: "black", name: "Stealth Black", value: "#000000" },
      { id: "orange", name: "Burnt Orange", value: "#C2410C" },
    ],

    batteryOptions: [
      { id: "b1", label: "25Ah" },
      { id: "b2", label: "25Ah + 30Ah" },
    ],

    variants: [],
    accessories: [],
    reviews: [],
    features: [
      {
        id: "feature-1",

        title: "Powerful Motor",

        subtitle:
          "Effortless acceleration for every ride",

        description:
          "High-performance motor engineered for power.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Motor",
            value: "750W",
          },
          {
            label: "Torque",
            value: "90Nm",
          },
        ],
      },

      {
        id: "feature-2",

        title: "Long Lasting Battery",

        subtitle:
          "Go further on a single charge",

        description:
          "Reliable battery system for long journeys.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Range",
            value: "120km",
          },
          {
            label: "Battery",
            value: "48V",
          },
        ],
      },
    ],
  },

  {
    id: "product4",
    slug: "urbanglide-s",
    sku: "URB-004",
    name: "Urban Glide S",
    description:
      "Urban Glide S is optimized for daily city commuting with lightweight structure, efficient battery usage, and smooth handling for urban environments.",
    shortDescription: "Effortless city commuting.",
    category: "bike",

    images: [
      {
        id: "img1",
        url: "/ebikes/Ebikes3.png",
        alt: "Urban Glide Front View",
      },
      {
        id: "img2",
        url: "/ebikes/Ebike2.png",
        alt: "Urban Glide Side View",
      },
      {
        id: "img3",
        url: "https://i.pravatar.cc/600?img=47",
        alt: "Urban Rider Lifestyle",
      },
      {
        id: "img4",
        url: "/ebikes/Ebikes.png",
        alt: "Urban Glide Rear View",
      },
    ],

    currentPrice: 195000,
    originalPrice: 230000,
    stock: 22,
    availabilityStatus: getAvailabilityStatus(22),
    rating: 4.4,
    reviewCount: 72,
    badge: "City Rider",
    isFeatured: false,
    isNewArrival: false,

    specs: {
      range: "85km",
      material: "Aluminum",
      weight: "14kg",
      torque: "70Nm",
      motor: "500W",
      batterySize: "36V",
      batteryAh: "12Ah",
      extraBatteryAh: "18Ah",
      color: "Pearl White",
      size: "Regular / 5'2 - 5'8",
      maxSpeed: "28 MPH",
      chargingTime: "3 hrs",
    },

    colors: [
      { id: "white", name: "Pearl White", value: "#F5F5F5" },
      { id: "blue", name: "Sky Blue", value: "#60A5FA" },
      { id: "gray", name: "Slate", value: "#334155" },
    ],

    batteryOptions: [
      { id: "b1", label: "12Ah" },
      { id: "b2", label: "12Ah + 18Ah" },
    ],

    variants: [],
    accessories: [],
    reviews: [],
    features: [
      {
        id: "feature-1",

        title: "Powerful Motor",

        subtitle:
          "Effortless acceleration for every ride",

        description:
          "High-performance motor engineered for power.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Motor",
            value: "750W",
          },
          {
            label: "Torque",
            value: "90Nm",
          },
        ],
      },

      {
        id: "feature-2",

        title: "Long Lasting Battery",

        subtitle:
          "Go further on a single charge",

        description:
          "Reliable battery system for long journeys.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Range",
            value: "120km",
          },
          {
            label: "Battery",
            value: "48V",
          },
        ],
      },
    ],
  },

  {
    id: "product5",
    slug: "thunderbolt-gt",
    sku: "THUN-005",
    name: "ThunderBolt GT",
    description:
      "ThunderBolt GT delivers extreme performance with high torque motor, extended range battery system, and premium shock absorption for long distance riders.",
    shortDescription: "Maximum power. Maximum range.",
    category: "bike",

    images: [
      {
        id: "img1",
        url: "/home/product-image.png",
        alt: "ThunderBolt Front View",
      },
      {
        id: "img2",
        url: "/ebikes/Ebikes.png",
        alt: "ThunderBolt Side View",
      },
      {
        id: "img3",
        url: "https://i.pravatar.cc/600?img=15",
        alt: "ThunderBolt Rider",
      },
      {
        id: "img4",
        url: "/ebikes/Ebike2.png",
        alt: "ThunderBolt Rear View",
      },
    ],

    currentPrice: 550000,
    originalPrice: 620000,
    stock: 5,
    availabilityStatus: getAvailabilityStatus(5),
    rating: 5,
    reviewCount: 230,
    badge: "Premium",
    isFeatured: true,
    isNewArrival: true,

    specs: {
      range: "180km",
      material: "Carbon Fiber",
      weight: "23kg",
      torque: "140Nm",
      motor: "1500W",
      batterySize: "72V",
      batteryAh: "30Ah",
      extraBatteryAh: "40Ah",
      color: "Crimson Red",
      size: "Large / 5'8 - 6'4",
      maxSpeed: "45 MPH",
      chargingTime: "6 hrs",
    },

    colors: [
      { id: "red", name: "Crimson Red", value: "#DC2626" },
      { id: "black", name: "Jet Black", value: "#000000" },
      { id: "gold", name: "Gold", value: "#F59E0B" },
    ],

    batteryOptions: [
      { id: "b1", label: "30Ah" },
      { id: "b2", label: "30Ah + 40Ah" },
    ],

    variants: [],
    accessories: [],
    reviews: [],
    features: [
      {
        id: "feature-1",

        title: "Powerful Motor",

        subtitle:
          "Effortless acceleration for every ride",

        description:
          "High-performance motor engineered for power.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Motor",
            value: "750W",
          },
          {
            label: "Torque",
            value: "90Nm",
          },
        ],
      },

      {
        id: "feature-2",

        title: "Long Lasting Battery",

        subtitle:
          "Go further on a single charge",

        description:
          "Reliable battery system for long journeys.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Range",
            value: "120km",
          },
          {
            label: "Battery",
            value: "48V",
          },
        ],
      },
    ],
  },

  {
    id: "product6",
    slug: "ecoride-mini",
    sku: "ECO-006",
    name: "EcoRide Mini",
    description:
      "EcoRide Mini is a compact foldable e-bike designed for portability and efficiency, perfect for tight urban spaces and daily commuting.",
    shortDescription: "Compact. Foldable. Smart.",
    category: "bike",

    images: [
      {
        id: "img1",
        url: "/ebikes/Ebike2.png",
        alt: "EcoRide Folded View",
      },
      {
        id: "img2",
        url: "/ebikes/Ebikes3.png",
        alt: "EcoRide Side View",
      },
      {
        id: "img3",
        url: "https://i.pravatar.cc/600?img=22",
        alt: "EcoRide Lifestyle Shot",
      },
      {
        id: "img4",
        url: "/home/product-image.png",
        alt: "EcoRide Rear View",
      },
    ],

    currentPrice: 160000,
    originalPrice: 190000,
    stock: 30,
    availabilityStatus: getAvailabilityStatus(30),
    rating: 4.5,
    reviewCount: 64,
    badge: "Foldable",
    isFeatured: false,
    isNewArrival: true,

    specs: {
      range: "70km",
      material: "Aluminum",
      weight: "12kg",
      torque: "60Nm",
      motor: "350W",
      batterySize: "36V",
      batteryAh: "10Ah",
      extraBatteryAh: "15Ah",
      color: "Ocean Blue",
      size: "One Size",
      maxSpeed: "25 MPH",
      chargingTime: "2.5 hrs",
    },

    colors: [
      { id: "blue", name: "Ocean Blue", value: "#2563EB" },
      { id: "white", name: "Cloud White", value: "#F9FAFB" },
      { id: "black", name: "Graphite", value: "#111827" },
    ],

    batteryOptions: [
      { id: "b1", label: "10Ah" },
      { id: "b2", label: "10Ah + 15Ah" },
    ],

    variants: [],
    accessories: [],
    reviews: [],
    features: [
      {
        id: "feature-1",

        title: "Powerful Motor",

        subtitle:
          "Effortless acceleration for every ride",

        description:
          "High-performance motor engineered for power.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Motor",
            value: "750W",
          },
          {
            label: "Torque",
            value: "90Nm",
          },
        ],
      },

      {
        id: "feature-2",

        title: "Long Lasting Battery",

        subtitle:
          "Go further on a single charge",

        description:
          "Reliable battery system for long journeys.",

        image: "/home/explore.png",

        specs: [
          {
            label: "Range",
            value: "120km",
          },
          {
            label: "Battery",
            value: "48V",
          },
        ],
      },
    ],
  },
];