"use client";

import { useState } from "react";

import CategorySidebar from "@/src/components/userBars/CategorySidebar";

import { supportItems } from "@/src/lib/homeData";

import PublicLayout from "../layout";
import SupportSection from "@/src/components/userBars/SupportSection";

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("");

  return (
    <PublicLayout>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-[270px] shrink-0">
          <CategorySidebar
            activeDropdown="Support"
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="flex-1 min-w-0">
          <SupportSection
            supportItems={supportItems}
          />
        </div>
      </div>
    </PublicLayout>
  );
}