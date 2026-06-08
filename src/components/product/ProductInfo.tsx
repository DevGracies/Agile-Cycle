import RatingStars from "../shared/product/RatingStars";
import ProductVariants from "./ProductVariants";
import QuantitySelector from "./QuantitySelector";
import ProductActions from "./ProductActions";
import { Product } from "@/src/types/product";

import { useProductPurchase } from "@/src/hooks/useProductPurchase";
import { getStockStatus } from "@/src/utils/product";
import { ChevronRight } from "lucide-react";

export default function ProductInfo({ product }: { product: Product }) {
  const {
    quantity,
    selectedColor,
    selectedBattery,
    selectedVariant,

    setSelectedColor,
    setSelectedBattery,
    setSelectedVariant,

    increaseQuantity,
    decreaseQuantity,
  } = useProductPurchase(product);

  const stockStatus = getStockStatus(product.stock);

  const stockDisplay = () => {
    if (stockStatus === "low-stock") {
      return "In stock";
    } else if (stockStatus === "out-of-stock") {
      return "Out of stock";
    } else return "In stock";
  };
  const stockColor = () => {
    if (stockStatus === "low-stock") {
      return "text-yellow-500";
    } else if (stockStatus === "out-of-stock") {
      return "text-red-500";
    } else return "text-primary";
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <p className="text-[#7aac3d] mt-3 text-lg font-medium">
        {product.shortDescription}
      </p>

      {/* RATING */}
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

      {/* PRICE */}
      <div className="flex items-center gap-4 mt-6">
        <h2 className="text-2xl font-bold text-secondary">
          ₦{product.currentPrice.toLocaleString()}
        </h2>

        {product.originalPrice && (
          <span className="line-through text-primary/70">
            ₦{product.originalPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* STOCK */}
      <div className="flex justify-between mt-3">
        <span className={`uppercase font-bold text-sm ${stockColor()}`}>
          {stockDisplay()}
        </span>

        <span className="text-primary text-sm font-medium">
          Ship within {product.shippingDuration ?? 2} business days
        </span>
      </div>

      {/* VARIANTS */}
      <div className="mt-8">
        <ProductVariants
          product={product}
          selectedColor={selectedColor}
          selectedBattery={selectedBattery}
          selectedVariant={selectedVariant}
          onSelectColor={setSelectedColor}
          onSelectBattery={setSelectedBattery}
          onSelectedVariant={setSelectedVariant}
        />
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center mt-10">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">Quantity</span>
          <QuantitySelector
            quantity={quantity}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            max={product.stock}
          />
        </div>
        <div className="w-full">
          <ProductActions product={product} quantity={quantity} />
        </div>
      </div>
    </div>
  );
}
