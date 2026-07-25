import { ProductType } from "../services/cart.service";

export const getProductTypeFromCategory = (
    category: string
): ProductType => {

    const categories = {

        ebikes: [
            "cruiser",
            "commuter",
            "cargo",
            "folding",
            "utility",
            "trikes"
        ],

        accessories: [
            "lights",
            "helmets",
            "carrier bags",
            "phone holders",
            "storage"
        ],

        enhancements: [
            "performance",
            "comfort",
            "safety",
            "technology",
            "style"
        ]

    };


    if (
        categories.ebikes.includes(category)
    )
        return "ebikes";


    if (
        categories.accessories.includes(category)
    )
        return "accessories";


    if (
        categories.enhancements.includes(category)
    )
        return "enhancements";


    return "ebikes";

};