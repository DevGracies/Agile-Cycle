import Ebike from "../models/ebike";

export const ebikes = [
  {
    name: "Volt Cruiser X",
    slug: "volt-cruiser-x",
    sku: "EBK-1001",

    description:
      "A premium cruiser e-bike designed for comfortable city rides and weekend adventures with a powerful rear hub motor and long-range battery.",

    shortDescription:
      "Comfort-focused electric cruiser with 90km range.",

    images: [
      {
        url: "https://images.unsplash.com/photo-1624243519828-52a0f2c88af3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWJpa2VzfGVufDB8fDB8fHww",
        alt: "Accessory Image"
      },
      {
        url: "https://images.unsplash.com/photo-1649878938553-1eaac5c27375?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWJpa2VzfGVufDB8fDB8fHww",
        alt: "Accessory Image"
      },
    ],

    price: 2599,
    discountPrice: 2399,

    shippingDuration: "3-5 Business Days",

    category: "cruiser",

    stock: 18,

    inventoryStatus: "in-stock",

    averageRating: 4.8,

    reviewCount: 124,

    badge: "Best Seller",

    isFeatured: true,

    isNewArrival: false,

    specs: {
      range: "90 km",
      material: "6061 Aluminum",
      weight: "27 kg",
      torque: "85 Nm",
      motor: "750W Rear Hub",
      batterySize: "48V",
      batteryAh: "20Ah",
      extraBatteryAh: "10Ah",
      size: "Large",
      color: "Matte Black",
      maxSpeed: "45 km/h",
      chargingTime: "6 Hours",
    },

    video: {
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },

    colors: [
      {
        name: "Matte Black",
        color: "#000000",
      },
      {
        name: "Ocean Blue",
        color: "#0055FF",
      },
    ],

    batteryOptions: [
      {
        label: "48V 20Ah",
      },
      {
        label: "48V 30Ah",
      },
    ],

    variants: [
      {
        name: "Step Through",
        image: "https://images.unsplash.com/photo-1665731734325-2849f05a619e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Easy mounting frame.",
      },
      {
        name: "High Step",
        image: "https://images.unsplash.com/photo-1627631498315-3116f6484188?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Traditional frame.",
      },
    ],

    features: [
      {
        title: "Powerful Motor",
        subtitle: "750W Hub Motor",
        description:
          "Climb hills effortlessly with high torque output.",

        image:
          "https://images.unsplash.com/photo-1585160442128-b2fa152f1dd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Power",
            value: "750W",
          },
          {
            label: "Torque",
            value: "85Nm",
          },
        ],
      },
      {
        title: "Long Range Battery",
        subtitle: "48V Lithium",

        description:
          "Ride longer without worrying about charging.",

        image:
          "https://plus.unsplash.com/premium_photo-1683134662524-623d1f1fd0e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Capacity",
            value: "20Ah",
          },
        ],
      },
    ],

    isActive: true,
  },

  {
    name: "Metro Commuter Pro",
    slug: "metro-commuter-pro",
    sku: "EBK-1002",

    description:
      "Designed specifically for urban commuting with integrated lights and lightweight aluminum construction.",

    shortDescription:
      "Lightweight commuter electric bike.",

    images: [
      {
        url: "https://images.unsplash.com/photo-1620801082287-d1913a342dce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWJpa2VzfGVufDB8fDB8fHww",
        alt: "Accessory Image"
      },
      {
        url: "https://images.unsplash.com/photo-1625304664697-30a254733647?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Accessory Image"
      },
    ],

    price: 1899,

    discountPrice: 1749,

    shippingDuration: "2-4 Business Days",

    category: "commuter",

    stock: 34,

    inventoryStatus: "in-stock",

    averageRating: 4.7,

    reviewCount: 89,

    badge: "Popular",

    isFeatured: true,

    isNewArrival: true,

    specs: {
      range: "70 km",
      material: "Aluminum",
      weight: "23 kg",
      torque: "65 Nm",
      motor: "500W Mid Drive",
      batterySize: "48V",
      batteryAh: "15Ah",
      extraBatteryAh: "",
      size: "Medium",
      color: "Silver",
      maxSpeed: "35 km/h",
      chargingTime: "5 Hours",
    },

    video: {
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },

    colors: [
      {
        name: "Silver",
        color: "#C0C0C0",
      },
    ],

    batteryOptions: [
      {
        label: "48V 15Ah",
      },
    ],

    variants: [
      {
        name: "Step Through",
        image: "https://images.unsplash.com/photo-1665731734325-2849f05a619e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Easy mounting frame.",
      },
      {
        name: "High Step",
        image: "https://images.unsplash.com/photo-1627631498315-3116f6484188?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Traditional frame.",
      },
    ],

    features: [
      {
        title: "Powerful Motor",
        subtitle: "750W Hub Motor",
        description:
          "Climb hills effortlessly with high torque output.",

        image:
          "https://images.unsplash.com/photo-1585160442128-b2fa152f1dd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Power",
            value: "750W",
          },
          {
            label: "Torque",
            value: "85Nm",
          },
        ],
      },
      {
        title: "Long Range Battery",
        subtitle: "48V Lithium",

        description:
          "Ride longer without worrying about charging.",

        image:
          "https://plus.unsplash.com/premium_photo-1683134662524-623d1f1fd0e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Capacity",
            value: "20Ah",
          },
        ],
      },
    ],

    isActive: true,
  },

  {
    name: "Trail Blazer M9",
    slug: "trail-blazer-m9",
    sku: "EBK-1003",

    description: "High-performance utility e-bike for rough terrain.",

    shortDescription: "Utility electric bike.",

    images: [
      {
        url: "https://images.unsplash.com/photo-1622598473264-81a98f1c7be5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Accessory Image"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1663091081411-e5e6005d1e13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWJpa2VzfGVufDB8fDB8fHww",
        alt: "Accessory Image"
      },
    ],

    price: 3499,

    discountPrice: 3299,

    shippingDuration: "5-7 Business Days",

    category: "utility",

    stock: 8,

    inventoryStatus: "low-stock",

    averageRating: 4.9,

    reviewCount: 52,

    badge: "Premium",

    isFeatured: true,

    isNewArrival: true,

    specs: {
      range: "120 km",
      material: "Carbon Fiber",
      weight: "24 kg",
      torque: "100 Nm",
      motor: "1000W Mid Drive",
      batterySize: "52V",
      batteryAh: "25Ah",
      extraBatteryAh: "15Ah",
      size: "Large",
      color: "Red",
      maxSpeed: "50 km/h",
      chargingTime: "7 Hours",
    },

    video: {
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },

    colors: [
      {
        name: "Red",
        color: "#FF0000",
      },
    ],

    batteryOptions: [{ label: "52V 25Ah" }],

    variants: [
      {
        name: "Step Through",
        image: "https://images.unsplash.com/photo-1665731734325-2849f05a619e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Easy mounting frame.",
      },
      {
        name: "High Step",
        image: "https://images.unsplash.com/photo-1627631498315-3116f6484188?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Traditional frame.",
      },
    ],

    features: [
      {
        title: "Powerful Motor",
        subtitle: "750W Hub Motor",
        description:
          "Climb hills effortlessly with high torque output.",

        image:
          "https://images.unsplash.com/photo-1585160442128-b2fa152f1dd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Power",
            value: "750W",
          },
          {
            label: "Torque",
            value: "85Nm",
          },
        ],
      },
      {
        title: "Long Range Battery",
        subtitle: "48V Lithium",

        description:
          "Ride longer without worrying about charging.",

        image:
          "https://plus.unsplash.com/premium_photo-1683134662524-623d1f1fd0e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Capacity",
            value: "20Ah",
          },
        ],
      },
    ],

    isActive: true,
  },

  {
    name: "Cargo Master XL",
    slug: "cargo-master-xl",
    sku: "EBK-1004",

    description: "Heavy-duty electric cargo bike.",

    shortDescription: "Cargo e-bike.",

    images: [
      {
        url: "https://images.unsplash.com/photo-1618987688327-dc0b28888fe4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWJpa2VzfGVufDB8fDB8fHww",
        alt: "Accessory Image"
      },
      {
        url: "https://images.unsplash.com/photo-1666360058702-a3aa07227c53?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Accessory Image"
      },
    ],

    price: 4199,

    discountPrice: 3999,

    shippingDuration: "7-10 Business Days",

    category: "cargo",

    stock: 5,

    inventoryStatus: "low-stock",

    averageRating: 4.8,

    reviewCount: 41,

    badge: "Commercial",

    isFeatured: false,

    isNewArrival: false,

    specs: {
      range: "100 km",
      material: "Steel",
      weight: "38 kg",
      torque: "120 Nm",
      motor: "1000W",
      batterySize: "52V",
      batteryAh: "30Ah",
      extraBatteryAh: "",
      size: "XL",
      color: "Black",
      maxSpeed: "40 km/h",
      chargingTime: "8 Hours",
    },

    video: {
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },

    colors: [
      {
        name: "Black",
        color: "#111111",
      },
    ],

    batteryOptions: [{ label: "52V 30Ah" }],

    variants: [
      {
        name: "Step Through",
        image: "https://images.unsplash.com/photo-1665731734325-2849f05a619e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Easy mounting frame.",
      },
      {
        name: "High Step",
        image: "https://images.unsplash.com/photo-1627631498315-3116f6484188?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Traditional frame.",
      },
    ],

    features: [
      {
        title: "Powerful Motor",
        subtitle: "750W Hub Motor",
        description:
          "Climb hills effortlessly with high torque output.",

        image:
          "https://images.unsplash.com/photo-1585160442128-b2fa152f1dd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Power",
            value: "750W",
          },
          {
            label: "Torque",
            value: "85Nm",
          },
        ],
      },
      {
        title: "Long Range Battery",
        subtitle: "48V Lithium",

        description:
          "Ride longer without worrying about charging.",

        image:
          "https://plus.unsplash.com/premium_photo-1683134662524-623d1f1fd0e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Capacity",
            value: "20Ah",
          },
        ],
      },
    ],

    isActive: true,
  },

  {
    name: "FoldRide Compact",
    slug: "foldride-compact",
    sku: "EBK-1005",

    description: "Compact folding electric bicycle.",

    shortDescription: "Portable folding e-bike.",

    images: [
      {
        url: "https://images.unsplash.com/photo-1625090665951-b93cbcb2687f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Accessory Image"
      },
      {
        url: "https://images.unsplash.com/photo-1681261669206-c653789dc7bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Accessory Image"
      },
    ],

    price: 1499,

    discountPrice: 1399,

    shippingDuration: "3-5 Business Days",

    category: "folding",

    stock: 25,

    inventoryStatus: "in-stock",

    averageRating: 4.6,

    reviewCount: 73,

    badge: "Compact",

    isFeatured: false,

    isNewArrival: true,

    specs: {
      range: "60 km",
      material: "Aluminum",
      weight: "19 kg",
      torque: "55 Nm",
      motor: "350W",
      batterySize: "36V",
      batteryAh: "12Ah",
      extraBatteryAh: "",
      size: "Compact",
      color: "White",
      maxSpeed: "30 km/h",
      chargingTime: "4 Hours",
    },

    video: {
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },

    colors: [
      {
        name: "White",
        color: "#FFFFFF",
      },
    ],

    batteryOptions: [{ label: "36V 12Ah" }],

    variants: [
      {
        name: "Step Through",
        image: "https://images.unsplash.com/photo-1665731734325-2849f05a619e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Easy mounting frame.",
      },
      {
        name: "High Step",
        image: "https://images.unsplash.com/photo-1627631498315-3116f6484188?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Traditional frame.",
      },
    ],

    features: [
      {
        title: "Powerful Motor",
        subtitle: "750W Hub Motor",
        description:
          "Climb hills effortlessly with high torque output.",

        image:
          "https://images.unsplash.com/photo-1585160442128-b2fa152f1dd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Power",
            value: "750W",
          },
          {
            label: "Torque",
            value: "85Nm",
          },
        ],
      },
      {
        title: "Long Range Battery",
        subtitle: "48V Lithium",

        description:
          "Ride longer without worrying about charging.",

        image:
          "https://plus.unsplash.com/premium_photo-1683134662524-623d1f1fd0e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Capacity",
            value: "20Ah",
          },
        ],
      },
    ],

    isActive: true,
  },

  {
    name: "Adventure Explorer",
    slug: "adventure-explorer",
    sku: "EBK-1006",

    description: "Built for long-distance touring and exploration.",

    shortDescription: "Adventure touring e-bike.",

    images: [
      {
        url: "https://images.unsplash.com/photo-1619678786641-23eb19f27924?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Accessory Image"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1663051065015-a4fe49978a69?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        alt: "Accessory Image"
      },
    ],

    price: 2999,

    discountPrice: 2799,

    shippingDuration: "5-7 Business Days",

    category: "trikes",

    stock: 0,

    inventoryStatus: "out-of-stock",

    averageRating: 4.9,

    reviewCount: 146,

    badge: "Editor's Choice",

    isFeatured: true,

    isNewArrival: false,

    specs: {
      range: "150 km",
      material: "Aluminum Alloy",
      weight: "28 kg",
      torque: "90 Nm",
      motor: "750W Mid Drive",
      batterySize: "52V",
      batteryAh: "28Ah",
      extraBatteryAh: "20Ah",
      size: "Large",
      color: "Forest Green",
      maxSpeed: "45 km/h",
      chargingTime: "7 Hours",
    },

    video: {
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },

    colors: [
      {
        name: "Forest Green",
        color: "#228B22",
      },
    ],

    batteryOptions: [
      {
        label: "52V 28Ah",
      },
    ],

    variants: [
      {
        name: "Step Through",
        image: "https://images.unsplash.com/photo-1665731734325-2849f05a619e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Easy mounting frame.",
      },
      {
        name: "High Step",
        image: "https://images.unsplash.com/photo-1627631498315-3116f6484188?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Traditional frame.",
      },
    ],

    features: [
      {
        title: "Powerful Motor",
        subtitle: "750W Hub Motor",
        description:
          "Climb hills effortlessly with high torque output.",

        image:
          "https://images.unsplash.com/photo-1585160442128-b2fa152f1dd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Power",
            value: "750W",
          },
          {
            label: "Torque",
            value: "85Nm",
          },
        ],
      },
      {
        title: "Long Range Battery",
        subtitle: "48V Lithium",

        description:
          "Ride longer without worrying about charging.",

        image:
          "https://plus.unsplash.com/premium_photo-1683134662524-623d1f1fd0e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

        specs: [
          {
            label: "Capacity",
            value: "20Ah",
          },
        ],
      },
    ],

    isActive: true,
  },
];
export const seedEbikes = async () => {
  await Ebike.deleteMany();

  await Ebike.insertMany(ebikes);

  console.log("✅ Ebikes seeded");
}