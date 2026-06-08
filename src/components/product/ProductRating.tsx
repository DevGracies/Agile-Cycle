import { ReviewRatingStars } from "../reviews/modal/ReviewRating";

interface ProductRatingProps {
  rating: number;
  reviewCount?: number;
}

const ProductRating = ({ rating, reviewCount }: ProductRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      <ReviewRatingStars rating={rating} />

      {reviewCount && (
        <span className="text-gray-500 text-xs">({reviewCount})</span>
      )}
    </div>
  );
};

export default ProductRating;