"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
  useCallback,
} from "react";

import toast from "react-hot-toast";

import {
  Cart,
  ProductType,
  cartApi,
} from "@/src/services/cart.service";


interface CartContextType {
  cart: Cart | null;

  addToCart: (
    productId: string,
    productType: ProductType,
    quantity: number
  ) => Promise<void>;

  removeFromCart: (
    productId: string,
    productType: ProductType
  ) => Promise<void>;

  updateQuantity: (
    productId: string,
    productType: ProductType,
    quantity: number
  ) => Promise<void>;

  clearCart: () => Promise<void>;
  fetchCart: () => Promise<void>;
  cartCount: number;
}


const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<Cart | null>(null);

  //  Fetch current user cart
  const fetchCart = useCallback(async () => {
    try {
      const response = await cartApi.getCart();
      setCart(response.data ?? null);
    } catch (error) {

      console.error(
        "Failed to fetch cart:",
        error
      );
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  //  Add product to cart
  const addToCart = useCallback(async (
    productId: string,
    productType: ProductType,
    quantity: number
  ) => {
    try {
      const response =
        await cartApi.addToCart({
          productId,
          productType,
          quantity,
        });

      setCart(response.data ?? null);
      const item = `${quantity > 1 ? "items" : "item"}`;
      toast.success(
        `${quantity} ${item} added to cart`
      );
    } catch (error) {
      toast.error("Failed to add item");
      if (error instanceof Error) {
        console.error(error.message)
      };
    }
  }, [])

  //  Remove item from cart
  const removeFromCart = useCallback(async (
    productId: string,
    productType: ProductType
  ) => {
    try {
      const response =
        await cartApi.removeFromCart(
          productId,
          productType
        );
      setCart(response.data ?? null);
      fetchCart()
      toast.success("Item removed from cart");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to remove item"
      );
    }
  }, [])

  //  Update cart item quantity
  const updateQuantity = useCallback(async (
    productId: string,
    productType: ProductType,
    quantity: number = 1
  ) => {
    try {
      const response =
        await cartApi.updateCartItem(
          productId,
          {
            productType,
            quantity,
          }
        );
      setCart(response.data ?? null);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to update quantity"
      );
    }
  }, [])

  // Empty cart
  const clearCart = useCallback(async () => {
    try {
      const response = await cartApi.clearCart();
      setCart(response.data ?? null);
      toast.success(
        "Cart cleared"
      );
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to clear cart"
      );

    }

  }, []);

  // Total quantity in cart
  const cartCount = useMemo(() => {
    if (!cart) {
      return 0;
    }
    return cart.items.reduce((total, item) =>
      total + item.quantity, 0);
  }, [cart]);

  const value = useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    fetchCart,
    cartCount,
  }), [cart, cartCount, fetchCart, removeFromCart, updateQuantity, clearCart, addToCart]
  );

  return (
    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }
  return context;

}