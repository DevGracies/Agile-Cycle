import { Pagination } from "./api";
import { Enhancement } from "./product";

export interface GetEnhancementResponse {
  success: boolean;
  enhancements: Enhancement[];
  pagination: Pagination;
}