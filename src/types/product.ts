export type ProductCategory =
  | "bike"
  | "accessory"
  | "enhancement";

export type InventoryStatus =
  | "in-stock"
  | "low-stock"
  | "out-of-stock";

export interface ProductImage {
  url: string;
  alt: string;
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

export interface EbikeDocument {
  name: string;
  slug: string;
  sku: string;

  description: string;
  shortDescription: string;

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

  accessories: string[];

  features?: ProductFeature[];

  shippingDuration?: string;

  isActive: boolean;
}



export interface Accessories {
  id: string;
  name: string;
  description?: string;
  currentPrice: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  shippingDuration?: string;
  images: ProductImage[];
  compatibleModels?: CompatibleModel[];
  compatibilityTable?: ProductCompatibility[];
  features: ProductFeature[];
  packageContents?: string[];
  note?: string;
}

export interface CompatibleModel {
  id: string;
  name: string;
  selected?: boolean;
}

export interface ProductCompatibility {
  id: string;
  image: string;
  bikeName: string;
  model: string;
  wheelSize: string;
}