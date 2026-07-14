import { Response } from "express";
import { Types } from "mongoose";
import { asyncHandler } from "../utils/asyncHandler";
import { Cart, ProductType } from "../models/cart";
import { AuthenticatedRequest } from "../types/auth";
import { AppError } from "../utils/AppError";
import { PRODUCT_MODELS } from "../utils";
import { getOrCreateCart, populateCartItems } from "../utils/cart";

export const getCart = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
        if (!req.user) {
            throw new AppError("User not found", 404);
        }

        const cart = await getOrCreateCart(req.user.id);

        await populateCartItems(cart);

        return res.status(200).json({
            success: true,
            message: "Cart retrieved successfully.",
            data: cart,
        });
    }
);

export const addToCart = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
      throw new AppError("User not found", 404);
    }

    const {
      productId,
      productType,
      quantity = 1,
    }: {
      productId: string;
      productType: ProductType;
      quantity?: number;
    } = req.body;

    console.log("Adding to cart:", { productId, productType, quantity });
    if (quantity < 1) {
      throw new AppError("Quantity must be at least 1", 400);
    }

    const ProductModel = PRODUCT_MODELS[productType];

    if (!ProductModel) {
      throw new AppError("Invalid product type", 400);
    }

    const product = await ProductModel.findById(productId);

    if (!product) {
      throw new AppError("Product not found", 404);
    }

    if (product.stock < quantity) {
      throw new AppError("Insufficient stock", 400);
    }

    const cart = await getOrCreateCart(req.user.id);

    const existingItem = cart.items.find(
      (item) =>
        item.productId.toString() === productId &&
        item.productType === productType
    );

    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;

      if (newQuantity > product.stock) {
        throw new AppError("Insufficient stock", 400);
      }

      existingItem.quantity = newQuantity;
    } else {
      cart.items.push({
        productId,
        productType,
        quantity,
      });
    }

    await cart.save();

    await populateCartItems(cart);

    return res.status(200).json({
      success: true,
      message: "Item added to cart successfully.",
      data: cart,
    });
  }
);

export const updateCartItem = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
      throw new AppError("User not found", 404);
    }

    const { productId } = req.params;

    const {
      productType,
      quantity,
    }: {
      productType: ProductType;
      quantity: number;
    } = req.body;

    if (quantity < 1) {
      throw new AppError("Quantity must be at least 1", 400);
    }

    const ProductModel = PRODUCT_MODELS[productType];

    if (!ProductModel) {
      throw new AppError("Invalid product type", 400);
    }

    const product = await ProductModel.findById(productId);

    if (!product) {
      throw new AppError("Product not found", 404);
    }

    if (quantity > product.stock) {
      throw new AppError("Insufficient stock", 400);
    }

    const cart = await Cart.findOne({
      userId: req.user.id,
    });

    if (!cart) {
      throw new AppError("Cart not found", 404);
    }

    const cartItem = cart.items.find(
      (item) =>
        item.productId.toString() === productId &&
        item.productType === productType
    );

    if (!cartItem) {
      throw new AppError("Item not found in cart", 404);
    }

    cartItem.quantity = quantity;

    await cart.save();

    await populateCartItems(cart);

    return res.status(200).json({
      success: true,
      message: "Cart item updated successfully.",
      data: cart,
    });
  }
);


export const removeFromCart = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
      throw new AppError("User not found", 404);
    }

    const { productId } = req.params;

    const { productType }: { productType: ProductType } = req.body;

    if (!productType) {
      throw new AppError("Product type is required", 400);
    }

    const cart = await Cart.findOne({
      userId: req.user.id,
    });

    if (!cart) {
      throw new AppError("Cart not found", 404);
    }

    const itemExists = cart.items.some(
      (item) =>
        item.productId.toString() === productId &&
        item.productType === productType
    );

    if (!itemExists) {
      throw new AppError(
        "Item not found in cart",
        404
      );
    }

    cart.items.pull({
      productId: new Types.ObjectId(productId as string),
      productType,
    });

    await cart.save();

    await populateCartItems(cart);

    return res.status(200).json({
      success: true,
      message: "Item removed from cart successfully.",
      data: cart,
    });
  }
);

export const clearCart = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
      throw new AppError("User not found", 404);
    }

    const cart = await Cart.findOne({
      userId: req.user.id,
    });

    if (!cart) {
      throw new AppError("Cart not found", 404);
    }

    await Cart.findOneAndUpdate({ userId: req.user.id }, { items: [] }, { new: true });

    return res.status(200).json({
      success: true,
      message: "Cart cleared successfully.",
      data: cart,
    });
  }
);