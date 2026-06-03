"use client";

import { Star } from "lucide-react";

interface Props {
  rating: number;
  className?: string;
}

export function ReviewRatingStars({
  rating, className
}: Props) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.floor(rating);

        return (
          <Star
            key={i}
            className={`${className || ""} size-3 ${filled ? "fill-primary text-primary" : "text-gray-400"}`}
          />
        );
      })}
    </div>
  );
}