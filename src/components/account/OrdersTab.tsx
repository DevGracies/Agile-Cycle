// src/components/account/OrdersTab.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

interface Order {
  id: string;
  order_number: string;
  product_name?: string;
  product_image?: string;
  delivery_range?: string;
  tracking_number?: string;
}

interface OrdersTabProps {
  orders?: Order[];
  loading?: boolean;
}

export default function OrdersTab({
  orders = [],
  loading = false,
}: OrdersTabProps) {
  if (loading) {
    return (
      <div className="flex flex-col gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-24 animate-pulse rounded-xl bg-gray-200" />
        ))}
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="rounded-2xl border border-[#E8E8E8] bg-white p-12 text-center shadow-sm">
        <ShoppingBag className="mx-auto h-12 w-12 text-[#5F6368]" />
        <p className="mt-4 font-semibold text-[#111827]">No orders yet</p>
        <p className="mt-2 text-sm text-[#5F6368]">
          Your order history will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <div
          key={order.id}
          className="rounded-2xl border border-[#E8E8E8] bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5"
        >
          <div className="flex items-start gap-4">
            {order.product_image && (
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-50 sm:h-20 sm:w-20">
                <Image
                  src={order.product_image}
                  alt={order.product_name || order.order_number}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="min-w-0 flex-1">
              <p className="font-semibold text-[#111827]">
                {order.product_name || `Order #${order.order_number}`}
              </p>
              <p className="mt-1 text-xs text-[#5F6368]">
                Order ID: {order.order_number}
              </p>
              {order.delivery_range && (
                <p className="text-xs text-[#5F6368]">
                  Delivery between {order.delivery_range}
                </p>
              )}
              {order.tracking_number && (
                <p className="mt-2 text-xs text-[#5F6368]">
                  Track no:{" "}
                  <Link
                    href={`/track/${order.tracking_number}`}
                    className="font-medium text-[#519A09] hover:underline"
                  >
                    {order.tracking_number}
                  </Link>{" "}
                  <Link
                    href={`/track/${order.tracking_number}`}
                    className="text-xs font-medium text-[#519A09] hover:underline"
                  >
                    • Track order
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
