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
        className="w-8 h-8 flex items-center justify-center"
      >
        <Minus size={18} />
      </button>

      <div className="w-14 text-center font-semibold">
        {quantity}
      </div>

      <button
        onClick={onIncrease}
        disabled={max !== undefined && quantity >= max}
        className="w-8 h-8 flex items-center justify-center disabled:opacity-40"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}