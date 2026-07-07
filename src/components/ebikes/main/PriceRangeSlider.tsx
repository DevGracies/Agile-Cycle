"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
  currencySymbol?: string;
}

export default function PriceRangeSlider({
  min,
  max,
  step = 1,
  value,
  onChange,
  currencySymbol = "₦",
}: PriceRangeSliderProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);

  const getPercent = (val: number) => ((val - min) / (max - min)) * 100;

  const clamp = (val: number, minV: number, maxV: number) =>
    Math.min(Math.max(val, minV), maxV);

  const updateValueFromPosition = useCallback(
    (clientX: number, type: "min" | "max") => {
      if (!trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const percent = (clientX - rect.left) / rect.width;
      const rawValue = min + percent * (max - min);
      const steppedValue = Math.round(rawValue / step) * step;

      if (type === "min") {
        onChange({
          min: clamp(steppedValue, min, value.max - step),
          max: value.max,
        });
      } else {
        onChange({
          min: value.min,
          max: clamp(steppedValue, value.min + step, max),
        });
      }
    },
    [min, max, step, value, onChange],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return;
      updateValueFromPosition(e.clientX, dragging);
    },
    [dragging, updateValueFromPosition],
  );

  const stopDragging = useCallback(() => {
    setDragging(null);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [handleMouseMove, stopDragging]);

  const minPercent = getPercent(value.min);
  const maxPercent = getPercent(value.max);

  return (
    <div className="w-full space-y-8">
      {/* Track */}
      <div
        ref={trackRef}
        className="relative h-[3.5px] w-full rounded-full bg-gray-200"
      >
        {/* Active Range (animated fill) */}
        <div
          className="absolute h-[3.5px] rounded-full bg-secondary transition-all duration-150"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        {/* MIN HANDLE */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `${minPercent}%` }}
        >
          <div
            onMouseDown={() => setDragging("min")}
            className="h-4 w-4 -translate-x-1/2 cursor-grab rounded-full border-2 border-secondary bg-secondary shadow-md active:cursor-grabbing"
          />
        </div>

        {/* MAX HANDLE */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `${maxPercent}%` }}
        >
          <div
            onMouseDown={() => setDragging("max")}
            className="h-4 w-4 -translate-x-1/2 cursor-grab rounded-full border-2 border-secondary bg-secondary shadow-md active:cursor-grabbing"
          />
        </div>
      </div>

      {/* Labels */}
      <div className="mt-4 flex items-center justify-between gap-2 text-sm">
        <span className="border border-primary shadow-xs shadow-primary w-full h-10 px-2 rounded-xl flex items-center justify-between">
          <span>{currencySymbol}</span>
          <span>{value.min}</span>
        </span>
        <span className="bold">-</span>
        <span className="border border-primary shadow-xs shadow-primary w-full h-10 px-2 rounded-xl flex items-center justify-between">
          <span>{currencySymbol}</span>
          <span>{value.max}</span>
        </span>
      </div>
    </div>
  );
}
