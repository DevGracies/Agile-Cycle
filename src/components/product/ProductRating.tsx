import { ReviewRatingStars } from "../reviews/modal/ReviewRating";

interface ProductRatingProps {
  rating: number;
  reviewCount?: number;
}

const ProductRating = ({ rating, reviewCount }: ProductRatingProps) => {
  return (
    <div className="flex items-center gap-2">
      <ReviewRatingStars rating={rating} />

      {reviewCount && (
        <span className="text-sm">({reviewCount})</span>
      )}
    </div>
  );
};

export default ProductRating;