"use client";

import { useEffect } from "react";
import EmptyCart from "./EmptyCart";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";
import CartSuccessBanner from "./CartSuccessBanner";
import CartHeader from "./CartHeader";
import { CartItem as CartCart } from "@/src/types/cart";
import { useCart } from "@/src/context/CartProvider";

interface Props {
  open: boolean;
  onClose: () => void;
  cart?: CartCart[];
}

export default function CartDrawer({ open, onClose }: Props) {
  const { cart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  const subtotal = cart?.items.reduce(
    (acc, item) => acc + item.productId?.price * item.quantity,
    0,
  );

  return (
    <>
      <div
        className={`
    fixed inset-0 z-40
    bg-black/55
    backdrop-blur-[2px]
    transition-all duration-300 ease-out
    ${
      open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }
  `}
        onClick={onClose}
      />

      <aside
        role="dialog"
        aria-modal="true"
        className={`
          fixed right-0 top-0 z-50
          h-screen w-full md:w-[550px]
          bg-white flex flex-col
          transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <CartHeader onClose={onClose} />

        <div className="flex-1 overflow-y-auto p-6">
          {cart?.items.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <CartSuccessBanner />

              <div className="mt-5 space-y-4">
                {cart?.items.map((item) => (
                  <CartItem
                    key={item.productId._id}
                    item={item}
                    onRemove={() => removeFromCart(item.productId._id, item.productType)}
                    onChangeQty={(q) => updateQuantity(item.productId._id, item.productType, q)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <CartFooter subtotal={subtotal || 0} isEmpty={!cart?.items.length} />
      </aside>
    </>
  );
}
