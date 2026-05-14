"use client";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
}

export function StatCard({ title, value, change }: StatCardProps) {
  return (
    <div className="w-full h-25 sm:h-27 px-4 sm:px-6 py-3 sm:py-4 flex flex-col justify-between bg-white border border-[#E8E8E8] rounded-lg">
      <span className="text-xs sm:text-sm font-normal text-[#868B85]">
        {title}
      </span>
      <div className="flex items-center justify-between">
        <span className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#1A1A1A] tracking-tight">
          {value ?? 0}
        </span>
        {change && (
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-medium text-[#519A09]">
              {change}
            </span>
            {/* Sparkline SVG matching the design */}
            <svg
              className="w-14 h-7 sm:w-18 sm:h-9"
              viewBox="0 0 72 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 28C6 24 12 20 18 18C24 16 30 16 36 14C42 12 48 8 54 6C60 4 66 4 70 4"
                stroke="#519A09"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 32C6 28 12 24 18 22C24 20 30 20 36 18C42 16 48 12 54 10C60 8 66 8 70 8"
                stroke="#519A09"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.4"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
