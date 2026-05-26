"use client";

import { Product } from "@/src/types";
import { Star, Expand } from "lucide-react";
import Image from "next/image";


const ProductCard = (product: Product) => {
  return (
    <div className="bg-white rounded-xl scale-95 overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
      <div className="relative">
        <Image src={product.image} alt={product.name} className="w-full h-[200px] object-cover" />

        <span className="absolute top-0 right-0 bg-[#519A09] text-white text-xs px-6 py-4 rounded-bl-md font-semibold">
          E‑Bike
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-center mb-5">{product.name}</h3>

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="text-[#519A09] font-black text-lg">₦{product.price}</span>

            <span className="text-gray-400 line-through text-sm">
              ₦{product.oldPrice}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-[#519A09] text-sm flex ">
            {Array.from({ length: product.rating }).map((item, index) => (
              <Star key={index} size={12} fill="#519A09" />
            ))}
          </div>
          <span className="text-sm">(105)</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 leading-7 mb-8">
          <div>
            <p>Range: {product.range}</p>
            <p>Material: {product.material}</p>
            <p>Weight: {product.weight}</p>
          </div>

          <div>
            <p>Torque: {product.torque}</p>
            <p>Motor: {product.motor}</p>
            <p>Battery: {product.battery}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 h-12 cursor-pointer bg-[#01430D] hover:bg-[#0b4f13] transition-colors text-white rounded-md text-sm font-medium">
            Add to cart
          </button>

          <button className="w-12 rounded-xl cursor-pointer border border-[#01430D] flex items-center justify-center">
            <Expand className="text-[#01430D]" /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
