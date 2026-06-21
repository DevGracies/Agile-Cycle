
import React from "react";
import { cn } from "@/src/lib/utils";

export type CardVariant =
  | "default"
  | "metric"
  | "chart"
  | "table";

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  loading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default: `
    bg-white
    border
    border-[#EEF1ED]
    shadow-sm
  `,

  metric: `
    bg-white
    border
    border-[#EEF1ED]
    shadow-sm
    min-h-[96px]
  `,

  chart: `
    bg-white
    border
    border-[#EEF1ED]
    shadow-sm
  `,

  table: `
    bg-white
    border
    border-[#EEF1ED]
    shadow-sm
    overflow-hidden
  `,
};

export const Card = React.forwardRef<
  HTMLDivElement,
  CardProps
>(
  (
    {
      className,
      children,
      loading = false,
      variant = "default",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="region"
        aria-busy={loading}
        className={cn(
          `
          rounded-2xl
          p-4
          md:p-5
          transition-all
          duration-200
          `,
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {loading ? (
          <CardSkeleton />
        ) : (
          children
        )}
      </div>
    );
  }
);

Card.displayName = "Card";

function CardSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 w-24 rounded bg-slate-200" />
      <div className="h-8 w-36 rounded bg-slate-200" />
      <div className="h-4 w-20 rounded bg-slate-200" />
    </div>
  );
}