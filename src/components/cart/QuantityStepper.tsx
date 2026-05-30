// src/components/cart/QuantityStepper.tsx
"use client";

interface QuantityStepperProps {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

export default function QuantityStepper({ quantity, onDecrement, onIncrement }: QuantityStepperProps) {
  return (
    <div className="flex items-start">
      <button
        onClick={onDecrement}
        className="flex w-9 h-9 items-center justify-center rounded-l border-t border-b border-l border-black bg-white hover:bg-neutral-50 transition-colors"
        aria-label="Decrease quantity"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8H12" stroke="#060709" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="flex w-9 h-9 items-center justify-center border-t border-b border-black bg-neutral-50">
        <span className="font-lexend text-xs text-neutral-900">{quantity}</span>
      </div>
      <button
        onClick={onIncrement}
        className="flex w-9 h-9 items-center justify-center rounded-r border-t border-b border-r border-black bg-white hover:bg-neutral-50 transition-colors"
        aria-label="Increase quantity"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8H12" stroke="#060709" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12V4" stroke="#060709" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}