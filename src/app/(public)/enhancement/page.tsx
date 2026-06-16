"use client";

import { useState } from "react";

import CategorySidebar from "@/src/components/userBars/CategorySidebar";
import NavSection from "@/src/components/userBars/NavSection";
import { navbarData,} from "@/src/lib/homeData";
import PublicLayout from "../layout";

type BikeCategory = keyof typeof navbarData.Enhancements

export default function EnhancementPage() {
  const [selectedCategory, setSelectedCategory] = useState<BikeCategory>("Performance");

  const currentProducts =
    navbarData.Enhancements[selectedCategory];

  return (
   <PublicLayout >
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-[270px] shrink-0">
        <CategorySidebar
          activeDropdown="Enhancements"
          selectedCategory={selectedCategory}
          setSelectedCategory={(category) =>
            setSelectedCategory(category as BikeCategory)
          }
        />
      </div>

      <div className="flex-1 min-w-0">
        <NavSection
          activeDropdown="Enhancements"
          selectedCategory={selectedCategory}
          currentProducts={currentProducts}
        />
      </div>
    </div>
  </PublicLayout>
);
}