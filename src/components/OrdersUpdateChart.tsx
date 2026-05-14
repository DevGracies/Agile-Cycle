"use client";

import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

import type {
  CustomerOverviewData,
  CustomerOverviewPoint,
} from "@/src/lib/api";

interface OrdersUpdateChartProps {
  overview: CustomerOverviewData;
  title?: string;
}

const metricLabels = [
  "Active Customers",
  "Repeat Customers",
  "Visitors",
  "Conversion Rate",
];

export function OrdersUpdateChart({
  overview,
  title = "Customer Overview",
}: OrdersUpdateChartProps) {
  const [activeTab, setActiveTab] = useState<"this-week" | "last-week">(
    "this-week",
  );

  const data: CustomerOverviewPoint[] =
    activeTab === "this-week" ? overview.thisWeekData : overview.lastWeekData;

  return (
    <div className="bg-white border border-[#E8E8E8] rounded-lg pt-4 sm:pt-6 px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#519A09]" />
          <span className="text-sm sm:text-base font-medium text-[#1A1A1A]">
            {title}
          </span>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab("this-week")}
            className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-colors rounded-md ${
              activeTab === "this-week"
                ? "bg-white border border-[#1A1A1A] text-[#1A1A1A] shadow-sm"
                : "bg-[#F9F9F9] border border-[#E8E8E8] text-[#868B85] hover:bg-[#F5F5F5]"
            }`}
          >
            This week
          </button>
          <button
            onClick={() => setActiveTab("last-week")}
            className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-colors rounded-md ml-2 ${
              activeTab === "last-week"
                ? "bg-white border border-[#1A1A1A] text-[#1A1A1A] shadow-sm"
                : "bg-[#F9F9F9] border border-[#E8E8E8] text-[#868B85] hover:bg-[#F5F5F5]"
            }`}
          >
            Last week
          </button>
        </div>
      </div>

      {/* Stats Row - Horizontal layout with more spacing and bottom border */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pb-4 sm:pb-5 border-b border-[#E8E8E8]">
        {metricLabels.map((label, index) => (
          <div key={label} className="flex flex-col">
            <span className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1A1A1A] tracking-tight">
              {overview.metrics[index]?.value ?? 0}
            </span>
            <span className="text-xs sm:text-sm text-[#868B85] font-normal">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Chart - aligns with content above */}
      <div className="w-full h-125 sm:h-62.5 lg:h-70 p-0">
        <LineChart
          xAxis={[
            {
              data: data.map((d) => d.day),
              scaleType: "point",
              tickLabelStyle: {
                fontSize: 12,
                fill: "#868B85",
              },
              disableLine: true,
              disableTicks: true,
            },
          ]}
          yAxis={[
            {
              min: 0,
              max: 25000,
              tickNumber: 6,
              tickLabelStyle: {
                fontSize: 12,
                fill: "#868B85",
              },
              disableLine: true,
              disableTicks: true,
              valueFormatter: (value: number) => {
                if (value === 0) return "0";
                return `${value / 1000}K`;
              },
            },
          ]}
          series={[
            {
              data: data.map((d) => d.value),
              color: "#519A09",
              curve: "natural",
              area: false,
              showMark: false,
            },
          ]}
          sx={{
            "& .MuiLineElement-root": {
              strokeWidth: 2.5,
            },
            "& .MuiChartsAxis-tickLabel": {
              fontFamily: "inherit",
            },
            "& .MuiChartsGrid-line": {
              stroke: "#E8E8E8",
              strokeWidth: 1,
            },
          }}
          grid={{ horizontal: true }}
          margin={{ left: 45, right: 10, top: 20, bottom: 30 }}
        />
      </div>
    </div>
  );
}
