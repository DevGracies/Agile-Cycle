import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: number;
  reviewCount?: number;
}

const ProductRating = ({ rating, reviewCount }: ProductRatingProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex text-primary">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={12} fill="#519A09" />
        ))}
      </div>

      {reviewCount && (
        <span className="text-sm">({reviewCount})</span>
      )}
    </div>
  );
};

export default ProductRating;