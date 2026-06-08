import { Product } from "@/src/types/product";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedBattery?: string;
  selectedVariantId?: string;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string } // productId
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR_CART" };