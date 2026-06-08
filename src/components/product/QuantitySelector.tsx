"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  max?: number;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  max,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center border border-[#c9c9c9] w-fit">
      <button
        onClick={onDecrease}
        className="px-3 py-2"
      >
        <Minus size={18} />
      </button>

      <div className="w-10 h-full flex items-center justify-center">
        {quantity}
      </div>

      <button
        onClick={onIncrease}
        disabled={max !== undefined && quantity >= max}
        className="px-3 py-2"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}