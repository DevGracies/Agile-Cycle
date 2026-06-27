"use client";

import { PieChart } from "@mui/x-charts/PieChart";

import {
  RevenueByProduct,
} from "@/src/types/dashboard";

import {
  formatCompactCurrency,
} from "@/src/mocks/dashboard";

import { Card } from "../shared/Card";

interface RevenueDonutChartProps {
  data: RevenueByProduct[];
  loading?: boolean;
}

const COLORS = [
  "#5FA71A", // primary green
  "#004D1A", // dark green
];

export function RevenueDonutChart({
  data,
  loading,
}: RevenueDonutChartProps) {
  if (loading) {
    return (
      <Card
        variant="chart"
        className="h-[370px]"
      >
        <RevenueDonutSkeleton />
      </Card>
    );
  }

  const primarySlice = data[0];

  return (
    <Card
      variant="chart"
      className="
        h-[370px]
        overflow-hidden
      "
    >
      <div
        className="
          flex
          h-full
          flex-col
        "
      >
        <ChartHeader />

        <div
          className="
            relative
            flex
            justify-center
            pt-2
          "
        >
          <PieChart
            width={260}
            height={220}
            margin={{
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
            series={[
              {
                innerRadius: 58,
                outerRadius: 92,
                cornerRadius: 4,
                paddingAngle: 0,
                highlightScope: {
                  fade: "global",
                  highlight: "item",
                },
                faded: {
                  innerRadius: 58,
                  additionalRadius: -4,
                },
                data: data.map(
                  (item, index) => ({
                    id: item.name,
                    value:
                      item.percentage,
                    label: item.name,
                    color:
                      COLORS[index],
                  })
                ),
              },
            ]}
            slotProps={{
              legend: {
                hidden: true,
              } as any,
            }}
          />

          {/* Center Label */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              -translate-x-1/2
              -translate-y-1/2
              flex-col
              items-center
              justify-center
            "
          >
            <span
              className="
                text-[30px]
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              {primarySlice.percentage}%
            </span>
          </div>
        </div>

        <RevenueLegend
          data={data}
        />
      </div>
    </Card>
  );
}

/* ---------------------------------- */
/* Header */
/* ---------------------------------- */

function ChartHeader() {
  return (
    <div
      className="
        px-5
        pt-4
      "
    >
      <h2
        className="
          text-sm
          font-medium
          text-slate-800
        "
      >
        Revenue by product
      </h2>
    </div>
  );
}

/* ---------------------------------- */
/* Legend */
/* ---------------------------------- */

interface RevenueLegendProps {
  data: RevenueByProduct[];
}

function RevenueLegend({
  data,
}: RevenueLegendProps) {
  return (
    <div
      className="
        mt-auto
        space-y-4
        px-5
        pb-5
      "
    >
      {data.map(
        (item, index) => (
          <LegendItem
            key={item.name}
            color={
              COLORS[index]
            }
            label={item.name}
            value={item.value}
            percentage={
              item.percentage
            }
          />
        )
      )}
    </div>
  );
}

interface LegendItemProps {
  color: string;
  label: string;
  value: number;
  percentage: number;
}

function LegendItem({
  color,
  label,
  value,
  percentage,
}: LegendItemProps) {
  return (
    <div
      className="
        grid
        grid-cols-[16px_1fr_auto_auto]
        items-center
        gap-3
      "
    >
      <span
        className="
          h-2.5
          w-2.5
          rounded-full
        "
        style={{
          backgroundColor:
            color,
        }}
      />

      <span
        className="
          text-sm
          text-slate-500
        "
      >
        {label}
      </span>

      <span
        className="
          text-sm
          font-semibold
          text-slate-900
        "
      >
        {formatCompactCurrency(
          value
        )}
      </span>

      <span
        className="
          text-sm
          text-slate-400
        "
      >
        {percentage}%
      </span>
    </div>
  );
}

/* ---------------------------------- */
/* Skeleton */
/* ---------------------------------- */

function RevenueDonutSkeleton() {
  return (
    <div
      className="
        flex
        h-full
        flex-col
      "
    >
      <div
        className="
          h-4
          w-40
          animate-pulse
          rounded
          bg-slate-200
          ml-5
          mt-4
        "
      />

      <div
        className="
          flex
          flex-1
          items-center
          justify-center
        "
      >
        <div
          className="
            h-[180px]
            w-[180px]
            animate-pulse
            rounded-full
            border-[30px]
            border-slate-200
          "
        />
      </div>

      <div
        className="
          space-y-3
          px-5
          pb-5
        "
      >
        {Array.from({
          length: 2,
        }).map((_, i) => (
          <div
            key={i}
            className="
              h-5
              animate-pulse
              rounded
              bg-slate-200
            "
          />
        ))}
      </div>
    </div>
  );
}