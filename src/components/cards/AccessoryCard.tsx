"use client";

import Image from "next/image";
import { Accessories } from "@/src/types/product";
import { getProductImage } from "@/src/utils/product";
import ProductActions from "../ebikes/ebike-details/ProductActions";
import ProductRating from "../ebikes/ebike-details/ProductRating";
import ProductPrice from "../ebikes/ebike-details/ProductPrice";

interface ProductCardProps {
  accessory: Accessories;
}

const AccessoryCard = ({ accessory }: ProductCardProps) => {
  const image = getProductImage(accessory);

  return (
    <div className="flex flex-col justify-between bg-white rounded-xl scale-95 overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">

      {/* IMAGE */}
      <div className="relative">
        <Image
          src={image}
          alt={accessory.name}
          width={500}
          height={500}
          className="w-full h-[200px] object-cover"
        />

        {accessory.badge && (
          <span className="absolute top-0 right-0 bg-primary text-white text-xs px-6 py-4 rounded-bl-md font-semibold">
            {accessory.badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-3 py-3">
        <h3 className="text-lg font-semibold text-center mb-5">
          {accessory.name}
        </h3>

        {/* PRICE + RATING */}
        <div className="grid grid-cols-2 gap-4 mb-2 px-6">
          <ProductPrice
            price={accessory.price}
            oldPrice={accessory.discountPrice}
          />

          <ProductRating
            rating={accessory.averageRating}
            reviewCount={accessory.reviewCount ?? 0}
          />
        </div>

        {/* ACTIONS */}
        <ProductActions product={accessory} card type="accessories" />
      </div>
    </div>
  );
};

export default AccessoryCard;