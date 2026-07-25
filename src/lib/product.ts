
export const gallery = [
  "/ebikes/Ebikes3.png",
  "/ebikes/Ebike2.png",
  "/ebikes/ebikesm.png",
  "/ebikes/Ebikes3.png",
  "/ebikes/ebikesm.png",
];

export const accessories = [
  {
    name: "Extra Battery Pack",
    desc: "A7;A7 PRO; D5 2.0 All Series - 48V 20Ah",
    price: "₦15,000.00",
    image: "/accessories/accessory1.png",
  },
  {
    name: "Bottle Holder Adapter",
    desc: "",
    price: "₦15,000.00",
    image: "/accessories/accessory2.png",
  },
  {
    name: "Smart Adult Helmet",
    desc: "",
    price: "₦15,000.00",
    image: "/accessories/accessory3.png",
  },
  {
    name: "Rear Basket",
    desc: "",
    price: "₦15,000.00",
    image: "/accessories/accessory4.png",
  },
  {
    name: "Rearview Mirror(A Pair)",
    desc: "",
    price: "₦15,000.00",
    image: "/accessories/accessory5.png",
  },
];


export const ebikeFilters = {
  name: "Ebikes",
  category: [
    { id: "", name: "All"},
    { id: "cruiser", name: "Cruisers"},
    { id: "commuter", name: "Commuters"},
    { id: "cargo", name: "Cargo Bikes"},
    { id: "folding", name: "Folding Bikes"},
    { id: "utility", name: "Utility Bikes"},
    { id: "trikes", name: "Trikes"},
    { id: "ride-share", name: "Ride Share"},
  ],

  inventoryStatus: [
    { id: "in-stock", label: "In stock" },
    { id: "out-of-stock", label: "Out of stock" },
  ],

  products: [
    { id: "electric", label: "Electric Bikes" },
    { id: "accessories", label: "Ebike Accessories" },
    { id: "enhancements", label: "Ebike Enhancements" },
  ],


  minPrice: 0,
  maxPrice: 5000000,
};



export const accessoryFilters = {
  name: "Accessories",
  category: [
    { id: "", name: "All"},
    { id: "lights", name: "Lights"},
    { id: "carrier-bags", name: "Carrier bags"},
    { id: "mirror", name: "Mirrors"},
    { id: "helmets", name: "Helmets"},
    { id: "phone holders", name: "Phone holders"},
    { id: "alarms", name: "Alarms"},
    { id: "electric pumps", name: "Electric pumps"},
    { id: "seat", name: "Seats"},
    { id: "brake pods", name: "Brake pods"},
    { id: "batteries", name: "Batteries"},
    { id: "gloves", name: "Gloves"},
    { id: "storage", name: "Storage"},
    { id: "riding-glasses", name: "Riding glasses"},
    { id: "regenerative-kits", name: "Regenerative kits"},
  ],

  inventoryStatus: [
    { id: "in-stock", label: "In stock" },
    { id: "out-of-stock", label: "Out of stock" },
  ],

  products: [
    { id: "electric", label: "Electric Bikes" },
    { id: "accessories", label: "Ebike Accessories" },
    { id: "enhancements", label: "Ebike Enhancements" },
  ],


  minPrice: 0,
  maxPrice: 5000000,
};


export const enhancementFilters = {
  name: "Enhancements",
  category: [
    { id: "", name: "All"},
    { id: "performance", name: "Performance"},
    { id: "comfort", name: "Comfort"},
    { id: "safety", name: "Safety"},
    { id: "technology", name: "Technology"},
    { id: "utility", name: "Utility"},
    { id: "style", name: "Style"},
  ],

  inventoryStatus: [
    { id: "in-stock", label: "In stock" },
    { id: "out-of-stock", label: "Out of stock" },
  ],

  products: [
    { id: "electric", label: "Electric Bikes" },
    { id: "accessories", label: "Ebike Accessories" },
    { id: "enhancements", label: "Ebike Enhancements" },
  ],
  minPrice: 0,
  maxPrice: 5000000,
};


export const ebikesDisplay = {
  title: "Electric Bikes",
  description: `Affordable e-bikes for every lifestyle: cruisers, commuters, cargo, folding, utility, and trikes. 
                From mountain trails to city streets, Agile Cycle has the ride for your adventure. Enjoy the 
                journey with family and friends.`,
  image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1200"
}

export const accessoryDisplay = {
  title: "Electric Bike Accessories",
  description: `Equip your ebike with accessories for any ride, from off-road adventures to daily commutes. Make evry journey more comfortable, stylish, and easy. Upgrade today for a smoother ride`,
  image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1200"
}

export const enhancementDisplay = {
  title: "Electric Bike Enhancements",
  description: `Form Performance upgrades to smart accessories, explore enhancements that make every ride smoother, safer and more enjoyable`,
  image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1200"
}


