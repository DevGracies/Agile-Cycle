"use client"
import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

import { Card } from "../shared/Card";
import { DashboardMetric } from "@/src/types/dashboard";
import { cn } from "@/src/lib/utils";

interface MetricCardProps {
  metric: DashboardMetric;
  loading?: boolean;
}

export function MetricCard({ metric, loading }: MetricCardProps) {
  const isPositive = metric.trend === "up";

  return (
    <Card
      variant="metric"
      loading={loading}
      className="flex justify-between items-center gap-4"
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col">
        <span className="text-xs text-slate-500 font-medium">
          {metric.title}
        </span>

        <h3 className="mt-2 text-[28px] leading-none font-semibold tracking-tight text-slate-900">
          {metric.value}
        </h3>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-end gap-1">
        <div className="flex items-center gap-1">
          {isPositive ? (
            <ArrowUpRight className="h-4 w-4 text-[#69A62D]" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-[#E35B5B]" />
          )}

          <span
            className={cn(
              "text-sm font-semibold",
              isPositive ? "text-[#69A62D]" : "text-[#E35B5B]"
            )}
          >
            {isPositive ? "+" : "-"}
            {Math.abs(metric.percentage)}%
          </span>
        </div>

        <div className="w-18 h-12 mr-[0.8rem]">
          <SparkLineChart
            data={metric.chartData}
            width={106}
            height={48}
            curve="natural"
            color={isPositive ? "#22c55e" : "#ef4444"}
          />
        </div>
      </div>
    </Card>
  );
}