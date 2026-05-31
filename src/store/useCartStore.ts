// src/store/useCartStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string;
  image: string;
  attributes: { label: string; value: string }[];
  price: number;
  originalPrice?: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clear: () => void;
}

const STORAGE_KEY = "agile_cycle_cart";

export const useCartStore = create<CartStore>()(
  devtools((set, get) => ({
    items: [],
    setItems: (items) => {
      set({ items });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {}
    },
    addItem: (item) => {
      const items = get().items.slice();
      const existing = items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity = existing.quantity + item.quantity;
      } else {
        items.push(item);
      }
      set({ items });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {}
    },
    removeItem: (id) => {
      const items = get().items.filter((i) => i.id !== id);
      set({ items });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {}
    },
    updateQuantity: (id, quantity) => {
      const items = get()
        .items.map((i) => (i.id === id ? { ...i, quantity } : i))
        .filter((i) => i.quantity > 0);
      set({ items });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {}
    },
    clear: () => {
      set({ items: [] });
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    },
  })),
);

// Hydrate from localStorage immediately (client-side)
if (typeof window !== "undefined") {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: CartItem[] = JSON.parse(raw);
      useCartStore.getState().setItems(parsed);
    }
  } catch (e) {
    // ignore
  }
}
