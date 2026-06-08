"use client";

import Button from "../ui/Button";
import { Input } from "../ui/Input";
import OrderItem, { OrderItemProps } from "./OrderItem";
import SectionTitle from "./SectionTitle";

interface OrderSummaryProps {
  items: OrderItemProps[];
}

export default function OrderSummary({ items }: OrderSummaryProps) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="sticky top-6 space-y-6 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <SectionTitle title="Your Items" />

      <div className="space-y-3">
        {items.map((item) => (
          <OrderItem key={item.id} {...item} />
        ))}
      </div>

      <div className="flex justify-between items-center gap-3">
        <Input placeholder="Discount code" />

        <Button variant="outline" className="h-14 px-6 cursor-pointer border-2 border-primary text-primary">
          Apply
        </Button>
      </div>

      <div className="space-y-3 pt-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>

          <span className="text-secondary">₦{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Shipping</span>

          <span className="text-secondary">₦{shipping.toLocaleString()}</span>
        </div>

        <div className="flex justify-between pt-3">
          <span className="font-semibold">Total</span>

          <span className="text-xl font-bold text-primary">
            ₦{total.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="space-y-3 pt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          100% Secure Payments
        </p>

        <div className="flex items-center gap-3">
          <div className="mt-3 flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded bg-white px-1.5 py-1">
                <div className="h-5 w-5 rounded-full bg-red-500" />
                <div className="-ml-2.5 h-5 w-5 rounded-full bg-yellow-400 opacity-90" />
              </div>
              <div className="rounded text-[#1a1f71] px-2.5 py-1 text-md font-extrabold italic">
                VISA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
