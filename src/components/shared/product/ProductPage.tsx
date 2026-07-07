"use client";

import PaginationFooter from "@/src/components/ebikes/main/Pagination";
import HomeDisplayBanner from "@/src/components/home/HomeDisplayBanner";
import CategorySidebar from "@/src/components/ebikes/main/CategorySidebar";
import RecentlyViewed from "../../ebikes/ebike-details/RecentlyViewed";
import Container from "../../layout/Container";
import EbikeGrid from "@/src/components/ebikes/ebike-details/EbikeGrid";
import { Accessories, Ebike, Enhancement } from "@/src/types/product";
import EnhancementsGrid from "../../ebikes/ebike-details/EnhancementGrid";
import AccessoriesGrid from "../../ebikes/ebike-details/AccessoriesGrid";

export interface DisplayType {
  title: string;
  description: string;
  image: string;
}

export interface ProductPageProps {
  filter: any;
  breadcrumb: "EBIKES" | "ACCESSORIES" | "ENHANCEMENTS";
  products: Ebike[] | Accessories[] | Enhancement[];
  display: DisplayType;
}

export default function ProductPage({
  filter,
  breadcrumb,
  products,
  display,
}: ProductPageProps) {
  return (
    <Container className="py-24">
      <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
        <span>HOME</span>
        <span>&gt;</span>
        <span className="font-medium text-black">{breadcrumb}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <CategorySidebar filters={filter} />

        <section className="space-y-4">
          <HomeDisplayBanner display={display} />

          {breadcrumb === "EBIKES" && (
            <EbikeGrid products={products as Ebike[]} />
          )}
          {breadcrumb === "ACCESSORIES" && (
            <AccessoriesGrid products={products as Accessories[]} />
          )}
          {breadcrumb === "ENHANCEMENTS" && (
            <EnhancementsGrid products={products as Enhancement[]} />
          )}

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
    </Container>
  );
}
