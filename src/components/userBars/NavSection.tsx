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
      <div className="flex items-center justify-between mb-8">

        <h2 className="text-[20px] leading-[44px] font-normal text-black/80">
          Most popular
        </h2>

        <button className="h-[52px] py-[4px] flex items-center gap-4">

          <span className="text-[20px] leading-[44px] font-bold text-black/80 whitespace-nowrap">
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

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