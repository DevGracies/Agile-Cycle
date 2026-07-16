"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import Container from "../../layout/Container";
import HomeDisplayBanner from "@/src/components/home/HomeDisplayBanner";
import PaginationFooter from "@/src/components/ebikes/main/Pagination";
import RecentlyViewed from "../../ebikes/ebike-details/RecentlyViewed";
import CategorySidebar from "@/src/components/ebikes/main/CategorySidebar";
import EbikeGrid from "@/src/components/ebikes/ebike-details/EbikeGrid";
import AccessoriesGrid from "../../ebikes/ebike-details/AccessoriesGrid";
import EnhancementsGrid from "../../ebikes/ebike-details/EnhancementGrid";

import {
  useEbike,
} from "@/src/context/EbikeProvider";

import {
  useAccessory,
} from "@/src/context/AccessoryProvider";

import {
  useEnhancement,
} from "@/src/context/EnhancementProvider";

import {
  ProductFilters,
} from "@/src/types/ebikes";
import { ProductType } from "@/src/services/cart.service";
import { accessoryDisplay, ebikesDisplay, enhancementDisplay } from "@/src/lib/product";
import { ChevronRight, Menu } from "lucide-react";

export default function ProductPage() {
  const router = useRouter();

  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const searchParams =
    useSearchParams();

  const {
    ebikes,
    fetchEbikes,
    pagination: ebikePagination,
  } = useEbike();

  const {
    accessories,
    fetchAccessories,
    pagination:
    accessoryPagination,
  } = useAccessory();

  const {
    enhancements,
    fetchEnhancements,
    pagination:
    enhancementPagination,
  } = useEnhancement();


  // Current filters from URL

  const filters =
    useMemo<ProductFilters>(() => {
      return {
        productType: (searchParams.get("productType",) ?? "ebikes") as ProductType,

        category: searchParams.get("category",) ? searchParams.get("category") : "all",

        inventoryStatus: searchParams.get("inventoryStatus",) ? searchParams.get("inventoryStatus") : "in-stock" as any,

        minPrice: Number(searchParams.get("minPrice",) ?? 0,),

        maxPrice: Number(searchParams.get("maxPrice",) ?? 500000,),

        page: Number(searchParams.get("page",) ?? 1,),

        limit: Number(searchParams.get("limit",) ?? 10,),
      };
    }, [searchParams]);


  // Update URL

  const updateFilters =
    useCallback((newFilters: Partial<ProductFilters>,) => {
      const params =
        new URLSearchParams(
          searchParams.toString(),
        );

      Object.entries(newFilters).forEach(([key, value]) => {
        if (value !== "" && value !== undefined) {
          params.set(key, String(value))
        }
      })

      router.replace(
        `${pathname}?${params.toString()}`
      );
    },
      [
        pathname,
        router,
        searchParams,
      ],
    );

  // Apply filters

  const applyFilters =
    useCallback(async () => {
      const product =
        filters.productType;

      switch (product) {
        case "ebikes":
          await fetchEbikes(
            filters,
          );
          break;

        case "accessories":
          await fetchAccessories(
            filters,
          );
          break;

        case "enhancements":
          await fetchEnhancements(
            filters,
          );
          break;
      }
    }, [
      filters,
      fetchEbikes,
      fetchAccessories,
      fetchEnhancements,
    ]);

  const clearFilters = () => {
    router.replace(pathname)
  }

  // Initial fetch

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const product =
    filters.productType;

  const getcurrentDisplay = (type: ProductType) => {
    switch (type) {
      case "ebikes":
        return ebikesDisplay;
      case "accessories":
        return accessoryDisplay;
      case "enhancements":
        return enhancementDisplay;
    };
  }
  const getTotalItems = (type: ProductType) => {
    switch (type) {
      case "ebikes":
        return ebikes.length;
      case "accessories":
        return accessories.length;
      case "enhancements":
        return enhancements.length;
    };
  }

  const total = getTotalItems(filters.productType as ProductType);
  const display = getcurrentDisplay(filters.productType as ProductType);

  return (
    <Container className="py-24">
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

        <CategorySidebar
          filters={filters as ProductFilters}
          onApplyFilters={updateFilters}
          onClearFilters={clearFilters}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />

        <section className="space-y-6 flex-1 p-5 lg:p-8">

          <HomeDisplayBanner
            display={display}
          />

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex items-center gap-2 border border-gray-200 shadow rounded-lg px-4 py-2 text-sm"
          >
            Filter <ChevronRight size={16} />
          </button>

          <p className="text-sm text-gray-500">{total ?? 0} {total === 1 ? "item" : "items"}</p>

          {total === 0 ? (
            <div className="text-center py-20 text-gray-500">No products found.</div>
          ) : (
            <div>
              {product ===
                "ebikes" && (
                  <EbikeGrid
                    products={
                      ebikes
                    }
                  />
                )}

              {product ===
                "accessories" && (
                  <AccessoriesGrid
                    products={
                      accessories
                    }
                  />
                )}

              {product ===
                "enhancements" && (
                  <EnhancementsGrid
                    products={
                      enhancements
                    }
                  />
                )}
              <PaginationFooter
                currentPage={
                  product ===
                    "ebikes"
                    ? ebikePagination.page
                    : product ===
                      "accessories"
                      ? accessoryPagination.page
                      : enhancementPagination.page
                }

                totalPages={
                  product ===
                    "ebikes"
                    ? ebikePagination.totalPages
                    : product ===
                      "accessories"
                      ? accessoryPagination.totalPages
                      : enhancementPagination.totalPages
                }

                onPageChange={(
                  page,
                ) =>
                  updateFilters(
                    {
                      page,
                    },
                  )
                }
              />
            </div>
          )}

        </section>
      </div>

      <RecentlyViewed />
    </Container>
  );
}