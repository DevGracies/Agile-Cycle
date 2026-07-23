import { ProductType } from "@/backend/src/models/cart";
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

export interface CategoryCount {

 _id:string;

 count:number;

}

export interface GetEbikesResponse {
  success: boolean;
  message?: string;

  ebikes: Ebike[];

  total: number;
  page: number;
  limit: number;
  totalPages: number;
  categoryCounts: CategoryCount[];
}


export interface GetEbikeResponse {
    ebike: Ebike,
    compatibleAccessories: Accessories[],
    compatibleEnhancements: Enhancement[],
    // review: number,
}

// export interface Filters {
//   page?: number;
//   limit?: number;
//   totalPages?: number;
//   total?: number;
//   category?: number;
//   search?: number;
//   featured?: number;
//   newArrival?: number;
//   inventoryStatus?: number;
//   minPrice?: number;
//   maxPrice?: number;
//   sort?: number;
// }

export interface ProductFilters {
  productType?: ProductType;
  page?: number;
  limit?: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inventoryStatus?:
    | "in-stock"
    | "out-of-stock"
    | "";
  featured?: string;
  newArrival?: string;
  search?: string;
  sort?:
    | "newest"
    | "price-asc"
    | "price-desc"
    | "rating";
}


// export type ProductType =
//   | "ebike"
//   | "accessory"
//   | "enhancement";

// export type ProductAvailability =
//   | "IN_STOCK"
//   | "OUT_OF_STOCK";

// export interface PriceRange {
//   min: number;
//   max: number;
// }

// export interface ProductFilters {
//   /**
//    * Selected product types.
//    * Example:
//    * ["ebike"]
//    * ["ebike", "accessory"]
//    */
//   productTypes: ProductType[];

//   /**
//    * Selected category ids/slugs.
//    */
//   categories: string[];

//   /**
//    * Selected availability.
//    */
//   availability: ProductAvailability[];

//   /**
//    * Selected price range.
//    */
//   price: PriceRange;

//   /**
//    * Pagination
//    */
//   page: number;
//   limit: number;
// }

// export interface ProductFilterResponse {
//   page: number;
//   limit: number;
//   total: number;
//   totalPages: number;
// }

// export interface SidebarCategory {
//   id: string;
//   name: string;
//   count: number;
// }

// export interface SidebarAvailability {
//   id: ProductAvailability;
//   label: string;
// }

// export interface SidebarProductType {
//   id: ProductType;
//   label: string;
// }

// export interface SidebarFilters {
//   name: string;

//   categories: SidebarCategory[];

//   price: PriceRange;

//   availability: SidebarAvailability[];

//   products: SidebarProductType[];
// }