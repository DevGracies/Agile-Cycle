import { products } from "../mocks/index.mock";
import { Product, ProductCategory } from "../types";

class ProductService {
  async getProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  }

  async getProductsByCategory(
    category: ProductCategory,
  ): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          products.filter((item) => item.category === category),
        );
      }, 500);
    });
  }
}

export const productService = new ProductService();