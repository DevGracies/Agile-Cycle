"use client";

import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  percentage?: number;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  percentage = 0,
  className = "",
}) => {
  const isPositive = percentage >= 0;

  const graphColor = isPositive
    ? "#519A09"
    : "#FF392B";

  return (
    <div
      className={`max-w-85 w-full flex items-center justify-between rounded-[24px] bg-white p-6 shadow-sm shadow-[#519A0914] ${className}`}
    >
      {/* Left */}
      <div className="leading-5.5">
        <p className="mb-2 text-[14px] text-[#868B85]">
          {title}
        </p>

        <h2 className="text-[24px] font-semibold leading-10 text-[#000000]">
          {value}
        </h2>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end">
        <p
          className="mb-3 text-[14px] font-medium leading-5.5"
          style={{ color: graphColor }}
        >
          {isPositive ? "+" : ""}
          {percentage}%
        </p>

        {/* Positive Graph */}
        {isPositive ? (
          <svg
            width="86"
            height="45"
            viewBox="0 0 86 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[45px] w-[86px]"
          >
            <path
              d="M2 33C10 33 10 19 18 19C26 19 26 41 43 41C60 41 58 6 73 6"
              stroke={graphColor}
              strokeWidth="4"
              strokeLinecap="round"
            />

            <circle
              cx="76"
              cy="5"
              r="5"
              fill={graphColor}
            />
          </svg>
        ) : (
          /* Negative Graph */
          <svg
            width="86"
            height="45"
            viewBox="0 0 86 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[45px] w-[86px]"
          >
            <path
              d="M2 8C10 8 12 24 22 24C32 24 34 6 48 6C62 6 64 38 78 38"
              stroke={graphColor}
              strokeWidth="4"
              strokeLinecap="round"
            />

            <circle
              cx="80"
              cy="38"
              r="5"
              fill={graphColor}
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default StatsCard;