import { ArrowRight } from "lucide-react";

import ProductCard from "@/src/components/userBars/NavCard";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
};

interface ProductSectionProps {
  activeDropdown: string | null;
  selectedCategory: string;
  currentProducts: Product[];
}

export default function NavSection({
  activeDropdown,
  selectedCategory,
  currentProducts,
}: ProductSectionProps) {
  return (
    <>
      {/* HEADER */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">

        <h2 className="text-[18px] sm:text-[20px] leading-normal font-normal text-black/80">
          Most popular
        </h2>

        <button className="h-auto py-1 flex items-center gap-3 self-start sm:self-auto">

          <span className="text-[16px] sm:text-[20px] leading-normal font-bold text-black/80 whitespace-nowrap">
            {activeDropdown === "Enhancements"
              ? `All ${selectedCategory} Enhancements`
              : `All ${selectedCategory}`}
          </span>

          <ArrowRight
            className="w-6 h-6 text-black/80 shrink-0"
            strokeWidth={2}
          />

        </button>
      </div>

      {/* PRODUCTS */}
      {currentProducts.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {currentProducts.map((product) => (

            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
            />

          ))}

        </div>

      ) : (

        <div className="h-[300px] flex items-center justify-center border border-dashed border-gray-300 rounded-2xl bg-white">

          <p className="text-gray-400 text-lg">
            No products available yet.
          </p>

        </div>

      )}
    </>
  );
}