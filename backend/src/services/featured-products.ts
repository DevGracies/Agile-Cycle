import { Ebike } from "../models/ebike";
import { Accessory } from "../models/accessories";
import { Enhancement } from "../models/enhancement";

export const getHomeProducts = async () => {
    const [featuredEbikes, featuredAccessories, featuredEnhancements] = await Promise.all([
        Ebike.find().limit(6),
        Accessory.find().limit(6),
        Enhancement.find().limit(6),
    ]);

    // console.log("FeaturedEbikes", featuredEbikes)
    if (!featuredEbikes) return [];
    if (!featuredAccessories) return [];
    if (!featuredEnhancements) return [];

    return {
        ebikes: featuredEbikes,
        accessories: featuredAccessories,
        enhancements: featuredEnhancements,
    }
}
