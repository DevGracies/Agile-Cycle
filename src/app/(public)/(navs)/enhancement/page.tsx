"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import CategorySidebar from "@/src/components/userBars/CategorySidebar";
import NavSection from "@/src/components/userBars/NavSection";

import {
  ENHANCEMENT_CATEGORIES,
} from "@/src/lib/productCategories";

const DEFAULT_CATEGORY = "performance";

export default function BikesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory =
    searchParams.get("category") ??
    DEFAULT_CATEGORY;
  const handleCategoryChange = (
    category: string
  ) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );
    params.set(
      "category",
      category
    );
    router.push(
      `?${params.toString()}`
    );
  };
  return (
    <div className="max-w-8xl w-full mx-auto px-3 py-7">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* SIDEBAR */}
        <div className="w-[270px] shrink-0">
          <CategorySidebar
            title="Enhancements"
            categories={
              ENHANCEMENT_CATEGORIES
            }
            selectedCategory={
              selectedCategory
            }
            setSelectedCategory={
              handleCategoryChange
            }
          />
        </div>
        {/* PRODUCTS */}
        <div className="flex-1 min-w-0">
          <NavSection
            productType="enhancements"
            selectedCategory={
              selectedCategory
            }
          />
        </div>
      </div>
    </div>
  );
}