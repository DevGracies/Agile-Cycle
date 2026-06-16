"use client";

import PaginationFooter from "@/src/components/ebikes/main/Pagination";
import HomeDisplayBanner from "@/src/components/home/HomeDisplayBanner";
import ProductGrid from "@/src/components/ebikes/ebike-details/ProductGrid";
import CategorySidebar from "@/src/components/ebikes/main/CategorySidebar";
import { Product } from "@/src/types/product";
import RecentlyViewed from "../../ebikes/ebike-details/RecentlyViewed";

export interface DisplayType {
  title: string;
  description: string;
  image: string;
}

interface ProductPageProps {
  filter: any;
  breadcrumb: string;
  products: Product[];
  display: DisplayType;
}

export default function ProductPage({
  filter,
  breadcrumb,
  products,
  display,
}: ProductPageProps) {
  return (
    <main className="bg-[#F8F8F8]">
      <div className="mx-auto max-w-8xl px-4 py-20 lg:px-8">
        <div className="mb-10 flex items-center gap-2 text-sm text-gray-500">
          <span>HOME</span>
          <span>&gt;</span>
          <span className="font-medium text-black">{breadcrumb}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <CategorySidebar filters={filter} />

          <section className="space-y-8">
            <HomeDisplayBanner display={display} />

            <ProductGrid products={products} />

            <PaginationFooter
              currentPage={1}
              totalPages={48}
              start={1}
              end={12}
              totalItems={48}
            />
          </section>
        </div>
        <RecentlyViewed />
      </div>
    </main>
  );
}
