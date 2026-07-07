import { Pagination } from "./api";
import { Accessories, Ebike, Enhancement} from "./product";

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface FilterOption {
  id: string;
  label: string;
}

export interface SidebarFilters {
  name: string;
  categories: Category[];
  availability: FilterOption[];
  products: FilterOption[];
  price: {
    min: number;
    max: number;
  };
}

export interface GetEbikesResponse {
  success: boolean;
  ebikes: Ebike[];
  pagination: Pagination;
}

export interface GetEbikeResponse {
    ebike: Ebike,
    compatibleAccessories: Accessories[],
    compatibleEnhancements: Enhancement[],
    // review: number,
}

export interface Filters {
  page?: number;
  limit?: number;
  category?: number;
  search?: number;
  featured?: number;
  newArrival?: number;
  inventoryStatus?: number;
  minPrice?: number;
  maxPrice?: number;
  sort?: number;
}