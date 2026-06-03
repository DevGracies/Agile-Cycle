"use client";

import Image from "next/image";
import ProductPrice from "../product/ProductPrice";
import ProductRating from "../product/ProductRating";
import ProductActions from "../product/ProductActions";
import { Product } from "@/src/types";


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
          className="w-full h-44 sm:h-[200px] object-cover"
        />

        <span className="absolute top-0 right-0 bg-[#519A09] text-white text-[10px] sm:text-xs px-4 sm:px-6 py-2 sm:py-4 rounded-bl-md font-semibold">
          E‑Bike
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-center mb-4 sm:mb-5">
          {product.name}
        </h3>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#519A09] font-black text-base sm:text-lg">
              ₦{product.price}
            </span>

            <span className="text-gray-400 line-through text-xs sm:text-sm">
              ₦{product.oldPrice}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-[#519A09] text-sm flex">
              {Array.from({ length: product.rating }).map((_, index) => (
                <Star key={index} size={12} fill="#519A09" />
              ))}
            </div>
            <span className="text-xs sm:text-sm">(105)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 leading-6 sm:leading-7 mb-6 sm:mb-8">
          <div>
            <p>Range: {product.range}</p>
            <p>Material: {product.material}</p>
            <p>Weight: {product.weight}</p>
          </div>
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

        <div className="flex gap-3">
          <button className="flex-1 h-11 sm:h-12 cursor-pointer bg-[#01430D] hover:bg-[#0b4f13] transition-colors text-white rounded-md text-sm font-medium">
            Add to cart
          </button>

          <button className="w-11 sm:w-12 rounded-xl cursor-pointer border border-[#01430D] flex items-center justify-center">
            <Maximize2 className="text-[#01430D]" />
          </button>
        </div>
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