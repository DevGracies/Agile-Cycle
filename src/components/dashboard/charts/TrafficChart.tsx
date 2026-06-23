
"use client";

import { LineChart } from "@mui/x-charts/LineChart";

import {
  TrafficDataPoint,
  TrafficSummary,
} from "@/src/types/dashboard";

import { Card } from "../shared/Card";
import { cn } from "@/src/lib/utils";

interface TrafficChartProps {
  data: TrafficDataPoint[];
  summary: TrafficSummary;
  loading?: boolean;
}

const ACTIVE_POINT_INDEX = 5; // Day 12 → 2.5k

export function TrafficChart({
  data,
  summary,
  loading,
}: TrafficChartProps) {
  if (loading) {
    return (
      <Card
        variant="chart"
        className="h-[370px]"
      >
        <TrafficChartSkeleton />
      </Card>
    );
  }

  const activePoint =
    data[ACTIVE_POINT_INDEX];

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
        <TrafficHeader />

        <div
          className="
            grid
            grid-cols-2
            gap-4
            px-4
            pt-2
            md:px-5
          "
        >
          <TrafficStatCard
            label="Store Visits"
            value={
              summary.storeVisits.value
            }
            percentage={
              summary.storeVisits
                .percentage
            }
          />

          <TrafficStatCard
            label="Visitors"
            value={
              summary.visitors.value
            }
            percentage={
              summary.visitors
                .percentage
            }
          />
        </div>

        <div
          className="
            px-5
            pt-5
            text-sm
            text-slate-500
          "
        >
          Apr 4 - Apr 16 store visits
          chart
        </div>

        <div
          className="
            relative
            flex-1
            px-2
            pb-2
          "
        >
          <LineChart
            height={180}
            xAxis={[
              {
                scaleType: "point",
                data: data.map(
                  (item) => item.day
                ),
              },
            ]}
            yAxis={[
              {
                min: 0,
                max: 4000,
              },
            ]}
            series={[
              {
                data: data.map(
                  (item) =>
                    item.visitors
                ),
                curve: "natural",
                showMark: false,
                color: "#69A62D",
              },
            ]}
            grid={{
              horizontal: true,
            }}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
            slotProps={{
              legend: {
                hidden: true,
              } as any,
            }}
            sx={{
              ".MuiLineElement-root":
                {
                  strokeWidth: 3,
                },

              ".MuiChartsAxis-line":
                {
                  display: "none",
                },

              ".MuiChartsAxis-tick":
                {
                  display: "none",
                },

              ".MuiChartsAxis-tickLabel":
                {
                  fill: "#94A3B8",
                  fontSize: 12,
                },

              ".MuiChartsGrid-line":
                {
                  stroke:
                    "#E8EDF3",
                  strokeDasharray:
                    "4 4",
                },
            }}
          />

          {/* Active Point */}

          <div
            className="
              pointer-events-none
              absolute
              left-[68%]
              top-[44%]
              flex
              flex-col
              items-center
            "
          >
            <div
              className="
                rounded-lg
                bg-[#69A62D]
                px-3
                py-1
                text-xs
                font-semibold
                text-white
                shadow-md
              "
            >
              2.5k
            </div>

            <div
              className="
                mt-2
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                border-2
                border-[#69A62D]
                bg-white
              "
            >
              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#69A62D]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ---------------------------------- */
/* Header */
/* ---------------------------------- */

function TrafficHeader() {
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
        Traffic
      </h2>
    </div>
  );
}

/* ---------------------------------- */
/* Stat Card */
/* ---------------------------------- */

interface TrafficStatCardProps {
  label: string;
  value: number;
  percentage: number;
}

function TrafficStatCard({
  label,
  value,
  percentage,
}: TrafficStatCardProps) {
  const positive =
    percentage > 0;

  return (
    <div
      className="
        rounded-2xl
        bg-[#F7F8F7]
        px-4
        py-3
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-xs
            text-slate-500
          "
        >
          {label}
        </span>

        <span
          className={cn(
            `
            text-xs
            font-semibold
            `,
            positive
              ? "text-[#69A62D]"
              : "text-[#E35B5B]"
          )}
        >
          {positive
            ? `+${percentage}%`
            : `${percentage}%`}
        </span>
      </div>

      <div
        className="
          mt-2
          text-[32px]
          font-bold
          tracking-tight
          text-slate-900
        "
      >
        {value}
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Skeleton */
/* ---------------------------------- */

function TrafficChartSkeleton() {
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
          ml-5
          mt-5
          h-4
          w-24
          animate-pulse
          rounded
          bg-slate-200
        "
      />

      <div
        className="
          grid
          grid-cols-2
          gap-4
          px-5
          pt-5
        "
      >
        <div
          className="
            h-20
            animate-pulse
            rounded-2xl
            bg-slate-200
          "
        />

        <div
          className="
            h-20
            animate-pulse
            rounded-2xl
            bg-slate-200
          "
        />
      </div>

      <div
        className="
          mx-5
          mt-5
          h-4
          w-40
          animate-pulse
          rounded
          bg-slate-200
        "
      />

      <div
        className="
          mx-5
          mt-5
          flex-1
          animate-pulse
          rounded-xl
          bg-slate-100
        "
      />
    </div>
  );
}