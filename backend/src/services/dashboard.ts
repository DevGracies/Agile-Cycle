import { Accessory } from "../models/accessories";
import { Ebike } from "../models/ebike";
import { Enhancement } from "../models/enhancement";
import { ProductQuery } from "../types/ebike";
import { AppError } from "../utils/AppError";


const withProductType = (
    product: any,
    productType:
        | "ebikes"
        | "accessories"
        | "enhancements"
) => {

    return {
        ...product,
        productType,
    };

};

export const getProductService = async (id: string) => {
    const product =
        (await Ebike.findById(id).lean()) ??
        (await Accessory.findById(id).lean()) ??
        (await Enhancement.findById(id).lean());

    if (!product) {
        throw new AppError("Product not found", 404);
    }

    return product;
};

export const getProductsInStockService = async () => {
    const [ebikes, accessories, enhancements] = await Promise.all([
        Ebike.countDocuments({ stock: { $gt: 0 } }),
        Accessory.countDocuments({ stock: { $gt: 0 } }),
        Enhancement.countDocuments({ stock: { $gt: 0 } }),
    ])

    return {
        ebikes, 
        accessories,
        enhancements,
    };
};



export const getAllProductsService = async (
    query: ProductQuery
) => {


    const {
        page = "1",
        limit = "10",
    } = query;

    const pageNumber = Math.max(
        1,
        Number(page) || 1
    );
    const limitNumber = Math.max(
        1,
        Number(limit) || 10
    );

    //   Fetch everything first
    const [
        ebikes,
        accessories,
        enhancements
    ] = await Promise.all([
        Ebike.find({ isActive: true })
            .lean(),
        Accessory.find({ isActive: true })
            .lean(),
        Enhancement.find({ isActive: true })
            .lean(),

    ]);

    //   Add product type
    const products = [
        ...ebikes.map(
            product =>
                withProductType(
                    product,
                    "ebikes"
                )
        ),
        ...accessories.map(
            product =>
                withProductType(
                    product,
                    "accessories"
                )
        ),
        ...enhancements.map(
            product =>
                withProductType(
                    product,
                    "enhancements"
                )
        ),
    ];

    //   Sort newest first
    products.sort(
        (a, b) =>
            new Date(b.createdAt).getTime()
            -
            new Date(a.createdAt).getTime()
    );

    //   Pagination after merge
    const totalProducts = products.length;
    const start = (pageNumber - 1) * limitNumber;
    const paginatedProducts =
        products.slice(
            start,
            start + limitNumber
        );
    return {
        products:
            paginatedProducts,
        pagination: {
            page: pageNumber,
            limit: limitNumber,
            total: totalProducts,
            totalPages:
                Math.ceil(
                    totalProducts /
                    limitNumber
                )
        }
    };
};