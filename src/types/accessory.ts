import { Pagination } from "./api";
import { Accessories } from "./product";

export interface GetAccessoryResponse {
  success: boolean;
  accessories: Accessories[];
  pagination: Pagination;
}