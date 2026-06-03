"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Product } from "@/src/types/product";
import { productService } from "@/src/services/product.service";
import toast from "react-hot-toast";

type LoadingState = {
  product: boolean;
  products: boolean;
};

export const useProduct = (
  productId?: string,
) => {

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<LoadingState>({
    product: true,
    products: true,
  });

  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const setLoadingState = useCallback(
    (key: keyof LoadingState, value: boolean) => {
      setLoading((prev) => ({ ...prev, [key]: value }));
    }, []);

    const fetchProducts = useCallback(async () => {
    try {
      setLoadingState("products", true);
      const data = await productService.getProducts();
      setProducts(data);
    } catch {
      setError("Failed to fetch products",);
      toast.error("Failed to load product");
    } finally {
      setLoadingState("products", false);
    }
  }, []);
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProduct = useCallback(async () => {
    try {
      setLoadingState("product", true);
      if (!productId) return;
      const data = await productService.getProductById(productId);
      setProduct(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load product");
      toast.error("Failed to load product");
    } finally {
      setLoadingState("product", false);
    }
  }, [productId, setLoadingState]);

  useEffect(() => {
    if (!productId) return;
    fetchProduct();
  }, [fetchProduct, productId]);


  const discountPercentage = useMemo(() => {
    if (
      !product?.originalPrice ||
      product.originalPrice <= product.currentPrice
    ) {
      return 0;
    }

    return Math.round(
      ((product.originalPrice -
        product.currentPrice) /
        product.originalPrice) *
      100,
    );
  }, [product]);

  return {
    product,
    products,
    loading,
    error,
    fetchProduct,
    fetchProducts,
    discountPercentage
  };
};