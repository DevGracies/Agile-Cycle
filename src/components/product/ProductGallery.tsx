"use client";

import Image from "next/image";

import {
  useEffect,
  useState,
} from "react";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { Product } from "@/src/types/product";

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({
  product,
}: ProductGalleryProps) {
  const [selected, setSelected] =
    useState(0);

  useEffect(() => {
    setSelected(0);
  }, [product.id]);

  const images =
    product.images;

  const nextImage = () => {
    setSelected(
      (prev) =>
        (prev + 1) %
        images.length,
    );
  };

  const previousImage = () => {
    setSelected(
      (prev) =>
        prev === 0
          ? images.length - 1
          : prev - 1,
    );
  };

  return (
    <div>
      <div className="relative bg-[#d9d9d9] rounded-sm overflow-hidden w-full h-[500px]">
        <Image
          fill
          priority
          src={
            images[selected].url
          }
          alt={
            images[selected].alt
          }
          className="object-cover"
        />

        <button
          aria-label="Previous image"
          onClick={
            previousImage
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-primary flex items-center justify-center"
        >
          <ArrowBackRoundedIcon className="text-primary" />
        </button>

        <button
          aria-label="Next image"
          onClick={nextImage}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-primary flex items-center justify-center"
        >
          <ArrowForwardRoundedIcon className="text-primary" />
        </button>
      </div>

      <div className="flex mt-4 overflow-x-auto">
        {images.map(
          (
            image,
            index,
          ) => (
            <button
              key={image.id}
              onClick={() =>
                setSelected(
                  index,
                )
              }
              className={`relative w-[80px] h-[80px] md:min-w-[110px] md:h-[90px] border-2 ${
                selected ===
                index
                  ? "border-primary"
                  : "border-transparent"
              }`}
            >
              <Image
                fill
                src={
                  image.url
                }
                alt={
                  image.alt
                }
                className="object-cover"
              />
            </button>
          ),
        )}
      </div>
    </div>
  );
}