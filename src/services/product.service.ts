import { Product } from "@/src/types/product";
import { products } from "../mocks/product.mock";

class ProductService {
  async getProducts(): Promise<Product[]> {
    return products;
  }

  async getProductById(
    id: string,
  ): Promise<Product> {
    const product = products.find(
      (item) => item.id === id,
    );

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  }

  async getRelatedProducts(
    currentId: string,
  ): Promise<Product[]> {
    return products
      .filter((p) => p.id !== currentId)
      .slice(0, 4);
  }
}

export const productService =
  new ProductService();