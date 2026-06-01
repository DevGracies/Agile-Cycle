// app/(protected)/Home/page.tsx

"use client";

import { useEffect, useState } from "react";

import Navbar from "@/src/components/userBars/Navbar";
import CategorySidebar from "@/src/components/userBars/CategorySidebar";
import NavSection from "@/src/components/userBars/NavSection";
import ExploreSection from "@/src/components/userBars/ExploreSection";
import SupportSection from "@/src/components/userBars/SupportSection";

import HeroSection from "@/src/components/sections/HeroSection";
import CategorySection from "@/src/components/sections/CategorySection";
import ServicesSection from "@/src/components/sections/ServicesSection";

import {
  defaultCategories,
  exploreServices,
  navbarData,
  supportItems,
} from "@/src/lib/homeData";
import AccessoriesSection from "@/src/components/sections/AccessoriesSection";
import ProductSection from "@/src/components/sections/ProductSection";
import EnhancementsSection from "@/src/components/sections/EnhancementsSection";
import OurShopSection from "@/src/components/sections/OurShopSection";
import CommunitySection from "@/src/components/sections/CommunitySection";
import TestimonialSection from "@/src/components/sections/TestimonialSection";
import InsightsSection from "@/src/components/sections/InsightsSection";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import BenefitsSection from "@/src/components/sections/BenefitsSection";
import AccountFooter from "@/src/components/account/AccountFooter";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
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
      navbarData[activeDropdown as keyof typeof navbarData]?.[
        selectedCategory as keyof (typeof navbarData)[keyof typeof navbarData]
      ]) ||
    [];

  const showSidebar = !!activeDropdown;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#F9FAF9] to-[#F5F7F5]">
      
      {/* NAVBAR */}
      <Navbar
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />

      {/* DROPDOWN + PRODUCT SECTION */}
      <div className="max-w-7xl w-full mx-auto px-6 ">
        <div className={`flex flex-col lg:flex-row gap-10 ${showSidebar ? "" : "hidden lg:flex"}`}>
          {showSidebar && (
            <div className="hidden lg:block w-[240px]">
              <CategorySidebar
                activeDropdown={activeDropdown}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          )}

          <section className="flex-1">
            {activeDropdown === "Explore" && <ExploreSection exploreServices={exploreServices} />}
            {activeDropdown === "Support" && <SupportSection supportItems={supportItems} />}
            
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

      {/* MAIN LANDING SECTIONS (Hero, Categories, Services, etc.) */}
      <div>
        <HeroSection />
        <CategorySection />
        <ServicesSection />
        <ProductSection />
        <AccessoriesSection />
        <EnhancementsSection />
        <OurShopSection />
        <CommunitySection />
        <TestimonialSection />
        <InsightsSection />
        
        <SubscribeSection />
        <BenefitsSection />
        <AccountFooter />
      </div>

    </main>
  );
}