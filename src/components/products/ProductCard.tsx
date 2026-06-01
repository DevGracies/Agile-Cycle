// src/components/products/ProductCard.tsx
"use client";

import Image from "next/image";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: string;
  originalPrice: string;
  rating: string;
  specs: { label: string; value: string }[];
  onAddToCart?: (id: number) => void;
}

export default function ProductCard({
  id,
  name,
  image,
  price,
  originalPrice,
  rating,
  specs,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="bg-white border border-neutral-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-48 overflow-hidden bg-neutral-50 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={200}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div>
          <p className="font-roboto font-medium text-base text-green-primary mb-2">
            {name}
          </p>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-roboto font-semibold text-green-primary text-sm">
              {price}
            </span>
            <span className="font-roboto text-xs text-neutral-300 line-through">
              {originalPrice}
            </span>
            <div className="flex items-center gap-2 ml-auto">
              <div className="flex items-center gap-1">
                {/* star icons based on rating value (show 5 static stars for now) */}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#519A09"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.512L18.334 24 12 19.897 5.666 24l.666-8.888L.673 9.6l7.659-1.582L12 .587z" />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#519A09"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.512L18.334 24 12 19.897 5.666 24l.666-8.888L.673 9.6l7.659-1.582L12 .587z" />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#519A09"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.512L18.334 24 12 19.897 5.666 24l.666-8.888L.673 9.6l7.659-1.582L12 .587z" />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#519A09"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.512L18.334 24 12 19.897 5.666 24l.666-8.888L.673 9.6l7.659-1.582L12 .587z" />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#F6C94D"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.512L18.334 24 12 19.897 5.666 24l.666-8.888L.673 9.6l7.659-1.582L12 .587z" />
                </svg>
              </div>
              <span className="font-roboto text-xs text-green-primary">
                {rating}
              </span>
            </div>
          </div>
          <div className="space-y-2">
            {specs.map((spec) => (
              <div key={spec.label} className="flex justify-between">
                <span className="font-lexend text-xs text-neutral-400">
                  {spec.label}:
                </span>
                <span className="font-lexend text-xs text-green-primary">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => onAddToCart?.(id)}
          className="w-full h-10 rounded-lg border border-[#519A09] bg-white font-lexend font-medium text-sm text-[#519A09] hover:bg-[#519A09] hover:text-white transition-colors"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
