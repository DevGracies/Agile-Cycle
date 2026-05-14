import { create } from "zustand";

export interface Customer {
  id: string;
  name: string;
  phone: string;
  qty: number;
  totalSpend: number;
  status: "active" | "inactive";
  email?: string;
  joinedDate?: string;
  primaryAddress?: string;
  secondaryAddress?: string | null;
  orderHistory?: CustomerOrderHistoryItem[];
  refundRequests?: number;
  lastRefund?: string;
  totalRefunded?: string;
  company?: string;
}

export interface CustomerOrderHistoryItem {
  id: string;
  product: string;
  qty: string;
  date: string;
  amount: string;
}

interface CustomerStore {
  selectedCustomer: Customer | null;
  isModalOpen: boolean;
  setSelectedCustomer: (customer: Customer | null) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const useCustomerStore = create<CustomerStore>((set) => ({
  selectedCustomer: null,
  isModalOpen: false,
  setSelectedCustomer: (customer) => set({ selectedCustomer: customer }),
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
}));
