export type ProductCategory =
  | "bike"
  | "accessory"
  | "enhancement";

export type InventoryStatus =
  | "in-stock"
  | "low-stock"
  | "out-of-stock";

export interface ProductImage {
  public_id?: string;
  secure_url: string;
}

export interface ProductColor {
  name: string;
  color: string;
}

export interface ProductFeatureSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  specs?: ProductFeatureSpec[];
}

export interface ProductVariant {
  name: string;
  image: string;
  description: string;
}

export interface BatteryOption {
  label: string;
}

export interface Ebike {
  _id: string;
  name: string;

  description: string;
  shortDescription: string;
  category: string;

  images: ProductImage[];

  price: number;
  discountPrice?: number;

  stock: number;

  inventoryStatus: string;

  averageRating: number;
  reviewCount: number;

  badge?: string;

  isFeatured: boolean;
  isNewArrival: boolean;

  specs?: Record<string, string>;

  colors: ProductColor[];

  batteryOptions?: BatteryOption[];

  variants?: ProductVariant[];

  features?: ProductFeature[];

  shippingDuration?: string;

  isActive: boolean;
}



// export interface Accessories {
//   _id: string;
//   name: string;
//   description?: string;
//   currentPrice: number;
//   originalPrice?: number;
//   rating: number;
//   reviewCount: number;
//   stock: number;
//   shippingDuration?: string;
//   images: ProductImage[];
//   compatibleModels?: CompatibleModel[];
//   compatibilityTable?: ProductCompatibility[];
//   features: ProductFeature[];
//   packageContents?: string[];
//   note?: string;
// }

export interface Accessories {
  _id: string;
  name: string;

  description: string;
  shortDescription: string;
  category: string;

  images: ProductImage[];

  price: number;
  discountPrice?: number;

  shippingDuration?: string;
  stock: number;

  inventoryStatus: string;

  averageRating: number;
  reviewCount: number;

  badge?: string;

  isFeatured: boolean;
  isNewArrival: boolean;

  colors: ProductColor[];

  compatibleModels: Ebike[];

  features?: ProductFeature[];

  isActive: boolean;
}

export interface Enhancement {
  _id: string;
  name: string;

  description: string;
  shortDescription: string;
  category: string;
  images: ProductImage[];

  price: number;
  discountPrice?: number;

  shippingDuration?: string;
  stock: number;

  inventoryStatus: string;

  averageRating: number;
  reviewCount: number;

  badge?: string;

  isFeatured: boolean;
  isNewArrival: boolean;

  colors: ProductColor[];

  compatibleModels: Ebike[];

  features?: ProductFeature[];

  isActive: boolean;
}

export type Product = Ebike | Accessories | Enhancement;

export interface CompatibleModel {
  id: string;
  name: string;
  selected?: boolean;
}
