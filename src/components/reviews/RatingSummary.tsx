import { Star } from "lucide-react";
import RatingStars from "../shared/product/RatingStars";

const ratings = [
  { star: 5, value: 95 },
  { star: 4, value: 40 },
  { star: 3, value: 0 },
  { star: 2, value: 0 },
  { star: 1, value: 0 },
];

const RatingSummary = () => {
  return (
    <div className="w-full lg:max-w-[320px]">
      <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>

      <div className="flex items-center gap-3 mb-6">
        <span className="text-[32px] font-semibold">4.6</span>

        <RatingStars />

        <span className="text-[#9E9E9E] text-sm">
          Based on 135 Reviews
        </span>
      </div>

      <div className="space-y-4">
        {ratings.map((item) => (
          <div key={item.star} className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-sm font-medium">
              {item.star} <Star className="size-3 fill-[#FFB800] text-[#FFB800]"/>
            </span>

            <div className="flex-1 h-[4px] bg-[#E5E5E5] rounded-full overflow-hidden">
              <div
                className="bg-[#2D7A1F] h-full rounded-full"
                style={{ width: `${item.value}%` }}
              />
            </div>

            <span className="text-sm text-[#8D8D8D] w-6">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSummary;