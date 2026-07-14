import { PRODUCT_MODELS } from ".";
import { Cart, CartDocument } from "../models/cart";

export async function getOrCreateCart(userId: string) {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = await Cart.create({
            userId,
            items: [],
        });
    }

    return cart;
}

export async function populateCartItems(cart: CartDocument) {
    const populatePaths = cart.items.map((item, index) => ({
        path: `items.${index}.productId`,
        model: PRODUCT_MODELS[item.productType],
    }));

    if (populatePaths.length) {
        await Cart.populate(cart, populatePaths);
    }

    return cart;
}