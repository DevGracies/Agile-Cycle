"use client";

import React, { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { Accessories } from "@/src/types/product";
import { formatPrice, getStockStatus } from "@/src/utils/product";
import QuantitySelector from "../ebikes/ebike-details/QuantitySelector";
import RatingStars from "../shared/product/RatingStars";
import ProductActions from "../ebikes/ebike-details/ProductActions";

interface ProductInformationProps {
  product: Accessories;
}

const ProductInformation = ({ product }: ProductInformationProps) => {
  const [selectedModel, setSelectedModel] = useState(
    product?.compatibleModels?.[0]?.id || "",
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) return;

  const stockStatus = getStockStatus(product.stock); console.log(product.stock)

  const stockDisplay = () => {
    if (stockStatus === "low-stock") {
      return "Low stock";
    } else if (stockStatus === "out-of-stock") {
      return "Out of stock";
    } else return "In stock";
  };
  const stockColor = () => {
    if (stockStatus === "low-stock") {
      return "yellow-500";
    } else if (stockStatus === "out-of-stock") {
      return "red-500";
    } else return "primary";
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">
          {product.name}
        </h1>

        <div className="flex items-center gap-4 mt-3">
          <RatingStars count={Math.floor(product.rating)} />
          <span className="font-semibold">{product.rating}/5</span>
          <ChevronRight className="text-gray-400 size-4" />
          <span className="text-[#9a9a9a]">
            <span className="font-semibold text-gray-800">
              {product.reviewCount}
            </span>{" "}
            Reviews
          </span>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-secondary">
            {formatPrice(product.currentPrice)}
          </h2>
        </div>

        <div className="flex justify-between items-center">
          <p
            className={`flex items-center gap-2 mt-2 text-sm font-semibold uppercase text-${stockColor()}`}
          >
            <span className={`w-1 h-1 rounded-full bg-${stockColor()} border`} />{" "}
            {stockDisplay()}
          </p>
          <p className="text-sm text-primary">
            Ship within {product?.shippingDuration} business days
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wide text-secondary">
          Suitable For
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {product?.compatibleModels?.map((model) => {
            const isSelected = selectedModel === model.id;

            return (
              <button
                key={model.id}
                type="button"
                onClick={() => setSelectedModel(model.id)}
                className={`flex items-center justify-between rounded-lg border shadow-sm px-4 py-3 cursor-pointer text-left text-sm font-medium transition duration-200 ${
                  isSelected
                    ? "border-primary bg-green-50 text-primary"
                    : "border-gray-200 bg-white text-gray-700 hover:border-primary/80"
                }`}
              >
                <span>{model.name}</span>

                {isSelected && <Check size={18} />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">Quantity</span>

          <QuantitySelector
            quantity={quantity}
            onIncrease={() => setQuantity((prev) => prev + 1)}
            onDecrease={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          />
        </div>

        <div className="w-full">
          <ProductActions product={product} quantity={quantity} />
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
