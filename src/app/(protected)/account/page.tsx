// src/app/(protected)/account/page.tsx
"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import toast from "react-hot-toast";

// Reusable layout components
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

// Reusable section components
import SubscribeSection from "../../../components/sections/SubscribeSection";
import FeatureBanner from "../../../components/sections/FeatureBanner";

// Account components
import AccountTabs from "../../../components/account/AccountTabs";
import AccountDetails from "../../../components/account/AccountDetails";
import AddressCard from "../../../components/account/AddressCard";
import AddressesTab from "../../../components/account/AddressesTab";
import OrdersTab from "../../../components/account/OrdersTab";

// API
import {
  fetchUser,
  fetchAddresses,
  fetchOrders,
  fetchCart,
  logout,
  subscribeNewsletter,
  type User,
  type Address,
  type Order,
  type CartItem,
} from "../../../lib/api";

// Mock data for network fallback
const MOCK_USER: User = {
  id: "1",
  full_name: "John Doe",
  email: "john.doe@example.com",
};
const MOCK_ADDRESSES: Address[] = [
  {
    id: "1",
    full_name: "John Doe",
    street: "12 Adeola Odeku Street, Victoria Island",
    city: "Victoria Island",
    state: "Lagos State",
    country: "Nigeria",
    postal_code: "101241",
    phone: "+2348012345678",
    is_default: true,
  },
  {
    id: "2",
    full_name: "John Doe",
    street: "12 Adeola Odeku Street, Victoria Island",
    city: "Victoria Island",
    state: "Lagos State",
    country: "Nigeria",
    postal_code: "101241",
    phone: "+2348012345678",
    is_default: false,
  },
];
const MOCK_ORDERS: Order[] = [
  {
    id: "1",
    order_number: "1016007725",
    product_name: "Agile Comet X",
    product_image: "/images/Frame-1321314944@2x.png",
    order_date: "2026-05-21",
    status: "delivered",
    total_amount: 150000,
    delivery_range: "Fri 21 November and Fri 25, November",
    tracking_number: "LL04567893502",
  },
  {
    id: "2",
    order_number: "1016007726",
    product_name: "Agile Comet X",
    product_image: "/images/Frame-1321314944@2x.png",
    order_date: "2026-05-21",
    status: "shipped",
    total_amount: 150000,
    delivery_range: "Fri 21 November and Fri 25, November",
    tracking_number: "LL04567893502",
  },
  {
    id: "3",
    order_number: "1416007133",
    product_name: "Oversize Saddle",
    product_image: "/accessories/accessory2.png",
    order_date: "2026-05-21",
    status: "processing",
    total_amount: 150000,
    delivery_range: "Fri 21 November and Fri 25, November",
    tracking_number: "LL04567893502",
  },
];
const MOCK_CART: CartItem[] = [{ id: "1", quantity: 2 }];

function isNetworkError(error: unknown): boolean {
  if (error instanceof Error) {
    return (
      error.message.includes("Network Error") ||
      error.message.includes("Failed to fetch") ||
      error.message.includes("ECONNREFUSED")
    );
  }
  return false;
}

async function withNetworkFallback<T>(
  apiCall: () => Promise<T>,
  mockData: T,
  resourceName: string,
): Promise<T> {
  try {
    return await apiCall();
  } catch (error) {
    if (isNetworkError(error)) {
      console.warn(`[${resourceName}] Backend unreachable, using mock data`);
      toast.success(`Using demo ${resourceName} (backend not connected)`, {
        duration: 3000,
      });
      return mockData;
    }
    throw error;
  }
}

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [user, setUser] = useState<User | null>(null);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState({
    user: true,
    addresses: true,
    orders: true,
    cart: true,
  });
  const [error, setError] = useState<{
    user?: string;
    addresses?: string;
    orders?: string;
    cart?: string;
  }>({});

  const loadUser = useCallback(async () => {
    try {
      const data = await withNetworkFallback(fetchUser, MOCK_USER, "user");
      setUser(data);
    } catch (err) {
      setError((prev) => ({
        ...prev,
        user: err instanceof Error ? err.message : "Failed to load user",
      }));
      toast.error("Could not load user information");
    } finally {
      setLoading((prev) => ({ ...prev, user: false }));
    }
  }, []);

  const loadAddresses = useCallback(async () => {
    try {
      const data = await withNetworkFallback(
        fetchAddresses,
        MOCK_ADDRESSES,
        "addresses",
      );
      setAddresses(data);
    } catch (err) {
      setError((prev) => ({
        ...prev,
        addresses:
          err instanceof Error ? err.message : "Failed to load addresses",
      }));
      toast.error("Could not load addresses");
    } finally {
      setLoading((prev) => ({ ...prev, addresses: false }));
    }
  }, []);

  const loadOrders = useCallback(async () => {
    try {
      const data = await withNetworkFallback(
        fetchOrders,
        MOCK_ORDERS,
        "orders",
      );
      setOrders(data);
    } catch (err) {
      setError((prev) => ({
        ...prev,
        orders: err instanceof Error ? err.message : "Failed to load orders",
      }));
      toast.error("Could not load order history");
    } finally {
      setLoading((prev) => ({ ...prev, orders: false }));
    }
  }, []);

  const loadCart = useCallback(async () => {
    try {
      const data = await withNetworkFallback(fetchCart, MOCK_CART, "cart");
      setCartItems(data);
    } catch (err) {
      setError((prev) => ({
        ...prev,
        cart: err instanceof Error ? err.message : "Failed to load cart",
      }));
    } finally {
      setLoading((prev) => ({ ...prev, cart: false }));
    }
  }, []);

  useEffect(() => {
    Promise.allSettled([loadUser(), loadAddresses(), loadOrders(), loadCart()]);
  }, [loadUser, loadAddresses, loadOrders, loadCart]);

  const cartCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0,
  );

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = "/";
    } catch {
      toast.error("Logout failed. Please try again.");
    }
  };

  const handleSubscribe = async (email: string) => {
    try {
      await subscribeNewsletter(email);
      toast.success("Subscribed successfully!");
    } catch {
      toast.error("Subscription failed");
    }
  };

  // Do not block the whole page while user data loads — render layout and show inline loader
  // If user loading fails and no user, we show an inline error area instead of full-screen takeover.

  const pageTitle =
    activeTab === "Profile"
      ? "My Account"
      : activeTab === "Addresses"
        ? "Your Addresses"
        : "Your Orders";

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar cartCount={cartCount} />

      <main className="flex-1 px-4 md:px-17.5 py-6 md:py-8">
        <div className="mb-8 flex items-center gap-2">
          <Link
            href="/"
            className="text-sm font-normal text-[#5F6368] hover:text-[#519A09]"
          >
            Home
          </Link>
          <ChevronRight size={12} className="text-[#5F6368]" />
          <span className="text-sm text-[#5F6368]">Account</span>
          {activeTab !== "Profile" && (
            <>
              <ChevronRight size={12} className="text-[#5F6368]" />
              <span className="text-sm text-[#5F6368]">{activeTab}</span>
            </>
          )}
        </div>

        <div className="mb-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <h1 className="text-[clamp(24px,3vw,32px)] font-semibold tracking-tight text-[#111827]">
            {pageTitle}
          </h1>
          <button
            onClick={handleLogout}
            className="h-12 rounded-xl bg-[#01430D] px-6 text-sm font-normal text-white hover:bg-[#013009] sm:px-8"
          >
            Logout
          </button>
        </div>

        <AccountTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "Profile" && (
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {loading.user && !user ? (
              <div className="col-span-full flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#519A09]/30 border-t-[#519A09]" />
              </div>
            ) : error.user && !user ? (
              <div className="col-span-full flex flex-col items-center gap-4">
                <p className="text-red-600">{error.user}</p>
                <button
                  onClick={loadUser}
                  className="rounded-lg bg-[#519A09] px-6 py-2 text-white hover:bg-[#457f07]"
                >
                  Retry
                </button>
              </div>
            ) : (
              <>
                <AccountDetails user={user || undefined} />
                <AddressCard
                  addresses={addresses}
                  loading={loading.addresses}
                />
              </>
            )}
          </div>
        )}

        {activeTab === "Addresses" && (
          <div className="mt-8">
            <AddressesTab
              addresses={addresses}
              loading={loading.addresses}
              onAddressUpdate={loadAddresses}
            />
          </div>
        )}

        {activeTab === "Orders" && (
          <div className="mt-8">
            <OrdersTab orders={orders} loading={loading.orders} />
          </div>
        )}
      </main>

      <SubscribeSection />
      <FeatureBanner />
      <Footer />
    </div>
  );
}
