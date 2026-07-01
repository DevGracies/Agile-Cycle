import { Accessories, Ebike, Enhancement } from "../types/product";
import { apiRequest } from "./api.service";
import { CartItem } from "@/src/types/cart";

type CartType = Ebike | Accessories | Enhancement;

const USE_MOCK = false;

let cartDB: CartItem[] = [];

export const cartService = {
  // GET CART
  getCart(): Promise<CartItem[]> {
    return apiRequest<CartItem[]>({
      endpoint: "/cart",
      mockData: cartDB,
      useMock: USE_MOCK,
      delay: 200,
    });
  },

  // ADD TO CART
  addToCart(product: CartType, quantity: number = 1): Promise<CartItem[]> {
    const existing = cartDB.find(
      (item) => item.product._id === product._id,
    );

    if (existing) {
      cartDB = cartDB.map((item) =>
        item.product._id === product._id
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item,
      );
    } else {
      cartDB = [
        ...cartDB,
        {
          product,
          quantity,
        },
      ];
    }

    return apiRequest<CartItem[]>({
      endpoint: "/cart/add",
      method: "POST",
      body: { product, quantity },
      mockData: cartDB,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  // REMOVE FROM CART
  removeFromCart(productId: string): Promise<CartItem[]> {
    cartDB = cartDB.filter(
      (item) => item.product._id !== productId,
    );

    return apiRequest<CartItem[]>({
      endpoint: `/cart/${productId}`,
      method: "DELETE",
      mockData: cartDB,
      useMock: USE_MOCK,
      delay: 200,
    });
  },

  // UPDATE QUANTITY
  updateQuantity(
    productId: string,
    quantity: number,
  ): Promise<CartItem[]> {
    cartDB = cartDB.map((item) =>
      item.product._id === productId
        ? {
            ...item,
            quantity: Math.max(1, quantity),
          }
        : item,
    );

    return apiRequest<CartItem[]>({
      endpoint: `/cart/${productId}`,
      method: "PATCH",
      body: { quantity },
      mockData: cartDB,
      useMock: USE_MOCK,
      delay: 200,
    });
  },

  // CLEAR CART
  clearCart(): Promise<CartItem[]> {
    cartDB = [];

    return apiRequest<CartItem[]>({
      endpoint: "/cart/clear",
      method: "DELETE",
      mockData: [],
      useMock: USE_MOCK,
      delay: 200,
    });
  },
};