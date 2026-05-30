"use client";

import { useEffect, useState } from "react";
import { productService } from "@/src/services/product.service";
import {
    Product,
    ProductCategory,
} from "@/src/types/product";

interface UseProductsOptions {
    category?: ProductCategory;
}

export const useProducts = (
    options?: UseProductsOptions,
) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);

                const data = options?.category
                    ? await productService.getProductsByCategory(options.category,)
                    : await productService.getProducts();
                setProducts(data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [options?.category]);

    return {
        products,
        loading,
        error,
    };
};