"use client";

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

  return (
    <div className="rounded-xl border border-[#E8E8E8] bg-white shadow-sm">
      <div className="border-b border-[#E8E8E8] px-4 py-3 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#519A09]">
          Order History
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center">
          <button className="whitespace-nowrap rounded-lg bg-[#01430D] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#013009]">
            Make Your First Order
          </button>
          <p className="text-sm text-[#5F6368]">
            You haven't placed any orders yet.{" "}
            <Link href="#" className="text-[#519A09] hover:underline">
              Browse products
            </Link>
          </p>
        </div>
      ) : (
        <div className="divide-y divide-[#E8E8E8]">
          {orders.map((order) => (
            <div key={order.id} className="flex items-start gap-4 p-4 sm:p-5">
              {order.product_image ? (
                <img
                  src={order.product_image}
                  alt={order.product_name || "Product"}
                  className="h-14 w-14 flex-shrink-0 rounded-lg object-cover"
                />
              ) : (
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-[#F5F5F5]">
                  <ShoppingBag size={22} className="text-[#A1A1A1]" />
                </div>
              )}
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-[#111827]">
                  {order.product_name || `Order #${order.order_number}`}
                </p>
                <p className="text-xs text-[#5F6368]">
                  Order ID: {order.order_number}
                </p>
                {order.delivery_range && (
                  <p className="text-xs text-[#5F6368]">
                    Delivery between {order.delivery_range}
                  </p>
                )}
                {order.tracking_number && (
                  <p className="text-xs">
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
          ))}
        </div>
      )}
    </div>
  );
}
