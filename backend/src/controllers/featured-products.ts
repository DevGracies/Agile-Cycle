import { Response } from "express";
import { getHomeProducts } from "../services/featured-products";
import { asyncHandler } from "../utils/asyncHandler";

export const getFeaturedProducts = asyncHandler(
    async(_, res: Response) => {
        const products = await getHomeProducts();

        return res.status(200).json({
            success: true,
            message: "All Home products fetched successfully",
            data: products,
        })
    }
)