import { Response } from "express";
import { getFeaturedProductsService } from "../services/featured-products";
import { asyncHandler } from "../utils/asyncHandler";

export const getFeaturedProducts = asyncHandler(
    async(req, res: Response) => {
        const products = await getFeaturedProductsService(req.query);

        return res.status(200).json({
            success: true,
            message: "All Home products fetched successfully",
            data: products,
        })
    }
)