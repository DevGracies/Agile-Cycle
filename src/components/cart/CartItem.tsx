// src/components/cart/CartItem.tsx
"use client";

import Image from "next/image";
import QuantityStepper from "./QuantityStepper";
import { formatPrice } from "@/src/lib/utils";

interface CartItemProps {
  id: number;
  name: string;
  image: string;
  attributes: { label: string; value: string }[];
  price: number;
  quantity: number;
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}
export default function CartItem({
  id,
  name,
  image,
  attributes,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="border-b border-black/40 px-3 sm:px-4 py-4 grid grid-cols-[minmax(0,1fr)_112px_92px] sm:grid-cols-[minmax(0,1fr)_112px_120px] gap-x-2 sm:gap-4 sm:items-start">
      <div className="flex items-start gap-2 sm:gap-3 min-w-0">
        <div className="w-18 h-18 sm:w-20.5 sm:h-20.5 shrink-0 overflow-hidden flex items-center justify-center rounded-md bg-neutral-50">
          <Image
            src={image}
            alt={name}
            width={82}
            height={82}
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="font-roboto font-medium text-sm sm:text-base text-black leading-6 sm:leading-7 wrap-break-word">
            {name}
          </p>
          {attributes.map((attr) => (
            <p
              key={attr.label}
              className="font-lexend text-[11px] sm:text-xs text-neutral-300 leading-[1.4]"
            >
              {attr.label}: {attr.value}
            </p>
          ))}
        </div>
      </div>

      <div className="justify-self-center self-start pt-0 sm:pt-0">
        <QuantityStepper
          quantity={quantity}
          onDecrement={() => onUpdateQuantity(id, -1)}
          onIncrement={() => onUpdateQuantity(id, 1)}
        />
      </div>

      <div className="flex flex-col items-end gap-2 sm:shrink-0 sm:justify-self-end">
        <p className="font-roboto font-semibold text-sm text-green-primary text-right leading-7">
          {formatPrice(price * quantity)}
        </p>
        <button
          onClick={() => onRemove(id)}
          className="font-roboto text-sm text-green-light underline text-right hover:text-green-primary transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
