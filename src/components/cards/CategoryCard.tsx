"use client";
import Image from "next/image";
import type { ImageProps } from "next/image";

interface Props {
  title: string;
  description: string;
  image: ImageProps["src"];
  large?: boolean;
}

const CategoryCard = ({ title, description, image, large }: Props) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl min-h-[320px] ${
        large ? "md:col-span-3" : ""
      }`}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark overlay (hover effect) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent group-hover:bg-black/60 transition-colors duration-500" />

      {/* Hover Button */}
      <button
        className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 translate-y-10
          opacity-0
          group-hover:translate-y-0
          group-hover:opacity-100
          transition-all duration-500
          bg-white text-[#01430D] px-5 py-2 rounded-lg font-bold
          shadow-lg cursor-pointer z-50
        "
      >
        Shop Now
      </button>

      {/* Content */}
      <div className="absolute bottom-0 p-6 text-white z-10 w-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-orange-400" />
          <span className="font-medium">{title}</span>
        </div>

        <p className="text-sm leading-6 text-gray-200 max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;