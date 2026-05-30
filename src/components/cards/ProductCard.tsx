"use client";

import Image from "next/image";
import ProductPrice from "../product/ProductPrice";
import ProductRating from "../product/ProductRating";
import ProductActions from "../product/ProductActions";
import { Product } from "@/src/types";


interface ProductCardProps {
  product: Product;
  onAddToCart?: (id: string) => void;
  onView?: (id: string) => void;
}

const ProductCard = ({
  product,
  onAddToCart,
  onView,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl scale-95 overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
      
      {/* IMAGE */}
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-[200px] object-cover"
        />

        {product.badge && (
          <span className="absolute top-0 right-0 bg-primary text-white text-xs px-6 py-4 rounded-bl-md font-semibold">
            {product.badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-center mb-5">
          {product.name}
        </h3>

        {/* PRICE + RATING */}
        <div className="flex items-center justify-between mb-5">
          <ProductPrice
            price={product.price}
            oldPrice={product.oldPrice}
          />

          <ProductRating
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        </div>

        {/* SPECS */}
        {product.specs && (
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 leading-7 mb-8">
            <div>
              {product.specs.range && (
                <p>Range: {product.specs.range}</p>
              )}
              {product.specs.material && (
                <p>Material: {product.specs.material}</p>
              )}
              {product.specs.weight && (
                <p>Weight: {product.specs.weight}</p>
              )}
            </div>

            <div>
              {product.specs.torque && (
                <p>Torque: {product.specs.torque}</p>
              )}
              {product.specs.motor && (
                <p>Motor: {product.specs.motor}</p>
              )}
              {product.specs.battery && (
                <p>Battery: {product.specs.battery}</p>
              )}
            </div>
          </div>
        )}

        {/* ACTIONS */}
        <ProductActions
          onAddToCart={() => onAddToCart?.(product.id)}
          onView={() => onView?.(product.id)}
        />
      </div>
    </div>
  );
};

export default ProductCard;