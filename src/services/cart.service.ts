import { ApiResponse } from "../types/api";
import { api } from "./api.service";

export type ProductType = "ebikes" | "accessories" | "enhancements";


export interface CartItem {
  _id: string;
  productId: string;
  productType: ProductType;
  quantity: number;
}


export interface Cart {
  _id: string;
  userId: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
}

export interface AddToCartDto {
  productId: string;
  productType: ProductType;
  quantity: number;
}

export interface UpdateCartItemDto {
  productType: ProductType;
  quantity: number;
}

export const cartApi = {
  getCart: async (): Promise<ApiResponse<Cart>> => {
    const { data } = await api.get("/cart");
    return data;
  },

  addToCart: async (
    cartData: AddToCartDto
  ): Promise<ApiResponse<Cart>> => {
    const { data } = await api.post("/cart", cartData);
    return data;
  },

  updateCartItem: async (
    productId: string,
    cartData: UpdateCartItemDto
  ): Promise<ApiResponse<Cart>> => {
    const { data } = await api.put(`/cart/${productId}`, cartData);
    return data;
  },

  removeFromCart: async (
    productId: string,
    productType: ProductType
  ): Promise<ApiResponse<Cart>> => {
    const { data } = await api.delete(`/cart/${productId}`, {
      data: { productType },
    });

    return data;
  },

  clearCart: async (): Promise<ApiResponse<Cart>> => {
    const { data } = await api.delete("/cart");
    return data;
  },
};


// type CartType = Ebike | Accessories | Enhancement;

// const USE_MOCK = false;

// let cartDB: CartItem[] = [];

// export const cartService = {
//   // GET CART
//   getCart(): Promise<CartItem[]> {
//     return apiRequest<CartItem[]>({
//       endpoint: "/cart",
//       mockData: cartDB,
//       useMock: USE_MOCK,
//       delay: 200,
//     });
//   },

//   // ADD TO CART
//   addToCart(product: CartType, quantity: number = 1): Promise<CartItem[]> {
//     const existing = cartDB.find(
//       (item) => item.product._id === product._id,
//     );

//     if (existing) {
//       cartDB = cartDB.map((item) =>
//         item.product._id === product._id
//           ? {
//             ...item,
//             quantity: item.quantity + quantity,
//           }
//           : item,
//       );
//     } else {
//       cartDB = [
//         ...cartDB,
//         {
//           product,
//           quantity,
//         },
//       ];
//     }

//     return apiRequest<CartItem[]>({
//       endpoint: "/cart/add",
//       method: "POST",
//       body: { product, quantity },
//       mockData: cartDB,
//       useMock: USE_MOCK,
//       delay: 300,
//     });
//   },

//   // REMOVE FROM CART
//   removeFromCart(productId: string): Promise<CartItem[]> {
//     cartDB = cartDB.filter(
//       (item) => item.product._id !== productId,
//     );

//     return apiRequest<CartItem[]>({
//       endpoint: `/cart/${productId}`,
//       method: "DELETE",
//       mockData: cartDB,
//       useMock: USE_MOCK,
//       delay: 200,
//     });
//   },

//   // UPDATE QUANTITY
//   updateQuantity(
//     productId: string,
//     quantity: number,
//   ): Promise<CartItem[]> {
//     cartDB = cartDB.map((item) =>
//       item.product._id === productId
//         ? {
//           ...item,
//           quantity: Math.max(1, quantity),
//         }
//         : item,
//     );

//     return apiRequest<CartItem[]>({
//       endpoint: `/cart/${productId}`,
//       method: "PATCH",
//       body: { quantity },
//       mockData: cartDB,
//       useMock: USE_MOCK,
//       delay: 200,
//     });
//   },

//   // CLEAR CART
//   clearCart(): Promise<CartItem[]> {
//     cartDB = [];

//     return apiRequest<CartItem[]>({
//       endpoint: "/cart/clear",
//       method: "DELETE",
//       mockData: [],
//       useMock: USE_MOCK,
//       delay: 200,
//     });
//   },
// };

