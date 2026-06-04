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
          className="w-full h-[200px] object-cover"
        />

        {product.badge && (
          <span className="absolute top-0 right-0 bg-primary text-white text-xs px-6 py-4 rounded-bl-md font-semibold">
            {product.badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-3 py-4">
        <h3 className="text-lg font-semibold text-center mb-5">
          {product.name}
        </h3>

        {/* PRICE + RATING */}
        <div className="grid grid-cols-2 gap-4 mb-4">
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs border-t border-gray-100 pt-3 mb-6 text-gray-700">
            <div><span className="font-semibold text-black">Range:</span> {product.specs.range}</div>
            <div><span className="font-semibold text-black">Torque:</span> {product.specs.torque}</div>
            <div><span className="font-semibold text-black">Material:</span> {product.specs.material}</div>
            <div><span className="font-semibold text-black">Motor:</span> {product.specs.motor}</div>
            <div><span className="font-semibold text-black">Weight:</span> {product.specs.weight}</div>
            <div><span className="font-semibold text-black">Battery:</span> {product.specs.batteryAh}</div>
          </div>
        )}

        {/* ACTIONS */}
        <ProductActions product={product} card />
      </div>
    </div>
  );
};

export default ProductCard;