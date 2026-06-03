"use client";

import Image from "next/image";
import ProductPrice from "../product/ProductPrice";
import ProductRating from "../product/ProductRating";
import ProductActions from "../product/ProductActions";
import { Product } from "@/src/types/product";
import { getProductImage } from "@/src/utils/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const image = getProductImage(product);

  return (
    <div className="flex flex-col justify-between bg-white rounded-xl scale-95 overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">

      {/* IMAGE */}
      <div className="relative">
        <Image
          src={image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-[300px] object-cover"
        />

        {product.badge && (
          <span className="absolute top-0 right-0 bg-primary text-white text-xs px-6 py-4 rounded-bl-md font-semibold">
            {product.badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-3 py-6">
        <h3 className="text-lg font-semibold text-center mb-5">
          {product.name}
        </h3>

        {/* PRICE + RATING */}
        <div className="flex items-center justify-between mb-5">
          <ProductPrice
            price={product.currentPrice}
            oldPrice={product.originalPrice}
          />

          <ProductRating
            rating={product.rating}
            reviewCount={product.reviewCount ?? 0}
          />
        </div>

        {/* SPECS (ONLY FOR BIKES) */}
        {product.category === "bike" && product.specs && (
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-8">
            <div>
              {product.specs.range && <p>Range: {product.specs.range}</p>}
              {product.specs.material && <p>Material: {product.specs.material}</p>}
              {product.specs.weight && <p>Weight: {product.specs.weight}</p>}
            </div>

            <div>
              {product.specs.torque && <p>Torque: {product.specs.torque}</p>}
              {product.specs.motor && <p>Motor: {product.specs.motor}</p>}
              {product.specs.batteryAh && <p>Battery: {product.specs.batteryAh}</p>}
            </div>
          </div>
        )}

        {/* ACTIONS */}
        <ProductActions product={product} card />
      </div>
    </div>
  );
};

export default ProductCard;