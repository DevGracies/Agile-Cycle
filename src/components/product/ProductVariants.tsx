import { Product } from "@/src/types/product";
import { Check } from "lucide-react";
import Image from "next/image";

interface Props {
  product: Product;

  selectedColor: string | null;
  selectedBattery: string | null;
  selectedVariant: string | null;

  onSelectColor: (id: string) => void;
  onSelectBattery: (id: string) => void;
  onSelectedVariant: (id: string) => void;
}

export default function ProductVariants({
  product,
  selectedColor,
  selectedBattery,
  selectedVariant,
  onSelectColor,
  onSelectBattery,
  onSelectedVariant,
}: Props) {
  const productColor = product.colors.find((col) => col.id === selectedColor);
  return (
    <div className="space-y-7">
      {/* COLORS */}
      <div>
        <h4 className="text-[13px] uppercase text-[#7e7e7e] font-semibold">
          Colour <span className={`text-black`}>{productColor?.name}</span>
        </h4>

        <div className="flex gap-4 mt-4">
          {product.colors.map((color) => (
            <div
              key={color.id}
              onClick={() => onSelectColor(color.id)}
              className={`w-10 h-10 rounded cursor-pointer ${
                selectedColor === color.id ? "ring-2 ring-primary" : "ring-1 ring-gray-300"
              }`}
              style={{
                backgroundColor: color.value,
              }}
            />
          ))}
        </div>
      </div>

      {/* BATTERY */}
      <div>
        <h4 className="text-[13px] uppercase text-[#7e7e7e] font-semibold">
          Battery Size
        </h4>

        <div className="flex gap-3 mt-4 flex-wrap">
          {product?.batteryOptions?.map((battery) => (
            <button
              key={battery.id}
              onClick={() => onSelectBattery(battery.id)}
              className={`px-6 h-12 rounded-md font-semibold border ${
                selectedBattery === battery.id
                  ? "bg-primary text-white"
                  : "border-primary text-primary"
              }`}
            >
              {battery.label}
            </button>
          ))}
        </div>
      </div>

      {/* SIZE */}
      <div>
        <h4 className="text-[13px] uppercase text-[#7e7e7e] font-semibold">
          Size <span className="text-black">{product.specs?.size}</span>
        </h4>

        <button className="mt-4 bg-primary text-white px-6 h-12 rounded-md font-semibold">
          {product.specs?.size}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {product?.variants?.map((variant) => {
          const isActive = selectedVariant === variant.id;

          return (
            <button
              key={variant.id}
              onClick={() => onSelectedVariant(variant.id)}
              type="button"
              className={`
          relative flex items-center gap-4 rounded-2xl p-3
          border transition-all duration-300 ease-out
          transform active:scale-[0.98]
          hover:shadow-md hover:-translate-y-[2px]
          focus:outline-none focus:ring-2 focus:ring-primary/40

          ${
            isActive
              ? "border-primary bg-primary/5 shadow-sm"
              : "border-gray-200 bg-white hover:border-primary/40"
          }
        `}
            >
              {/* IMAGE */}
              <div className="relative w-[90px] h-[70px] flex-shrink-0">
                <Image
                  src={variant.image}
                  alt={variant.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col text-left">
                <h3 className="font-semibold text-[15px] text-gray-900 leading-tight">
                  {variant.name}
                </h3>

                <p className="text-primary mt-1 text-xs font-medium">
                  {variant.description}
                </p>
              </div>

              {/* CHECK INDICATOR */}
              <div
                className={`
            absolute right-4 top-4 transition-all duration-300
            ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
              >
                  <Check size={14} className="text-primary" />
              </div>

              {/* ACTIVE BORDER GLOW EFFECT */}
              <div
                className={`
            absolute inset-0 rounded-2xl pointer-events-none
            transition-opacity duration-300
            ${isActive ? "opacity-100" : "opacity-0"}
            shadow-[0_0_0_1px_rgba(130,185,60,0.3)]
          `}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
