import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getProduct } from "../services/dashboard.service";


export const useProducts = (
    page = 1,
    limit = 10
) => {

    return useQuery({
        queryKey:[
            "products",
            page,
            limit
        ],
        queryFn:()=> 
            getAllProducts({
                page,
                limit
            })
    });

};

export const useProduct = (id?: string) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getProduct(id!),
        enabled: !!id,
    });
};