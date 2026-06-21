
import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import { Card } from "../shared/Card";
import { DashboardMetric } from "@/src/types/dashboard";
import { cn } from "@/src/lib/utils";

interface MetricCardProps {
  metric: DashboardMetric;
  loading?: boolean;
}

export function MetricCard({
  metric,
  loading,
}: MetricCardProps) {
  const isPositive =
    metric.trend === "up";

  return (
    <Card
      variant="metric"
      loading={loading}
      className="
        flex
        items-center
        justify-between
        gap-4
      "
    >
      <div className="flex flex-col">
        <span
          className="
            text-xs
            text-slate-500
            font-medium
          "
        >
          {metric.title}
        </span>

        <h3
          className="
            mt-2
            text-[28px]
            leading-none
            font-semibold
            tracking-tight
            text-slate-900
          "
        >
          {metric.value}
        </h3>
      </div>

      <TrendBadge
        percentage={metric.percentage}
        positive={isPositive}
      />
    </Card>
  );
}

interface TrendBadgeProps {
  percentage: number;
  positive: boolean;
}

function TrendBadge({
  percentage,
  positive,
}: TrendBadgeProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-1
        self-start
      "
    >
      {positive ? (
        <ArrowUpRight
          className="
            h-4
            w-4
            text-[#69A62D]
          "
        />
      ) : (
        <ArrowDownRight
          className="
            h-4
            w-4
            text-[#E35B5B]
          "
        />
      )}

      <span
        className={cn(
          `
          text-sm
          font-semibold
          `,
          positive
            ? "text-[#69A62D]"
            : "text-[#E35B5B]"
        )}
      >
        {positive ? "+" : "-"}
        {Math.abs(percentage)}%
      </span>
    </div>
  );
}