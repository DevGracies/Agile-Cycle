"use client";

import { useState } from "react";

import CategorySidebar from "@/src/components/userBars/CategorySidebar";
import NavSection from "@/src/components/userBars/NavSection";
import { navbarData,} from "@/src/lib/homeData";
import PublicLayout from "../layout";

type BikeCategory = keyof typeof navbarData["E-bikes"]

export default function BikesPage() {
  const [selectedCategory, setSelectedCategory] = useState<BikeCategory>("Cruisers");

  const currentProducts =
    navbarData["E-bikes"][selectedCategory];

  return (
   <PublicLayout >
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-[270px] shrink-0">
        <CategorySidebar
          activeDropdown="E-bikes"
          selectedCategory={selectedCategory}
          setSelectedCategory={(category) =>
            setSelectedCategory(category as BikeCategory)
          }
        />
      </div>

      <div className="flex-1 min-w-0">
        <NavSection
          activeDropdown="E-bikes"
          selectedCategory={selectedCategory}
          currentProducts={currentProducts}
        />
      </div>
    </div>
  </PublicLayout>
);
}