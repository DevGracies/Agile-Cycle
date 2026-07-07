import { useEffect, useState } from "react";
import { api } from "../services/api.service";
import { Accessories, Ebike, Enhancement } from "../types/product";

interface FeaturedProductsResponse {
    success: string,
    message: string,
    data: {
        ebikes: Ebike[],
        accessories: Accessories[],
        enhancements: Enhancement[],
    }
}
export const getFeaturedProducts = async (): Promise<FeaturedProductsResponse> => {
    const { data } = await api.get("/featured-products");

    return data;
}

export const useFeaturedProducts = () => {
    const [ebikes, setEbikes] = useState<Ebike[]>([]);
    const [accessories, setAccessories] = useState<Accessories[]>([]);
    const [enhancements, setEnhancements] = useState<Enhancement[]>([]);

    const fetchFeaturedProducts = async () => {
        try {
            const { data } = await getFeaturedProducts();
            setEbikes(data.ebikes);
            setAccessories(data.accessories);
            setEnhancements(data.enhancements);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    useEffect(() => {
        fetchFeaturedProducts()
    }, [])

    // console.log("Ebikes", ebikes)
    // console.log("Accessories", accessories)
    // console.log("Enhancements", enhancements)

    return {
        ebikes,
        accessories,
        enhancements
    }
}