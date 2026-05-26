"use client";

import Image from "next/image";
import { Bike, Grid2X2, Star } from "lucide-react";
import type { ImageProps } from "next/image";

interface TestimonialCardProps {
  name: string;
  text: string;
  date: string;
  images: ImageProps["src"][];
}

const TestimonialCard = ({
  name,
  text,
  date,
  images,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white border border-[#E8E8E8] rounded-[22px] p-6 min-h-[360px] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-[2px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`text-lg ${
                  index < 4 ? "text-[#F4B400]" : "text-[#E5E5E5]"
                }`}
              >
                <Star size={12} fill="#F4B400" />
              </span>
            ))}
          </div>

          <p className="text-[#519A09] font-medium text-sm">{name}</p>
        </div>

        <p className="text-[#2E2E2E] text-[15px] leading-7 font-medium">
          {text}
        </p>

        {images.length > 0 && (
          <div className="flex items-center gap-2 mt-5 flex-wrap">
            {images.map((image, index) => (
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
          <div className="flex items-center gap-2 text-[#519A09]">
            <Bike size={16} />
            <span className="text-sm font-medium">Agile Comet X</span>
          </div>

          <div className="w-7 h-7 rounded-md border border-[#D9E9BF] flex items-center justify-center text-[#519A09]">
            <Grid2X2 size={14} />
          </div>
        </div>
      </div>

      <p className="text-[#A4A4A4] text-sm mt-10">{date}</p>
    </div>
  );
};

export default TestimonialCard;
