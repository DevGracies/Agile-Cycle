// src/store/useProductStore.ts
import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating?: string;
  specs: { label: string; value: string }[];
}

interface ProductStore {
  recentlyViewed: Product[];
  setRecentlyViewed: (products: Product[]) => void;
  fetchRecentlyViewed: () => Promise<void>;
}

const MOCK_RECENTLY_VIEWED: Product[] = [
  {
    id: 1,
    name: "Agile Comet X",
    image: "/images/Frame-1321314944@2x.png",
    price: "N150,000",
    originalPrice: "N263,000",
    rating: "4.9 (91)",
    specs: [
      { label: "Range", value: "65 miles" },
      { label: "Material", value: "Steel" },
      { label: "Weight", value: "26.7 kg" },
    ],
  },
  {
    id: 2,
    name: "Agile Comet X",
    image: "/images/Frame-1321314944@2x.png",
    price: "N150,000",
    originalPrice: "N263,000",
    rating: "4.9 (91)",
    specs: [
      { label: "Range", value: "65 miles" },
      { label: "Material", value: "Steel" },
      { label: "Weight", value: "26.7 kg" },
    ],
  },
  {
    id: 3,
    name: "Ebike Hitch Rack",
    image: "/images/image3@2x.png",
    price: "N73,000",
    rating: "4.8 (91)",
    specs: [
      { label: "Range", value: "65 miles" },
      { label: "Material", value: "Steel" },
      { label: "Weight", value: "26.7 kg" },
    ],
  },
  {
    id: 4,
    name: "Hunter Light",
    image: "/accessories/accessory4.png",
    price: "N73,000",
    rating: "4.8 (91)",
    specs: [
      { label: "Range", value: "65 miles" },
      { label: "Material", value: "Steel" },
      { label: "Weight", value: "25.7 kg" },
    ],
  },
];

export const useProductStore = create<ProductStore>((set) => ({
  recentlyViewed: [],
  setRecentlyViewed: (products) => set({ recentlyViewed: products }),
  fetchRecentlyViewed: async () => {
    try {
      // Replace with real API call when ready
      // const data = await api.get("/recently-viewed");
      // set({ recentlyViewed: data });
      set({ recentlyViewed: MOCK_RECENTLY_VIEWED });
    } catch {
      console.warn("Using mock recently viewed data");
      set({ recentlyViewed: MOCK_RECENTLY_VIEWED });
    }
  },
}));
