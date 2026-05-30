"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery } from "@/src/lib/product";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSelected
  //   }, 2000)
  // }, [selected])

  const handleNext = () => {
    if (selected !== gallery.length - 1) {
      setSelected((prev) => Math.min(gallery.length - 1, prev + 1));
    } else {
      setSelected(0);
    }
  };
  const handlePrev = () => {
    if (selected !== 0) {
      setSelected((prev) => Math.max(0, prev - 1));
    } else {
      setSelected(gallery.length - 1);
    }
  };

  return (
    <div>
      <div className="relative bg-[#d9d9d9] rounded-sm overflow-hidden w-full h-[500px]">
        <Image
          src={gallery[selected]}
          alt="Bike"
          fill
          className="object-cover"
        />

        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#82b93c] flex items-center justify-center"
        >
          <ArrowBackRoundedIcon className="text-[#82b93c]" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#82b93c] flex items-center justify-center"
        >
          <ArrowForwardRoundedIcon className="text-[#82b93c]" />
        </button>
      </div>

      <div className="flex mt-4 overflow-x-auto">
        {gallery.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`relative w-[80px] h-[80px] md:min-w-[110px] md:h-[90px] border-2 ${
              selected === i ? "border-[#82b93c]" : "border-transparent"
            }`}
          >
            <Image src={item} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
