"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { CartItem } from "@/src/types/cart";
import { Product } from "@/src/types/product";
import toast from "react-hot-toast";
import { cartService } from "@/src/services/cart.service";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // INIT CART
  useEffect(() => {
    const loadCart = async () => {
      const data = await cartService.getCart();
      setItems(data);
    };

    loadCart();
  }, []);

  // ADD TO CART
  const addToCart = async (product: Product, quantity: number = 1) => {
    try {
      const updated = await cartService.addToCart(product, quantity);

      setItems(updated);
      toast.success("Item added to cart");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to add item to cart";
      toast.error(errorMessage);
    }
  };

  // REMOVE
  const removeFromCart = async (productId: string) => {
    try {
      const updated = await cartService.removeFromCart(productId);

      setItems(updated);
      toast.success("Item removed from cart");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to remove item";
      toast.error(errorMessage);
    }
  };

  // UPDATE QTY
  const updateQuantity = async (productId: string, quantity: number) => {
    try {
      const updated = await cartService.updateQuantity(productId, quantity);

      setItems(updated);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to update quantity";
      toast.error(errorMessage);
    }
  };

  // CLEAR CART
  const clearCart = async () => {
    try {
      const updated = await cartService.clearCart();
      setItems(updated);
      toast.success("Cart cleared");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to clear cart";
      toast.error(errorMessage);
    }
  };

  const cartCount = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
