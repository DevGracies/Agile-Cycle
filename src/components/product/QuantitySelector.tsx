"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function QuantitySelector() {
  const [count, setCount] = useState(1);

  return (
    <div className="flex items-center border border-[#c9c9c9] w-fit">
      <button
        onClick={() => setCount((p) => Math.max(1, p - 1))}
        className="w-8 h-8 flex items-center justify-center"
      >
        <Minus size={18} />
      </button>

      <div className="w-14 text-center font-semibold">{count}</div>

      <button
        onClick={() => setCount((p) => p + 1)}
        className="w-8 h-8 flex items-center justify-center"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}