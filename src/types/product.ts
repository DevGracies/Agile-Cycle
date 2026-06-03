
// export interface Product {
//   id: string;
//   name: string;
//   image: any;
//   price: number;
//   oldPrice: number;
//   range: string;
//   material: string;
//   weight: string;
//   torque: string;
//   motor: string;
//   battery: string;
//   rating: number;
// }
export interface Accessories {
  id: string;
  name: string;
  price: number;
  image: any;
  rating: number;
}
export interface Enhancements {
  id: string;
  name: string;
  price: number;
  image: any;
  rating: number;
}

export type ProductCategory =
  | "bike"
  | "accessory"
  | "enhancement";

export interface ProductSpecs {
  range?: string;
  material?: string;
  weight?: string;
  torque?: string;
  motor?: string;
  battery?: string;
  size? :string;
  color?: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount?: number;
  category?: ProductCategory;
  badge?: string;
  specs?: ProductSpecs;
  quantity?: number;
}