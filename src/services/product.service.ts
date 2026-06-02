import { apiRequest } from "./api.service";
import { Product } from "@/src/types/product";
import { products as productMock } from "../mocks/product.mock";

const USE_MOCK = true;

let productsDb: Product[] = structuredClone(productMock);

export const productService = {
  getProducts(): Promise<Product[]> {
    return apiRequest<Product[]>({
      endpoint: "/products",
      mockData: productsDb,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  getProductById(id: string): Promise<Product> {
    const product = productsDb.find((item) => item.id === id);

    if (!product) {
      return apiRequest<Product>({
        endpoint: `/products/${id}`,
        mockData: (() => {
          throw new Error("Product not found");
        })(),
        useMock: USE_MOCK,
      });
    }

    return apiRequest<Product>({
      endpoint: `/products/${id}`,
      mockData: product,
      useMock: USE_MOCK,
      delay: 200,
    });
  },

  createProduct(payload: Omit<Product, "id">): Promise<Product> {
    const newProduct: Product = {
      id: crypto.randomUUID(),
      ...payload,
    };

    productsDb = [newProduct, ...productsDb];

    return apiRequest<Product>({
      endpoint: "/products",
      method: "POST",
      body: payload,
      mockData: newProduct,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  updateProduct(
    id: string,
    payload: Partial<Product>,
  ): Promise<Product> {
    const index = productsDb.findIndex((p) => p.id === id);

    if (index === -1) {
      return apiRequest<Product>({
        endpoint: `/products/${id}`,
        method: "PATCH",
        mockData: (() => {
          throw new Error("Product not found");
        })(),
        useMock: USE_MOCK,
      });
    }

    productsDb[index] = {
      ...productsDb[index],
      ...payload,
    };

    return apiRequest<Product>({
      endpoint: `/products/${id}`,
      method: "PATCH",
      body: payload,
      mockData: productsDb[index],
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  deleteProduct(id: string): Promise<{ success: boolean }> {
    const index = productsDb.findIndex((p) => p.id === id);

    if (index !== -1) {
      productsDb.splice(index, 1);
    }

    return apiRequest<{ success: boolean }>({
      endpoint: `/products/${id}`,
      method: "DELETE",
      mockData: { success: true },
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  searchProducts(query: string): Promise<Product[]> {
    const result = productsDb.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );

    return apiRequest<Product[]>({
      endpoint: `/products?search=${query}`,
      mockData: result,
      useMock: USE_MOCK,
      delay: 300,
    });
  },

  getProductsByCategory(category: string): Promise<Product[]> {
    const result = productsDb.filter(
      (p) => p.category === category,
    );

    return apiRequest<Product[]>({
      endpoint: `/products?category=${category}`,
      mockData: result,
      useMock: USE_MOCK,
      delay: 300,
    });
  },
};