// app/(protected)/Home/page.tsx

"use client";

import { useEffect, useState } from "react";

import Navbar from "@/src/components/userBars/Navbar";
import CategorySidebar from "@/src/components/userBars/CategorySidebar";
import ProductSection from "@/src/components/userBars/NavSection";
import ExploreSection from "@/src/components/userBars/ExploreSection";
import SupportSection from "@/src/components/userBars/SupportSection";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
};

import {
  defaultCategories,
  exploreServices,
  navbarData,
  supportItems,
} from "@/src/lib/homeData";

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
    navbarData[
      activeDropdown as keyof typeof navbarData
    ]?.[
      selectedCategory as keyof (typeof navbarData)[keyof typeof navbarData]
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
  className={`max-w-7xl w-full mx-auto px-6 py-10 ${
            showSidebar
  ? "flex flex-col lg:flex-row gap-8 lg:gap-10"
  : ""
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

  {activeDropdown === "Explore" && (
  <ExploreSection
    exploreServices={exploreServices}
  />
)}

{activeDropdown === "Support" && (
  <SupportSection
    supportItems={supportItems}
  />
)}

{activeDropdown &&
  activeDropdown !== "Explore" &&
  activeDropdown !== "Support" && (
    <ProductSection
      activeDropdown={activeDropdown}
      selectedCategory={selectedCategory}
      currentProducts={currentProducts}
    />
)}

          </section>
        </div>
      </div>
    </main>
  );
}