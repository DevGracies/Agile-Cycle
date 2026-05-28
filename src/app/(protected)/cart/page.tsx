"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartItem from "@/src/components/cart/CartItem";
import OrderSummary from "@/src/components/cart/OrderSummary";
import Container from "@/src/components/layout/Container";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import FeatureBanner from "@/src/components/sections/FeatureBanner";

interface CartItemData {
  id: number;
  name: string;
  image: string;
  attributes: { label: string; value: string }[];
  price: number;
  quantity: number;
}

interface RecentlyViewedProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  specs?: string[];
  badge?: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemData[]>([
    {
      id: 1,
      name: "Agile Comet X",
      image: "/ebikes/Ebikes.png",
      attributes: [
        { label: "Color", value: "Navy" },
        { label: "Size", value: "Size Regular / 57\" - 63\"" },
      ],
      price: 150000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Agile Comet X",
      image: "/ebikes/Ebikes.png",
      attributes: [
        { label: "Color", value: "Navy" },
        { label: "Size", value: "Size Regular / 57\" - 63\"" },
      ],
      price: 150000,
      quantity: 1,
    },
    {
      id: 3,
      name: "Oversized Saddle",
      image: "/accessories/accessory1.png",
      attributes: [{ label: "Type", value: "Suitable for Agile Comet X" }],
      price: 150000,
      quantity: 1,
    },
  ]);

  const recentlyViewed: RecentlyViewedProduct[] = [
    {
      id: 1,
      name: "Agile Comet X",
      image: "/ebikes/Ebikes.png",
      price: 150000,
      originalPrice: 180000,
      rating: 5,
      reviews: 89,
      badge: "E-Bike",
      specs: ["Range: 45 miles", "Torque: 90 Nm"],
    },
    {
      id: 2,
      name: "Agile Comet X",
      image: "/ebikes/Ebikes.png",
      price: 150000,
      originalPrice: 180000,
      rating: 5,
      reviews: 88,
      badge: "E-Bike",
      specs: ["Range: 45 miles", "Torque: 90 Nm"],
    },
    {
      id: 3,
      name: "E-Bike Hitch Rack",
      image: "/enhancement/enhancement3.png",
      price: 73000,
      originalPrice: 85000,
      rating: 5,
      reviews: 18,
    },
    {
      id: 4,
      name: "Hunter Light",
      image: "/accessories/accessory4.png",
      price: 73000,
      originalPrice: 85000,
      rating: 5,
      reviews: 81,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = 120000;

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  function formatPrice(amount: number) {
    return `₦${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

  const renderStars = (rating: number, reviews: number) => (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill={i < rating ? "#22C55E" : "#E5E7EB"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 1L10.39 6.26H16L11.81 9.73L13.92 15L8 11.27L2.08 15L4.19 9.73L0 6.26H5.61L8 1Z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-neutral-400">({reviews})</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-neutral-20 py-4">
        <Container>
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-neutral-300 hover:text-black transition-colors">
              Home
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="text-black font-medium">Shopping Cart</span>
          </nav>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="flex-1 py-12">
        <h1 className="text-3xl font-bold text-black mb-10">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-neutral-300 mb-6">Your cart is empty</p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-green-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items and Order Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-neutral-100 rounded-lg overflow-hidden">
                  <div className="bg-neutral-20 px-6 py-4 border-b border-neutral-100">
                    <p className="text-xs font-bold text-green-primary uppercase tracking-wider">PRODUCT</p>
                  </div>

                  <div className="divide-y divide-neutral-100">
                    <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 bg-neutral-20 text-xs font-semibold text-neutral-400 uppercase">
                      <div className="col-span-6">Product</div>
                      <div className="col-span-3">Quantity</div>
                      <div className="col-span-3 text-right">Total</div>
                    </div>

                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        {...item}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemove={handleRemove}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <OrderSummary subtotal={subtotal} savings={savings} />
              </div>
            </div>

            {/* Recently Viewed Section */}
            {recentlyViewed.length > 0 && (
              <div className="mb-20">
                <h2 className="text-2xl font-bold text-black mb-8">Recently viewed</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {recentlyViewed.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border border-neutral-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {/* Product Image */}
                      <div className="relative h-48 bg-neutral-20 flex items-center justify-center overflow-hidden">
                        {product.badge && (
                          <div className="absolute top-3 left-3 bg-green-primary text-white text-xs font-bold px-2.5 py-1 rounded z-10">
                            {product.badge}
                          </div>
                        )}
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={200}
                          height={200}
                          className="object-contain w-full h-full"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex flex-col gap-2">
                        <h3 className="text-sm font-semibold text-black line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Specs */}
                        {product.specs && product.specs.length > 0 && (
                          <div className="text-xs text-neutral-400 space-y-0.5">
                            {product.specs.slice(0, 2).map((spec, idx) => (
                              <p key={idx}>{spec}</p>
                            ))}
                          </div>
                        )}

                        {/* Rating */}
                        {renderStars(product.rating, product.reviews)}

                        {/* Price */}
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-green-primary">
                            {formatPrice(product.price)}
                          </span>
                          <span className="text-xs text-neutral-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-2 pt-2">
                          <button className="flex-1 py-2 bg-green-primary text-white text-xs font-semibold rounded hover:bg-green-light transition-colors">
                            Add to cart
                          </button>
                          <button className="h-9 w-9 border border-neutral-200 rounded flex items-center justify-center hover:bg-neutral-20 transition-colors flex-shrink-0">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                              <path
                                d="M10 1.5C5.31 1.5 1.5 5.31 1.5 10C1.5 14.69 5.31 18.5 10 18.5C14.69 18.5 18.5 14.69 18.5 10C18.5 5.31 14.69 1.5 10 1.5M14 10.5H10.5V14H9.5V10.5H6V9.5H9.5V6H10.5V9.5H14V10.5Z"
                                fill="#999999"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </Container>

      {/* Subscribe Section */}
      <SubscribeSection />

      {/* Feature Banner */}
      <FeatureBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
