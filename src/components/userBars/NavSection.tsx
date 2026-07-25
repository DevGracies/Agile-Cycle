"use client";

import { ArrowRight } from "lucide-react";

import ProductCard from "@/src/components/userBars/NavCard";

import { useEbikes } from "@/src/hooks/useEbikes";
import { useAccessories } from "@/src/hooks/useAccessories";
import { useEnhancements } from "@/src/hooks/useEnhancements";
import Link from "next/link";

type ProductType =
  | "ebikes"
  | "accessories"
  | "enhancements";

interface NavSectionProps {
  productType: ProductType;
  selectedCategory: string;
}

export default function NavSection({
  productType,
  selectedCategory,
}: NavSectionProps) {
  const ebikeQuery = useEbikes(selectedCategory);

  const accessoryQuery =
    useAccessories(selectedCategory);

  const enhancementQuery =
    useEnhancements(selectedCategory);

  const query =
    productType === "ebikes"
      ? ebikeQuery
      : productType === "accessories"
        ? accessoryQuery
        : enhancementQuery;

  const {
    data,
    isLoading,
    isFetching,
    isError,
  } = query;

  let products;
  switch (productType) {
    case "ebikes":
      products = data?.ebikes || [];
      break;
    case "accessories":
      products = data?.accessories || [];
      break;
    case "enhancements":
      products = data?.enhancements || [];
      break;
    default:
      products = data?.ebikes || [];
  }

  const heading =
    productType === "enhancements"
      ? `All ${selectedCategory} Enhancements`
      : `All ${selectedCategory}`;

  let pathname;
  switch (productType) {
    case "ebikes":
      pathname = `/products?productType=ebikes&category=${selectedCategory}`;
      break;
    case "accessories":
      pathname = `/products?productType=accessories&category=${selectedCategory}`;
      break;
    case "enhancements":
      pathname = `/products?productType=enhancements&category=${selectedCategory}`;
      break;
    default:
      pathname = `/ebikes?${selectedCategory}`;
  }


  return (
    <>
      {/* HEADER */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">

        <div className="flex items-center gap-3">

          <h2 className="text-[18px] sm:text-[20px] font-normal text-black/80">
            Most Popular
          </h2>

          {isFetching && !isLoading && (
            <span className="text-sm text-gray-400">
              Updating...
            </span>
          )}

        </div>

        <button className="flex items-center gap-3">

          <Link href={pathname} className="text-[16px] sm:text-[20px] font-bold text-black/80">
            {heading}
          </Link>

          <ArrowRight
            className="w-6 h-6"
            strokeWidth={2}
          />

        </button>

      </div>

      {/* LOADING */}

      {isLoading && (
        <div className="h-[300px] flex items-center justify-center">

          <p className="text-gray-500">
            Loading products...
          </p>

        </div>
      )}

      {/* ERROR */}

      {!isLoading && isError && (
        <div className="h-[300px] flex items-center justify-center border rounded-xl">

          <p className="text-red-500">
            Failed to load products.
          </p>

        </div>
      )}

      {/* PRODUCTS */}

      {!isLoading &&
        !isError &&
        products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {products.map((product: any) => (
              <ProductCard
                key={product._id}
                image={product.images?.[0]?.secure_url}
                title={product.name}
                price={product.price}
                oldPrice={product.discountPrice}
              />
            ))}

          </div>
        )}

      {/* EMPTY */}

      {!isLoading &&
        !isError &&
        products.length === 0 && (
          <div className="h-[300px] flex items-center justify-center border border-dashed border-gray-300 rounded-2xl bg-white">

            <p className="text-gray-400 text-lg">
              No products available in this category.
            </p>

          </div>
        )}
    </>
  );
}