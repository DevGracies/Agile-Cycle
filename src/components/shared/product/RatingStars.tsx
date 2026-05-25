import { Star } from "lucide-react";

export default function RatingStars() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={15}
          className="fill-[#ffbe0b] text-[#ffbe0b]"
        />
      ))}
    </div>
  );
}