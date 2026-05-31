// src/components/products/RecentlyViewed.tsx
import ProductCard from "./ProductCard";
import type { Product } from "@/src/store/useProductStore";

interface RecentlyViewedProps {
  products: Product[];
  onAddToCart?: (id: number) => void;
}

export default function RecentlyViewed({
  products,
  onAddToCart,
}: RecentlyViewedProps) {
  return (
    <section className="px-4 lg:px-[70px] py-12 bg-white">
      <h2 className="font-roboto font-semibold text-[28px] text-neutral-900 mb-8">
        Recently Viewed
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
