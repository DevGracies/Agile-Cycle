
import Image from "next/image";
import RatingStars from "../shared/product/RatingStars";
import { Bike, Expand } from "lucide-react";

interface Props {
  review: any;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="bg-white border border-[#E8E8E8] rounded-[22px] p-6 min-h-[360px] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <RatingStars />

          <p className="text-primary font-medium text-sm">{review.name}</p>
        </div>

        <p className="text-[#2E2E2E] text-[15px] leading-7 font-medium">
          {review.text}
        </p>

        {review.images.length > 0 && (
          <div className="flex items-center gap-2 mt-5 flex-wrap">
            {review.images.map((image, index) => (
              <div
                key={index}
                className="relative w-[52px] h-[52px] rounded-lg overflow-hidden"
              >
                <Image src={image} alt="bike" fill className="object-cover" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 border-t border-[#E8E8E8] pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <Bike size={16} />
            <span className="text-sm font-medium">Agile Comet X</span>
          </div>

          <div className="w-7 h-7 rounded-md border border-[#D9E9BF] flex items-center justify-center text-primary">
            <Expand size={14} className="text-secondary" />
          </div>
        </div>
      </div>

      <p className="text-[#A4A4A4] text-sm mt-10">{review.date}</p>
    </div>
  );
};

export default ReviewCard;
