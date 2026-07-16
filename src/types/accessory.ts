import { Accessories } from "./product";

export interface GetAccessoryResponse {
  success: boolean;
  message?: string;

  accessories: Accessories[];

  total: number;
  page: number;
  limit: number;
  totalPages: number;
}