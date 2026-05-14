"use client";

import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Box, Typography } from "@mui/material";

type ChartData = {
  label: string;
  value: number;
};

interface OrdersUpdateChartProps {
  title?: string;
  data?: ChartData[];
  lineColor?: string;
  dotColor?: string;
  tooltipBg?: string;
  height?: number;
  className?: string;
}

const defaultData: ChartData[] = [
  { label: "16", value: 1000000 },
  { label: "18", value: 1500000 },
  { label: "20", value: 1600000 },
  { label: "22", value: 1000000 },
  { label: "24", value: 1300000 },
  { label: "26", value: 2200000 },
  { label: "28", value: 2200000 },
  { label: "30", value: 1850000 },
  { label: "02", value: 1400000 },
  { label: "04", value: 1150000 },
  { label: "06", value: 1800000 },
  { label: "08", value: 2250000 },
];

const formatYAxis = (value: number): string => {
  if (value >= 1000000) {
    const formatted = value / 1000000;

    return `${formatted % 1 === 0 ? formatted : formatted.toFixed(1)}M`;
  }

  if (value >= 1000) {
    return `${value / 1000}K`;
  }

  return `${value}`;
};

const CustomTooltip = ({
  active,
  payload,
  tooltipBg,
}: {
  active?: boolean;
  payload?: any;
  tooltipBg: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-lg px-4 py-2 text-white shadow-lg"
        style={{ backgroundColor: tooltipBg }}
      >
        <p className="text-sm font-medium">
          {(payload[0].value / 1000000).toFixed(2)}M
        </p>
      </div>
    );
  }

  return null;
};

const OrdersUpdateChart: React.FC<OrdersUpdateChartProps> = ({
  title = "Orders Update",
  data = defaultData,
  lineColor = "#519A09",
  dotColor = "#4F9A06",
  tooltipBg = "#4F9A06",
  height = 420,
  className = "",
}) => {
  return (
    <Box
      className={`rounded-2xl bg-[#F7F8F7] p-6 shadow-sm ${className}`}
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-2">
        <div
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: lineColor }}
        />

        <Typography
          variant="body1"
          className="text-[18px] text-[#111827]"
        >
          {title}
        </Typography>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: -10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="ordersGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={lineColor}
                  stopOpacity={0.15}
                />
                <stop
                  offset="100%"
                  stopColor={lineColor}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#5F6368",
                fontSize: 14,
                fontWeight: 600,
              }}
            />

            <YAxis
              tickFormatter={formatYAxis}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#5F6368",
                fontSize: 14,
                fontWeight: 600,
              }}
              domain={[0, 2500000]}
              ticks={[0, 500000, 1000000, 1500000, 2000000, 2500000]}
            />

            <Tooltip
              content={
                <CustomTooltip
                  tooltipBg={tooltipBg}
                />
              }
              cursor={false}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke={lineColor}
              strokeWidth={4}
              fill="url(#ordersGradient)"
              activeDot={{
                r: 8,
                strokeWidth: 4,
                stroke: dotColor,
                fill: "#fff",
              }}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
};

export default OrdersUpdateChart;