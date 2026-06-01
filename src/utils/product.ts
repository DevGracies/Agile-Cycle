import { Product } from "@/src/types/product";

export const calculateDiscountPercentage = (
  currentPrice: number,
  originalPrice?: number,
): number => {
  if (!originalPrice) return 0;

  return Math.round(
    ((originalPrice - currentPrice) / originalPrice) * 100,
  );
};

export const getAvailabilityStatus = (
  stock: number,
): Product["availabilityStatus"] => {
  if (stock <= 0) {
    return "out-of-stock";
  }

  if (stock < 5) {
    return "low-stock";
  }

  return "in-stock";
};

export const formatPrice = (
  amount: number,
): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(amount);
};

export function getProductImage(product: Product): string {
  // Case 1: new structured images
  if (Array.isArray(product.images) && product.images.length > 0) {
    return product.images[0]?.url || "/fallback.png";
  }

  // Case 2: legacy single image string
  if ((product as any).image && typeof (product as any).image === "string") {
    return (product as any).image;
  }

  return "/fallback.png";
}