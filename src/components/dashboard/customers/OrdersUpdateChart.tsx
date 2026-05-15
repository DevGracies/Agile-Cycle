"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Box, Typography } from "@mui/material";
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

// Format y‑axis values (0K, 5K, 10K, …)
const formatYAxis = (value: number): string => {
  if (value === 0) return "0";
  return `${value / 1000}K`;
};

// Custom tooltip that shows the exact value
const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any;
}) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const formatted =
      value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value.toString();
    return (
      <Box className="rounded-lg bg-[#4F9A06] px-3 py-1.5 shadow-lg">
        <Typography variant="body2" className="text-white font-medium">
          {formatted}
        </Typography>
      </Box>
    );
  }
  return null;
};

export function OrdersUpdateChart({
  overview,
  title = "Customer Overview",
}: OrdersUpdateChartProps) {
  const [activeTab, setActiveTab] = useState<"this-week" | "last-week">(
    "this-week",
  );

  const data: CustomerOverviewPoint[] =
    activeTab === "this-week" ? overview.thisWeekData : overview.lastWeekData;

  // Transform data for recharts (recharts expects an array of objects)
  const chartData = data.map((point) => ({
    label: point.day,
    value: point.value,
  }));

  return (
    <Box className="rounded-2xl bg-white p-6 shadow-sm">
      {/* Header with title and toggle buttons */}
      <Box className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <Box className="flex items-center gap-2">
          <Box className="h-2 w-2 rounded-full bg-[#519A09]" />
          <Typography variant="body1" className="text-[#111827]">
            {title}
          </Typography>
        </Box>
        <Box className="flex gap-2">
          <button
            onClick={() => setActiveTab("this-week")}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
              activeTab === "this-week"
                ? "bg-[#519A09] text-white"
                : "bg-[#F2F5F3] text-[#5F6368] hover:bg-gray-200"
            }`}
          >
            This week
          </button>
          <button
            onClick={() => setActiveTab("last-week")}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
              activeTab === "last-week"
                ? "bg-[#519A09] text-white"
                : "bg-[#F2F5F3] text-[#5F6368] hover:bg-gray-200"
            }`}
          >
            Last week
          </button>
        </Box>
      </Box>

      {/* Metrics row (Active Customers, Repeat Customers, etc.) */}
      <Box className="mb-4 grid grid-cols-2 gap-4 border-b border-[#E8E8E8] pb-4 sm:grid-cols-4 sm:gap-6">
        {metricLabels.map((label, index) => (
          <Box key={label}>
            <Typography variant="body2" className="text-[#5F6368]">
              {label}
            </Typography>
            <Typography variant="h6" className="font-semibold text-[#111827]">
              {overview.metrics[index]?.value ?? 0}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Chart */}
      <Box sx={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 20, left: -10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#519A09" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#519A09" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#5F6368", fontSize: 12, fontWeight: 500 }}
            />

            <YAxis
              tickFormatter={formatYAxis}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#5F6368", fontSize: 12, fontWeight: 500 }}
              domain={[0, 25000]}
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
            />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#519A09"
              strokeWidth={3}
              fill="url(#chartGradient)"
              activeDot={{
                r: 6,
                strokeWidth: 2,
                stroke: "#4F9A06",
                fill: "#fff",
              }}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
