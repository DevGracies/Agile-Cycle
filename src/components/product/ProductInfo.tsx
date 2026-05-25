import RatingStars from "../shared/product/RatingStars";
import ProductVariants from "./ProductVariants";
import QuantitySelector from "./QuantitySelector";
import Image from "next/image";
import { Check } from "lucide-react";
import { useState } from "react";

const variants = [
  {
    id: "1",
    name: "Agile Comet X",
    image: "/ebikes/Ebike2.png",
    description: "Step-through bike",
  },
  {
    id: "2",
    name: "Agile Comet X",
    image: "/ebikes/Ebikes3.png",
    description: "Step-over bike",
  },
];
export default function ProductInfo() {
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [activeVariant, setActiveVariant] = useState<string | null>(null);

  return (
    <div>
      <h1 className="text-3xl leading-none font-bold text-[#111]">
        Agile Comet X
      </h1>

      <p className="text-[#7aac3d] mt-3 text-lg font-medium">
        Easy to Maneuver. Built for Power.
      </p>

      <div className="flex items-center gap-4 mt-3">
        <RatingStars />

        <span className="font-semibold">4.6/5</span>

        <span className="text-[#9a9a9a]">135 Reviews</span>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <h2 className="text-2xl font-bold text-[#0f6615]">₦150,000.00</h2>

        <span className="line-through text-[#b5b5b5]">₦180,000.00</span>
      </div>

      <div className="flex justify-between items-center mt-3">
        <span className="uppercase text-[#6fa720] font-bold text-sm">
          In Stock
        </span>

        <span className="text-[#6fa720] text-sm font-medium">
          Ship within 2 business days
        </span>
      </div>

      <div className="mt-8">
        <ProductVariants active={activeColor} setActive={setActiveColor} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {variants.map((variant) => (
          <div
            key={variant.id}
            onClick={() => setActiveVariant(variant.id)}
            className={`${activeVariant === variant.id ? "border-2 border-[#82b93c]" : ""} rounded-2xl flex items-center gap-4 relative`}
          >
            <Image
              src={variant.image}
              alt=""
              width={100}
              height={70}
              className="rounded-lg object-cover"
            />

            <div>
              <h3 className="font-bold text-md">{variant.name}</h3>

              <p className="text-[#6fa720] mt-1 font-medium">
                {variant.description}
              </p>
            </div>

            {activeVariant === variant.id && (
              <Check
                className="absolute right-4 top-4 text-[#6fa720]"
                size={20}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-20 mt-10">
        <div className="flex items-center gap-4">
          <p className="text-sm mb-3">Quantity</p>

          <QuantitySelector />
        </div>

        <button className="bg-[#01430D] hover:bg-[#0b4f13] transition text-white h-[44px] px-16 rounded-lg font-semibold text-md w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
