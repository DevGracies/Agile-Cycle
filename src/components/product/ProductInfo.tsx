import RatingStars from "../shared/product/RatingStars";
import ProductVariants from "./ProductVariants";
import QuantitySelector from "./QuantitySelector";
import ProductActions from "./ProductActions";
import { Product } from "@/src/types/product";

import { useProductPurchase } from "@/src/hooks/useProductPurchase";

export default function ProductInfo({
  product,
}: {
  product: Product;
}) {
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

    isLowStock,
    isOutOfStock,
  } = useProductPurchase(product);

  return (
    <div>
      <h1 className="text-3xl font-bold">
        {product.name}
      </h1>

      <p className="text-[#7aac3d] mt-3 text-lg font-medium">
        {product.shortDescription}
      </p>

      {/* RATING */}
      <div className="flex items-center gap-4 mt-3">
        <RatingStars
          count={Math.floor(product.rating)}
        />
        <span className="font-semibold">
          {product.rating}/5
        </span>
        <span className="text-[#9a9a9a]">
          {product.reviewCount} Reviews
        </span>
      </div>

      {/* PRICE */}
      <div className="flex items-center gap-4 mt-6">
        <h2 className="text-2xl font-bold text-secondary">
          ₦
          {product.currentPrice.toLocaleString()}
        </h2>

        {product.originalPrice && (
          <span className="line-through text-[#b5b5b5]">
            ₦
            {product.originalPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* STOCK */}
      <div className="flex justify-between mt-3">
        <span
          className={`uppercase font-bold text-sm ${
            isOutOfStock
              ? "text-red-500"
              : isLowStock
              ? "text-yellow-500"
              : "text-primary"
          }`}
        >
          {isOutOfStock
            ? "Out of Stock"
            : isLowStock
            ? "Low Stock"
            : "In Stock"}
        </span>

        <span className="text-primary text-sm font-medium">
          Ship within 2 business days
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

      <div className="flex items-center gap-16">
        {/* QUANTITY */}
      <div className="flex items-center gap-4 mt-8">
        <p className="text-sm">Quantity</p>

        <QuantitySelector
          quantity={quantity}
          onIncrease={
            increaseQuantity
          }
          onDecrease={
            decreaseQuantity
          }
          max={product.stock}
        />
      </div>

      {/* ACTIONS */}
      <div className="mt-10 w-full">
        <ProductActions
          product={product}
          quantity={quantity}
        />
      </div>
      </div>
    </div>
  );
}