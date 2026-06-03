import { Product, ProductImage } from "./product";

export interface ReviewProduct extends Product {
  id: string;
  name: string;
  images: ProductImage[];
  rating: number;
}

export interface UploadedMedia {
  id: string;
  file: File;
  preview: string;
  type: "image" | "video";
}

export interface Review {
  id: string;
  productId: string;
  title: string;
  description: string;
  name: string;
  email: string;

  speedPerformance: number;
  rideComfortability: number;
  buildQuality: number;

  media: UploadedMedia[];
}
