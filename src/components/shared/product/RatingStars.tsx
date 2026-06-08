import { Star } from "lucide-react";

interface Props {
  count?: number;
}

const RatingStars = ({ count = 5 }: Props) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < Math.floor(count);
        return (
          <Star
            key={index}
            className={`size-3 
            ${filled ? "fill-[#FFB800] text-[#FFB800]" : "text-[#FFB800]"} 
            `}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
