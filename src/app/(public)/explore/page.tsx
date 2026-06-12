"use client";

import { useState } from "react";

import CategorySidebar from "@/src/components/userBars/CategorySidebar";
import ExploreSection from "@/src/components/userBars/ExploreSection";

import { exploreServices } from "@/src/lib/homeData";

import PublicLayout from "../layout";

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] =
    useState("");

  return (
    <PublicLayout>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-[270px] shrink-0">
          <CategorySidebar
            activeDropdown="Explore"
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="flex-1 min-w-0">
          <ExploreSection
            exploreServices={exploreServices}
          />
        </div>
      </div>
    </PublicLayout>
  );
}