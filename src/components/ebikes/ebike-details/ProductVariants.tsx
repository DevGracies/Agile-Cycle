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

type BatteryOption = { _id: string; label: string };

function hasBatteryOptions(
  product: Product
): product is Product & { batteryOptions: BatteryOption[] } {
  return Array.isArray((product as any).batteryOptions);
}

type ProductWithSpecs = Product & { specs: { size: string } };

type Variant = { _id: string; image: string; name: string; description: string };

type ProductWithVariants = Product & { variants: Variant[] };

function hasSpecs(product: Product): product is ProductWithSpecs {
  return (
    typeof (product as any).specs === "object" &&
    typeof (product as any).specs?.size === "string"
  );
}

function hasVariants(product: Product): product is ProductWithVariants {
  return Array.isArray((product as any).variants);
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
  const productColor = product.colors.find((col) => col.color === selectedColor);
  const batteryOptions = hasBatteryOptions(product) ? product.batteryOptions : undefined;
  const productSize = hasSpecs(product) ? product.specs.size : undefined;
  return (
    <div className="space-y-3">
      {/* COLORS */}
      <div>
        <h4 className="flex items-center gap-2 text-[13px] uppercase text-[#7e7e7e] font-semibold">
          Colour
          <div className="w-1 h-1 rounded-full bg-black" />
          <span className={`text-black`}>{productColor?.name}</span>
        </h4>

        <div className="flex gap-4 mt-4">
          {product.colors.map((color) => (
            <div
              key={color.color}
              onClick={() => onSelectColor(color.color)}
              className={`w-8 h-8 rounded cursor-pointer transition-all duration-300 ${
                selectedColor === color.color
                  ? "ring-2 ring-primary border-3 border-gray-200"
                  : ""
              }`}
              style={{
                backgroundColor: color.color,
              }}
            />
          ))}
        </div>
      </div>

      {/* BATTERY */}
      <div>
        <h4 className="flex items-center gap-2 text-[13px] uppercase text-[#7e7e7e] font-semibold">
          Battery Size
          <div className="w-1 h-1 rounded-full bg-black" />
          <p className="text-black">{batteryOptions?.[0]?.label}</p>
        </h4>

        <div className="flex gap-3 mt-1 flex-wrap">
          {batteryOptions?.map((battery) => (
            <button
              key={battery._id}
              onClick={() => onSelectBattery(battery._id)}
              className={`px-4 h-10 rounded-md font-semibold border ${
                selectedBattery === battery._id
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
      {productSize ? (
        <div>
          <h4 className="flex items-center gap-2 text-[13px] uppercase text-[#7e7e7e] font-semibold">
            Size 
            <div className="w-1 h-1 rounded-full bg-black"/>
            <span className="text-black">{productSize}</span>
          </h4>

          <button className="mt-1 bg-primary text-white px-4 h-10 rounded-md font-semibold">
            {productSize.split(" ")[0]}
          </button>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {hasVariants(product) && product.variants.map((variant) => {
          const isActive = selectedVariant === variant._id;

          return (
            <button
              key={variant._id}
              onClick={() => onSelectedVariant(variant._id)}
              type="button"
              className={`
          relative flex items-center gap-4 rounded-2xl p-2
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
