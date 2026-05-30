// src/app/cart/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "../../../components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import FeatureBanner from "@/src/components/sections/FeatureBanner";
import CartItem from "@/src/components/cart/CartItem";
import OrderSummary from "@/src/components/cart/OrderSummary";
import RecentlyViewed from "@/src/components/products/RecentlyViewed";
import { useProductStore } from "@/src/store/useProductStore";
import { useCartStore } from "@/src/store/useCartStore";
import { subscribeNewsletter } from "@/src/lib/api";
import toast from "react-hot-toast";

interface CartItemData {
  id: number;
  name: string;
  image: string;
  attributes: { label: string; value: string }[];
  price: number;
  originalPrice?: number;
  quantity: number;
}

export default function ShoppingCart() {
  const {
    items,
    addItem,
    removeItem: removeCartItem,
    updateQuantity: updateCartQuantity,
    setItems,
  } = useCartStore();
  // cart store hydrates from localStorage or server; no local mock initialization

  const { recentlyViewed, fetchRecentlyViewed } = useProductStore();

  useEffect(() => {
    fetchRecentlyViewed();
  }, [fetchRecentlyViewed]);

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const savings = items.reduce((sum, item) => {
    const diff =
      item.originalPrice && item.originalPrice > item.price
        ? item.originalPrice - item.price
        : 0;
    return sum + diff * item.quantity;
  }, 0);

  const updateQuantity = (id: number, delta: number) => {
    const existing = items.find((i) => i.id === id);
    if (!existing) return;
    const next = Math.max(0, existing.quantity + delta);
    if (next === 0) removeCartItem(id);
    else updateCartQuantity(id, next);
  };

  const removeItem = (id: number) => {
    removeCartItem(id);
  };

  const handleSubscribe = async (email: string) => {
    try {
      await subscribeNewsletter(email);
      toast.success("Subscribed successfully!");
    } catch {
      toast.error("Subscription failed");
    }
  };

  const handleAddToCart = (id: number) => {
    const product = recentlyViewed.find((p) => p.id === id);
    if (!product) return console.warn("Add to cart: product not found", id);
    const price = Number(product.price.replace(/[^0-9.-]+/g, "")) || 0;
    const originalPrice = product.originalPrice
      ? Number(String(product.originalPrice).replace(/[^0-9.-]+/g, ""))
      : undefined;
    addItem({
      id: product.id,
      name: product.name,
      image: product.image,
      attributes: product.specs.map((s) => ({
        label: s.label,
        value: s.value,
      })),
      price,
      originalPrice,
      quantity: 1,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-white via-page-bg to-page-bg">
      <Navbar cartCount={cartCount} />

      <main className="flex-1 px-3 sm:px-4 lg:px-10 py-8 lg:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm font-roboto text-neutral-300 tracking-wide">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-neutral-900">Shopping Cart</span>
        </div>

        <h1 className="font-roboto font-semibold text-[32px] tracking-[-1.5px] text-neutral-900 mb-6 leading-[1.2]">
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-start">
          {/* Cart items section */}
          <section className="w-full lg:flex-1 bg-white border-b border-neutral-50">
            <div className="px-4 pt-4 pb-1">
              <span className="font-roboto font-bold text-[15px] tracking-[1px] uppercase text-green-light">
                Product
              </span>
            </div>
            <div className="border-t border-b border-black/40 px-3 sm:px-4 py-2 grid grid-cols-[minmax(0,1fr)_112px_92px] sm:grid-cols-[minmax(0,1fr)_112px_120px] items-center gap-2 sm:gap-3">
              <span className="font-roboto font-medium text-[13px] text-black min-w-0">
                E - Bikes
              </span>
              <span className="font-roboto font-medium text-[13px] text-black text-center justify-self-center">
                Quantity
              </span>
              <span className="font-roboto font-medium text-[13px] text-black text-right justify-self-end shrink-0">
                Total
              </span>
            </div>

            {items.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}

            {items.length === 0 && (
              <div className="px-4 py-12 text-center">
                <p className="font-lexend text-neutral-300">
                  Your cart is empty.
                </p>
              </div>
            )}
          </section>

          {/* Order summary */}
          <OrderSummary
            subtotal={subtotal}
            savings={savings}
            onApplyDiscount={(code) => console.log(code)}
            onCheckout={() => console.log("checkout")}
          />
        </div>
      </main>

      <RecentlyViewed products={recentlyViewed} onAddToCart={handleAddToCart} />
      <SubscribeSection />
      <FeatureBanner />
      <Footer />
    </div>
  );
}
