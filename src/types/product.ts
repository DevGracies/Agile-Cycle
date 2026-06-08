export type ProductCategory =
  | "bike"
  | "accessory"
  | "enhancement";

export type ProductAvailability =
  | "in-stock"
  | "low-stock"
  | "out-of-stock";

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface ProductColor {
  id: string;
  name: string;
  value: string;
}

export interface ProductBatteryOption {
  id: string;
  label: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface ProductFeatureSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  specs?: ProductFeatureSpec[];
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
  verifiedPurchase: boolean;
}

export interface ProductAccessory {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface ProductSpecs {
  range?: string;
  material?: string;
  weight?: string;
  torque?: string;
  motor?: string;
  batterySize?: string;
  batteryAh?: string;
  extraBatteryAh?: string;
  size?: string;
  color?: string;
  maxSpeed?: string;
  chargingTime?: string;
}

export interface Product {
  id: string;
  slug: string;
  sku: string;

  name: string;
  description: string;
  shortDescription: string;

  category: ProductCategory;

  images: ProductImage[];

  currentPrice: number;
  originalPrice?: number;
  shippingDuration?: string;

  stock: number;

  rating: number;
  reviewCount: number;

  badge?: string;

  isFeatured: boolean;
  isNewArrival: boolean;

  specs?: ProductSpecs;

  colors: ProductColor[];

  batteryOptions?: ProductBatteryOption[];

  variants?: ProductVariant[];

  accessories?: ProductAccessory[];

  features?: ProductFeature[];

  reviews?: ProductReview[];

  compatibleModels?: CompatibleModel[];
  compatibilityTable?: ProductCompatibility[];
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