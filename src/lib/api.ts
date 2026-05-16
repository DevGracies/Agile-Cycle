import axios from "axios";
import type { Customer } from "@/src/store/useCustomerStore";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// Automatically unwrap data from response
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(new Error(message));
  }
);

// ========== TYPES ==========
export interface CustomerSectionStat {
  value: string | number;
  change?: string;
}
export interface CustomerOverviewPoint {
  day: number;
  value: number;
}
export interface CustomerOverviewData {
  metrics: CustomerSectionStat[];
  thisWeekData: CustomerOverviewPoint[];
  lastWeekData: CustomerOverviewPoint[];
}
export interface CustomerSectionPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}
export interface CustomerSectionResponse {
  stats: CustomerSectionStat[];
  overview: CustomerOverviewData;
  customerNumbers: Array<{ id: string; qty: number; totalSpend: number }>;
  customers?: Customer[];
  pagination: CustomerSectionPagination;
}

// Account types
export interface User {
  id: string;
  full_name: string;
  email: string;
}
export interface Address {
  id: string;
  full_name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postal_code?: string;
  phone?: string;
  is_default?: boolean;
}
export interface Order {
  id: string;
  order_number: string;
  order_date: string;
  shipping_address?: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total_amount: number;
}
export interface CartItem {
  id: string;
  quantity: number;
}

// ========== CUSTOMER SECTION ==========
export const fetchCustomers = () => api.get<Customer[]>("/customers");
export const deleteCustomer = (customerId: string) =>
  api.delete(`/customers/${encodeURIComponent(customerId)}`);
export const createCustomer = (payload: Partial<Customer>) =>
  api.post<Customer>("/customers", payload);
export const updateCustomer = (customerId: string, payload: Partial<Customer>) =>
  api.put<Customer>(`/customers/${encodeURIComponent(customerId)}`, payload);
export const sendCustomerEmail = (customerId: string, payload?: { subject?: string; body?: string; to?: string }) =>
  api.post(`/customers/${encodeURIComponent(customerId)}/send-email`, payload || {});
export const fetchCustomerSection = (page = 1, limit = 10) =>
  api.get<CustomerSectionResponse>(`/customer-section?page=${page}&limit=${limit}`);

// ========== ACCOUNT SECTION ==========
export const fetchUser = () => api.get<User>("/user/me");
export const fetchAddresses = () => api.get<Address[]>("/addresses");
export const fetchOrders = () => api.get<Order[]>("/orders");
export const fetchCart = () => api.get<CartItem[]>("/cart");
export const logout = () => api.post("/auth/logout");
export const subscribeNewsletter = (email: string) =>
  api.post("/newsletter/subscribe", { email });

// ========== ADDRESS MANAGEMENT ==========
export const setDefaultAddress = (addressId: string) =>
  api.patch(`/addresses/${addressId}/default`);

export const deleteAddress = (addressId: string) =>
  api.delete(`/addresses/${addressId}`);