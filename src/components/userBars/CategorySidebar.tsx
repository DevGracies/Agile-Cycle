"use client";

import { ArrowRight } from "lucide-react";
import { CategoryOption } from "@/src/lib/productCategories";
import Link from "next/link";

interface CategorySidebarProps {
  title: string;
  categories: CategoryOption[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  showAllButton?: boolean;
}

export default function CategorySidebar({
  title,
  categories,
  selectedCategory,
  setSelectedCategory,
  showAllButton = true,
}: CategorySidebarProps) {

  let pathname;
  switch (title) {
    case "E-Bikes":
      pathname = `/products?productType=ebikes`;
      break;
    case "Accessories":
      pathname = `/products?productType=accessories`;
      break;
    case "Enhancements":
      pathname = `/products?productType=enhancements`;
      break;
    default:
      pathname = `/products?productType=ebikes`;
  }

  return (
    <aside className="w-full lg:w-[230px] shrink-0 pt-1">

      <h2 className="text-[20px] leading-[44px] font-medium text-[#01430DCC] tracking-tight mb-8">
        {title}
      </h2>

      <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-[15px] lg:overflow-visible">

        {categories.map((category) => (

          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`
              min-w-fit
              lg:w-[210px]
              h-[52px]
              px-4
              py-1
              text-left
              transition-all
              duration-200
              text-[16px]
              lg:text-[20px]
              whitespace-nowrap
              ${selectedCategory === category.value
                ? "bg-[linear-gradient(90deg,#519A09_0%,rgba(221,238,225,0)_100%)] text-black/80"
                : "text-[#666666] hover:bg-gray-100 hover:text-[#01430D]"
              }
            `}
          >
            {category.label}
          </button>

        ))}

        {showAllButton && (
          <button
            className="h-[52px] px-[10px] py-[4px] flex items-center gap-3"
          >
            <Link href={pathname} className="text-[20px] font-bold text-black/80">
              All {title}
            </Link>

            <ArrowRight
              className="w-6 h-6"
              strokeWidth={2}
            />
          </button>
        )}

      </div>

    </aside>
  );
}