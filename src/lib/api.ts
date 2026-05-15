import type { Customer } from "@/src/store/useCustomerStore";

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
  customerNumbers: Array<{
    id: string;
    qty: number;
    totalSpend: number;
  }>;
  // Optional full customer records if backend provides them
  customers?: Customer[];
  pagination: CustomerSectionPagination;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function requestJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    ...init,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with status ${response.status}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export function fetchCustomers() {
  return requestJson<Customer[]>("/customers");
}

export function deleteCustomer(customerId: string) {
  return requestJson<void>(`/customers/${encodeURIComponent(customerId)}`, {
    method: "DELETE",
  });
}

export function createCustomer(payload: Partial<Customer>) {
  return requestJson<Customer>(`/customers`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function updateCustomer(customerId: string, payload: Partial<Customer>) {
  return requestJson<Customer>(`/customers/${encodeURIComponent(customerId)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export function sendCustomerEmail(
  customerId: string,
  payload?: { subject?: string; body?: string; to?: string },
) {
  return requestJson<void>(
    `/customers/${encodeURIComponent(customerId)}/send-email`,
    {
      method: "POST",
      body: JSON.stringify(payload || {}),
    },
  );
}

export function fetchCustomerSection(page = 1, limit = 10) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  return requestJson<CustomerSectionResponse>(
    `/customer-section?${params.toString()}`,
  );
}
