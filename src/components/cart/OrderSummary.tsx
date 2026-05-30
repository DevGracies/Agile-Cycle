// src/components/cart/OrderSummary.tsx
"use client";

import { useState } from "react";

interface OrderSummaryProps {
  subtotal: number;
  savings: number;
  onApplyDiscount?: (code: string) => void;
  onCheckout?: () => void;
}

import { formatPrice } from "@/src/lib/utils";

export default function OrderSummary({
  subtotal,
  savings,
  onApplyDiscount,
  onCheckout,
}: OrderSummaryProps) {
  const [discountCode, setDiscountCode] = useState("");
  const [orderInstructions, setOrderInstructions] = useState("");
  const [instructionsOpen, setInstructionsOpen] = useState(false);

  return (
    <div className="w-full lg:w-[518px] flex-shrink-0 bg-white border border-neutral-50 p-6 flex flex-col gap-6">
      {/* Discount Code */}
      <div className="flex items-start gap-3">
        <div className="flex-1 h-12 rounded-lg border border-neutral-100 bg-white flex items-center px-6">
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Discount code"
            className="w-full font-lexend text-sm text-neutral-100 placeholder:text-neutral-100 outline-none bg-transparent"
          />
        </div>
        <button
          onClick={() => onApplyDiscount?.(discountCode)}
          className="h-12 px-5 rounded-lg border border-[#519A09] bg-white font-lexend font-medium text-sm text-[#519A09] hover:bg-[#519A09] hover:text-white transition-colors whitespace-nowrap"
        >
          Apply
        </button>
      </div>

      {/* Subtotal */}
      <div className="flex items-center justify-between">
        <span className="font-lexend font-bold text-base text-black">
          Subtotal
        </span>
        <span className="font-roboto font-bold text-2xl text-[#01430D]">
          {formatPrice(subtotal)}
        </span>
      </div>
      {savings > 0 && subtotal > 0 && (
        <p className="font-lexend font-semibold text-sm text-[#519A09] -mt-4">
          You saved {formatPrice(savings)}!
        </p>
      )}

      <div className="w-full h-px bg-[#519A09]/30" />

      {/* Order Instructions */}
      <div className="flex flex-col gap-4">
        <button
          className="flex items-center justify-between w-full"
          onClick={() => setInstructionsOpen(!instructionsOpen)}
        >
          <span className="font-lexend text-base text-black">
            Order instructions
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform ${instructionsOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M16 14L12 10L8 14"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {instructionsOpen && (
          <textarea
            value={orderInstructions}
            onChange={(e) => setOrderInstructions(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-[#519A09]/30 outline-none font-lexend text-sm text-black p-3 resize-none"
            placeholder="Add any special instructions for your order..."
          />
        )}
      </div>

      <div className="w-full h-px bg-[#519A09]/30" />

      {/* Checkout */}
      <div className="flex flex-col gap-6">
        <p className="font-lexend text-base text-black">
          Taxes and <span className="text-[#519A09]">shipping</span> calculated
          at checkout
        </p>
        <button
          onClick={onCheckout}
          className="w-full h-14 rounded-lg bg-[#01430D] text-white font-lexend font-medium text-base hover:bg-[#013009] transition-opacity"
        >
          Checkout
        </button>
      </div>

      {/* Payment Methods */}
      <div className="flex flex-col items-center gap-4 pt-2">
        <p className="font-roboto font-medium text-xs text-neutral-300 tracking-[1px] uppercase">
          100% Secure Payments
        </p>
        <div className="flex items-center gap-3">
          <svg
            width="56"
            height="32"
            viewBox="0 0 56 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="55"
              height="31"
              rx="5.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="55"
              height="31"
              rx="5.5"
              stroke="#F4F4F4"
            />
            <circle cx="22" cy="16" r="9" fill="#E80B26" />
            <circle cx="34" cy="16" r="9" fill="#F59D31" />
            <path
              d="M28 22.7083C29.8413 21.0603 31 18.6655 31 16C31 13.3345 29.8413 10.9397 28 9.29175C26.1587 10.9397 25 13.3345 25 16C25 18.6655 26.1587 21.0603 28 22.7083Z"
              fill="#FC6020"
            />
          </svg>
          <div className="flex items-center justify-center w-14 h-8 rounded-md border border-neutral-50 bg-white">
            <svg
              width="37"
              height="14"
              viewBox="0 0 37 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1038 5.06408C19.0837 6.55974 20.5129 7.39443 21.5895 7.89066C22.6956 8.39986 23.0672 8.72635 23.0629 9.18164C23.0545 9.87855 22.1806 10.1861 21.3625 10.198C19.9355 10.219 19.1059 9.83362 18.4462 9.54207L17.9322 11.8175C18.594 12.1061 19.8194 12.3577 21.0902 12.3687C24.073 12.3687 26.0247 10.9758 26.0352 8.81621C26.0468 6.07549 22.0275 5.92373 22.0549 4.69865C22.0644 4.32723 22.4391 3.93085 23.2603 3.83001C23.6667 3.77909 24.7887 3.74015 26.0605 4.29428L26.5598 2.09272C25.8758 1.85709 24.9966 1.63144 23.9021 1.63144C21.0944 1.63144 19.1196 3.04324 19.1038 5.06408ZM31.357 1.82115C30.8124 1.82115 30.3532 2.12168 30.1485 2.58296L25.8874 12.2069H28.8682L29.4613 10.6563H33.1038L33.4479 12.2069H36.0751L33.7825 1.82115H31.357ZM31.7739 4.62676L32.6341 8.52666H30.2783L31.7739 4.62676ZM15.4898 1.82115L13.1403 12.2069H15.9806L18.3291 1.82115H15.4898ZM11.2879 1.82115L8.33144 8.89009L7.13556 2.87949C6.99518 2.20854 6.44105 1.82115 5.8257 1.82115H0.9926L0.925049 2.12268C1.91721 2.32636 3.04448 2.65484 3.72738 3.00629C4.14536 3.22096 4.26463 3.40867 4.40184 3.91887L6.66693 12.2069H9.66875L14.2707 1.82115H11.2879Z"
                fill="url(#visa_order)"
              />
              <defs>
                <linearGradient
                  id="visa_order"
                  x1="17.085"
                  y1="12.5841"
                  x2="17.379"
                  y2="1.55586"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#222357" />
                  <stop offset="1" stopColor="#254AA5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
