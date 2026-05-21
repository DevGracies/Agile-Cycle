import { Enhancements } from "@/src/types";
import { Maximize2, Star } from "lucide-react";
import Image from "next/image";

const EnhancementsCard = (product: Enhancements) => {
  return (
    <div className="bg-white rounded-xl scale-95 overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
      <div className="">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-[200px] object-cover scale-60"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-center mb-5">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-5">
          <span className="text-[#519A09] font-black text-lg">
            ₦{product.price}
          </span>

          <div className="flex items-center gap-2">
            <div className="text-[#519A09] text-sm flex ">
              {Array.from({ length: product.rating }).map((item, index) => (
                <Star key={index} size={12} fill="#519A09" />
              ))}
            </div>
            <span className="text-sm">(105)</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 h-12 cursor-pointer bg-[#01430D] hover:bg-[#0b4f13] transition-colors text-white rounded-md text-sm font-medium">
            Add to cart
          </button>

          <button className="w-12 rounded-xl cursor-pointer border border-[#01430D] flex items-center justify-center">
            <Maximize2 className="text-[#01430D]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancementsCard;
