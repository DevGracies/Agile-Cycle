"use client";

import { useEffect, useState } from "react";

import Navbar from "@/src/components/userBars/Navbar";
import CategorySidebar from "@/src/components/userBars/CategorySidebar";
import NavSection from "@/src/components/userBars/NavSection";
import ExploreSection from "@/src/components/userBars/ExploreSection";
import SupportSection from "@/src/components/userBars/SupportSection";

import {
  defaultCategories,
  exploreServices,
  navbarData,
  supportItems,
} from "@/src/lib/homeData";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
};

export default function NavbarShell() {
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
      ]) || [];

  const showSidebar = !!activeDropdown;

  return (
  <>
    <Navbar
      activeDropdown={activeDropdown}
      setActiveDropdown={setActiveDropdown}
    />

    {showSidebar && (
      <div className="max-w-7xl w-full mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className=" lg:block w-[270px]">
            <CategorySidebar
              activeDropdown={activeDropdown}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          <section className="flex-1">
            {activeDropdown === "Explore" && (
              <ExploreSection exploreServices={exploreServices} />
            )}

            {activeDropdown === "Support" && (
              <SupportSection supportItems={supportItems} />
            )}

            {activeDropdown &&
              activeDropdown !== "Explore" &&
              activeDropdown !== "Support" && (
                <NavSection
                  activeDropdown={activeDropdown}
                  selectedCategory={selectedCategory}
                  currentProducts={currentProducts}
                />
              )}
          </section>
        </div>
      </div>
    )}
  </>
);
}