import { Accessories, Ebike, Enhancement, InventoryStatus } from "../types/product";

export const calculateDiscountPercentage = (
  currentPrice: number,
  originalPrice?: number,
): number => {
  if (!originalPrice) return 0;

  return Math.round(
    ((originalPrice - currentPrice) / originalPrice) * 100,
  );
};

export const getStockStatus = (
  stock: number,
): InventoryStatus => {
  if (stock <= 0) {
    return "out-of-stock";
  }

  if (stock > 0 && stock < 5) {
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
type Product = Ebike | Accessories | Enhancement;

export function getProductImage(product: Product): string {
  // Case 1: new structured images
  if (Array.isArray(product?.images) && product?.images.length > 0) {
    return product?.images[0]?.url || "/fallback.png";
  }

  // Case 2: legacy single image string
  if ((product as any)?.image && typeof (product as any)?.image === "string") {
    return (product as any)?.image;
  }

  return "/fallback.png";
}


export const ebikeImages = [
  "https://images.unsplash.com/photo-1624243519828-52a0f2c88af3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWJpa2VzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1649878938553-1eaac5c27375?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWJpa2VzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1620801082287-d1913a342dce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWJpa2VzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1625304664697-30a254733647?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1622598473264-81a98f1c7be5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1663091081411-e5e6005d1e13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWJpa2VzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1618987688327-dc0b28888fe4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWJpa2VzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1666360058702-a3aa07227c53?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1625090665951-b93cbcb2687f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1681261669206-c653789dc7bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1619678786641-23eb19f27924?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1663051065015-a4fe49978a69?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1665731734325-2849f05a619e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1627631498315-3116f6484188?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1585160442128-b2fa152f1dd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683134662524-623d1f1fd0e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1625643074778-0417bd8eaffd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1672860356563-d1ce9b67bfb6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1716934284271-aeed3290be00?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1668753541839-1eabceb39709?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1663054579058-3572f75e331b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1582743514780-b381c39ada9f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1731114103753-15883d8aa504?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1625090666757-3732b2357ddf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1716934283259-0cb2af116f0a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1672860354855-9ff508724dae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGViaWtlc3xlbnwwfHwwfHx8MA%3D%3D",

]