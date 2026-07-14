"use client";

import Image from "next/image";
import { Enhancement } from "@/src/types/product";
import { getProductImage } from "@/src/utils/product";
import ProductActions from "../ebikes/ebike-details/ProductActions";
import ProductRating from "../ebikes/ebike-details/ProductRating";
import ProductPrice from "../ebikes/ebike-details/ProductPrice";

interface ProductCardProps {
  enhancement: Enhancement;
}

const EnhancementCard = ({ enhancement }: ProductCardProps) => {
  const image = getProductImage(enhancement);

  return (
    <div className="flex flex-col justify-between bg-white rounded-xl scale-95 overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">

      {/* IMAGE */}
      <div className="relative">
        <Image
          src={image}
          alt={enhancement.name}
          width={500}
          height={500}
          className="w-full h-[200px] object-cover"
        />

        {enhancement.badge && (
          <span className="absolute top-0 right-0 bg-primary text-white text-xs px-6 py-4 rounded-bl-md font-semibold">
            {enhancement.badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-3 py-3">
        <h3 className="text-lg font-semibold text-center mb-5">
          {enhancement.name}
        </h3>

        {/* PRICE + RATING */}
        <div className="grid grid-cols-2 gap-4 mb-2 px-6">
          <ProductPrice
            price={enhancement.price}
            oldPrice={enhancement.discountPrice}
          />

          <ProductRating
            rating={enhancement.averageRating}
            reviewCount={enhancement.reviewCount ?? 0}
          />
        </div>

        {/* ACTIONS */}
        <ProductActions product={enhancement} card type="enhancement" />
      </div>
    </div>
  );
};

export default EnhancementCard;