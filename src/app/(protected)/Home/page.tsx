// app/(protected)/Home/page.tsx

"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CreditCard, Info, Newspaper, PhoneCall, Search, ShieldCheck } from "lucide-react";

import Navbar from "@/src/components/userBars/Navbar";
import CategorySidebar from "@/src/components/userBars/CategorySidebar";
import ProductCard from "@/src/components/userBars/ProductCard";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
};

const productsData = {
  "Ebikes": {
    Cruisers: [
      {
        id: 1,
        title: "Agile Comet X",
        image: "/dropdown/agile-comet.png",
        price: 150000,
        oldPrice: 250000,
      },

      {
        id: 2,
        title: "Agile Volt X",
        image: "/dropdown/agile-comet1.png",
        price: 180000,
        oldPrice: 300000,
      },

      {
        id: 3,
        title: "Agile Thunder",
        image: "/dropdown/agile-comet2.png",
        price: 220000,
        oldPrice: 350000,
      },
    ],

    Commuters: [],

    "Cargo Bikes": [],

    "Folding Bikes": [],

    "Utility Bikes": [],

    Trikes: [],

    "Ride share": [],
  },

  Accessories: {
    Lights: [
      {
        id: 4,
        title: "Hunter Light",
        image: "/dropdown/frame6.png",
        price: 73000,
      },
      {
        id: 5,
        title: "Crisers Light",
        image: "/dropdown/croisers-light.png",
        price: 73000,
      },
      {
        id: 6,
        title: "Headlight (Female Connector)",
        image: "/dropdown/Frame.png",
        price: 73000,
      },
    ],

    Batteries: [],

    Light: [],

    Locks: [],

    Mirrors: [],
  },

 Enhancements: {
  "Performance": [
    {
      id: 7,
      title: "Extended Range Lithium Battery",
      image: "/dropdown/Frame4.png",
      price: 73000,
      
    },

    {
      id: 8,
      title: "Smart Display Console",
      image: "/dropdown/smart-display.png",
      price: 73000,
    },

    {
      id: 9,
      title: "Suspension Seat Post",
      image: "/dropdown/suspension.png",
      price: 73000,
    },
  ],
},

  Explore: {
   
  },

  Support: {
    "Services": [],
  },
};

const exploreServices = [
  {
    title: "After Sales",
    image: "/dropdown/after-sales.png",
    description:
      "From assembly and upgrades to repairs and tune-ups, we keep your ride safe, smooth, and powerful.",
  },

  {
    title: "",
    image: "/dropdown/agile-tours.png",
    description:
      "Discover Nigeria on two wheels with AGILE Tours. Guided rides take you through historic landmarks, cultural sites, and hidden gems.",
  },

  {
    title: "Agile Ads",
    image: "/dropdown/agile-ads.png",
    description:
      "AGILE Advertising turns bicycles into eco-friendly ad vehicles, reaching people on busy routes and hard-to-access areas.",
  },

  {
    title: "Consultancies",
    image: "/dropdown/frame5.png",
    description:
      "Expert guidance for every rider, from e-bike upgrades and maintenance to personalized classes and health advice.",
  },

  {
    title: "Agile Hubs",
    image: "/dropdown/agile-hubs.png",
    description:
      "AGILE Hubs builds smart ride-sharing across Nigeria’s campuses, estates, and public spaces.",
  },
];

const supportItems = [
  {
    title: "Search",
    description: "Find what you need fast.",
    icon: "search",
    highlighted: true,
  },

  {
    title: "Warranty",
    description: "Reliable coverage for your gear.",
    icon: "shield",
  },

  {
    title: "Blog",
    description: "Read tips and updates.",
    icon: "blog",
  },

  {
    title: "Payment",
    description: "Secure and easy checkout.",
    icon: "payment",
  },

  {
    title: "About Us",
    description: "Learn our story and mission.",
    icon: "info",
  },

  {
    title: "Contact Us",
    description: "We’re here to help you.",
    icon: "phone",
  },
];

const defaultCategories = {
  "Ebikes": "Cruisers",
  Accessories: "Lights",
  Enhancements: "Performance",
  Explore: "New Arrivals",
  Support: "Services",
};

export default function HomePage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useState("Cruisers");

  useEffect(() => {
    if (activeDropdown) {
      setSelectedCategory(
        defaultCategories[activeDropdown as keyof typeof defaultCategories]
      );
    }
  }, [activeDropdown]);

  const currentProducts: Product[] =
  (activeDropdown &&
    productsData[
      activeDropdown as keyof typeof productsData
    ]?.[
      selectedCategory as keyof (typeof productsData)[keyof typeof productsData]
    ]) ||
  [];

  const showSidebar = !!activeDropdown;
  
  return (
    <main className={`min-h-screen overflow-hidden ${
        activeDropdown
          ? "bg-[linear-gradient(180deg,#FFFFFF_0%,#F9FAF9_10%,#F5F7F5_30%,#F5F7F5_100%)]"
          : ""
      }`}
    >

      {/* PAGE CONTENT */}
      <div className="relative z-10">

        <Navbar
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
        />

        <div
          className={`max-w-7xl mx-auto px-6 py-10 ${
            showSidebar ? "flex gap-15" : ""
          }`}
        >

          {/* SIDEBAR */}
          {showSidebar && (
          <div className="hidden lg:block">
            <CategorySidebar
              activeDropdown={activeDropdown}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        )}

          {/* MAIN CONTENT */}
         <section className="flex-1">

  {!activeDropdown ? null : activeDropdown === "Explore" ? (

    <div className="flex gap-14">

      {/* RIGHT SERVICES */}
      <div className="flex-1 flex flex-col gap-5">

        {exploreServices.map((service) => (

          <div
            key={service.title}
            className="flex items-start gap-5"
          >

            {/* IMAGE */}
            <div className="relative w-[489px] h-[100px] overflow-hidden">

              <img
                src={service.image}
                
                className="w-full h-full object-cover"
              />

              
            </div>

            {/* TEXT */}
            <div className="flex-1 pt-1">

             <p className="text-[16px] leading-[28px] text-[#060709] font-normal opacity-80">
              {service.description}
            </p>

              <button className="mt-2 flex items-center gap-2 text-[#519A09] text-[16px] font-semibold">
                Read more
                <ArrowRight className="w-[14px] h-[12px] text-[#519A09]" strokeWidth={2} />
              </button>

            </div>

          </div>

        ))}

      </div>
    </div>

 ) : activeDropdown === "Support" ? (

  <div className="grid grid-cols-2 gap-y-12 gap-x-20 max-w-4xl">

    {supportItems.map((item) => (

      <div
        key={item.title}
        className={`flex items-start gap-4 w-[344px] h-[112px] rounded-lg ${
          item.highlighted
            ? "bg-[#DDEEE1]  p-5"
            : "bg-[#F2F5F3] p-5"
        }`}
      >

        {/* ICON */}
        <div className=" text-[#519A09] ">

          {item.icon === "search" && (
            <Search className="w-8 h-8" />
          )}

          {item.icon === "shield" && (
            <ShieldCheck className="w-8 h-8" />
          )}

          {item.icon === "blog" && (
            <Newspaper className="w-8 h-8" />
          )}

          {item.icon === "payment" && (
            <CreditCard className="w-8 h-8" />
          )}

          {item.icon === "info" && (
            <Info className="w-8 h-8" />
          )}

          {item.icon === "phone" && (
            <PhoneCall className="w-8 h-8" />
          )}

        </div>

        {/* TEXT */}
        <div>

          <h3 className="text-[22px] font-medium text-[#000000]">
            {item.title}
          </h3>

          <p className="mt-2 text-[16px] text-[#000000]">
            {item.description}
          </p>

        </div>

      </div>

    ))}

  </div>

) : (

    <>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">

        <h2 className="text-[20px] leading-[44px] font-normal text-black/80">
          Most popular
        </h2>

       <button className="h-[52px] py-[4px] flex items-center gap-4">

          <span className="text-[20px] leading-[44px] font-bold text-black/80 whitespace-nowrap">
            {activeDropdown === "Enhancements"
              ? `All ${selectedCategory} Enhancements`
              : `All ${selectedCategory}`}
          </span>

          <ArrowRight
            className="w-6 h-6 text-black/80 shrink-0"
            strokeWidth={2}
          />

        </button>

      </div>

      {/* PRODUCTS */}
      {currentProducts.length > 0 ? (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-13">

          {currentProducts.map((product) => (

            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
            />

          ))}

        </div>

      ) : (

        <div className="h-[300px] flex items-center justify-center border border-dashed border-gray-300 rounded-2xl bg-white">

          <p className="text-gray-400 text-lg">
            No products available yet.
          </p>

        </div>

      )}
    </>

  )}

          </section>
        </div>
      </div>
    </main>
  );
}