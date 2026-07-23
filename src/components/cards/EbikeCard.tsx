"use client";

import Image from "next/image";
import ProductPrice from "../ebikes/ebike-details/ProductPrice";
import ProductRating from "../ebikes/ebike-details/ProductRating";
import ProductActions from "../ebikes/ebike-details/ProductActions";
import { Ebike } from "@/src/types/product";
import { getProductImage } from "@/src/utils/product";

interface ProductCardProps {
  ebike: Ebike;
}

const EbikeCard = ({ ebike }: ProductCardProps) => {
  const image = getProductImage(ebike);

  if(!ebike) return;
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl scale-95 overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">

      {/* IMAGE */}
      <div className="relative">
        <Image  
          src={image}
          alt={ebike.name}
          width={500}
          height={500}
          className="w-full h-[200px] object-cover"
        />

        {ebike.badge && (
          <span className="absolute top-0 right-0 bg-primary text-white text-xs px-6 py-4 rounded-bl-md font-semibold">
            {ebike.badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-3 py-3">
        <h3 className="text-lg font-semibold text-center mb-5">
          {ebike.name}
        </h3>

        {/* PRICE + RATING */}
        <div className="grid grid-cols-2 gap-4 mb-2 px-6">
          <ProductPrice
            price={ebike.price}
            oldPrice={ebike.discountPrice}
          />

          <ProductRating
            rating={ebike.averageRating}
            reviewCount={ebike.reviewCount ?? 0}
          />
        </div>

        {/* SPECS (ONLY FOR BIKES) */}
        {ebike.specs && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-6 text-xs border-t border-gray-100 mb-6 text-gray-700">
            <div><span className="font-semibold text-black">Range:</span> {ebike.specs.range}</div>
            <div><span className="font-semibold text-black">Torque:</span> {ebike.specs.torque}</div>
            <div><span className="font-semibold text-black">Material:</span> {ebike.specs.material}</div>
            <div><span className="font-semibold text-black">Motor:</span> {ebike.specs.motor}</div>
            <div><span className="font-semibold text-black">Weight:</span> {ebike.specs.weight}</div>
            <div><span className="font-semibold text-black">Battery:</span> {ebike.specs.batteryAh}</div>
          </div>
        )}

        {/* ACTIONS */}
        <ProductActions product={ebike} card type="ebikes" />
      </div>
    </div>
  );
};

export default EbikeCard;