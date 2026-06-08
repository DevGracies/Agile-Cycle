"use client";

import { useMemo, useState } from "react";
import { Product } from "@/src/types/product";

export const useProductPurchase = (
  product: Product,
) => {
  const [quantity, setQuantity] =
    useState(1);

  const [selectedColor, setSelectedColor] =
    useState<string | null>(
      product.colors?.[0]?.id ?? null,
    );

  const [selectedVariant, setSelectedVariant] =
    useState<string | null>(
      product.variants?.[0]?.id ?? null,
    );

  const [selectedBattery, setSelectedBattery] =
    useState<string | null>(
      product.batteryOptions?.[0]?.id ?? null,
    );

  const isOutOfStock =
    product.stock <= 0;

  const isLowStock =
    product.stock > 0 &&
    product.stock < 5;1

  const canAddToCart = useMemo(() => {
    return !isOutOfStock;
  }, [isOutOfStock]);

  const increaseQuantity = () => {
    setQuantity((prev) =>
      Math.min(prev + 1, product.stock),
    );
  };

  const decreaseQuantity = () => {
    setQuantity((prev) =>
      Math.max(1, prev - 1),
    );
  };

  const setMaxQuantity = () => {
    setQuantity(product.stock);
  };

  const reset = () => {
    setQuantity(1);
    setSelectedColor(
      product.colors?.[0]?.id ?? null,
    );
    setSelectedVariant(
      product.variants?.[0]?.id ?? null,
    );
    setSelectedBattery(
      product.batteryOptions?.[0]?.id ??
      null,
    );
  };

  const addToCart = async () => {
    if (!canAddToCart) return;

    // API READY PAYLOAD
    const payload = {
      productId: product.id,
      quantity,
      color: selectedColor,
      variant: selectedVariant,
      battery: selectedBattery,
    };

    console.log("ADD TO CART:", payload);

    // Future:
    // await cartService.add(payload)
  };

  return {
    quantity,
    selectedColor,
    selectedVariant,
    selectedBattery,

    setSelectedColor,
    setSelectedVariant,
    setSelectedBattery,

    increaseQuantity,
    decreaseQuantity,
    setMaxQuantity,

    addToCart,
    reset,

    isOutOfStock,
    isLowStock,
    canAddToCart,
  };
};