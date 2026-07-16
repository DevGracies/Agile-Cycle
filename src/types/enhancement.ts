import { Enhancement } from "./product";

export interface GetEnhancementResponse {
  success: boolean;
  message?: string;

  enhancements: Enhancement[];

  total: number;
  page: number;
  limit: number;
  totalPages: number;
}