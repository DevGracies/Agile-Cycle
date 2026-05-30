import { reviews } from "@/src/mocks/index.mock";
import ReviewCard from "./ReviewCard";

const ReviewsCarousel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewsCarousel;