"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";
interface InsightCardProps {
  title: string;
  description: string;
  image: ImageProps["src"];
  date: string;
}

const InsightCard = ({
  title,
  description,
  image,
  date,
}: InsightCardProps) => {
  return (
    <div>
      <div className="relative w-full h-[320px] rounded-[22px] overflow-hidden bg-[#D9D9D9]">
        <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover" />
      </div>

      <div className="pt-5">
        <h3 className="text-xl leading-[1.2] font-bold text-black wrap-break-word">
          {title}
        </h3>

        <p className="mt-4 text-[#5E5E5E] text-sm leading-7">
          {description}
        </p>

        <p className="mt-5 text-[#9A9A9A] text-sm">{date}</p>

        <button className="mt-5 h-[34px] px-4 text-sm rounded-md border border-primary text-primary font-medium hover:bg-[#F7F7F7] transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default InsightCard;
