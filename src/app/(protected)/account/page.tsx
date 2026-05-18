// app/account/page.tsx
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
} from "@/src/lib/api";
import AccountHeader from "@/src/components/account/AccountHeader";
import AccountTabs from "@/src/components/account/AccountTabs";
import AccountDetails from "@/src/components/account/AccountDetails";
import AddressCard from "@/src/components/account/AddressCard";
import AddressesTab from "@/src/components/account/AddressesTab";
import OrdersTab from "@/src/components/account/OrdersTab";
import NewsletterSection from "@/src/components/account/NewsletterSection";
import FeaturesSection from "@/src/components/account/FeaturesSection";
import AccountFooter from "@/src/components/account/AccountFooter";
import toast from "react-hot-toast";

// ========== MOCK DATA (used only on network errors) ==========
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
    delivery_range: "Fri 21 November and Fri 25, November",
    tracking_number: "LL04567893502",
  },
  {
    id: "2",
    order_number: "1016007726",
    product_name: "Agile Comet X",
    delivery_range: "Fri 21 November and Fri 25, November",
    tracking_number: "LL04567893502",
  },
  {
    id: "3",
    order_number: "1416007133",
    product_name: "Oversize Saddle",
    delivery_range: "Fri 21 November and Fri 25, November",
    tracking_number: "LL04567893502",
  },
];

const MOCK_CART: CartItem[] = [{ id: "1", quantity: 2 }];

// Helper: returns true if error is likely a network issue (backend not reachable)
function isNetworkError(error: unknown): boolean {
  if (error instanceof Error) {
    return error.message.includes("Network Error") || error.message.includes("Failed to fetch") || error.message.includes("ECONNREFUSED");
  }
  return false;
}

// Wrapper: tries real API, falls back to mock only on network errors
async function withNetworkFallback<T>(
  apiCall: () => Promise<T>,
  mockData: T,
  resourceName: string
): Promise<T> {
  try {
    return await apiCall();
  } catch (error) {
    if (isNetworkError(error)) {
      // Backend not reachable – use mock data
      console.warn(`[${resourceName}] Backend unreachable, using mock data`);
      toast.success(`Using demo ${resourceName} (backend not connected)`, { duration: 3000 });
      return mockData;
    }
    // Re-throw other errors (e.g., 500, 404) – they will be handled by error state
    throw error;
  }
}

export default function Account() {
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

  // Track if mock data is active (for potential UI indication)
  const usingMockRef = useRef(false);

  const loadUser = useCallback(async () => {
    try {
      const data = await withNetworkFallback(fetchUser, MOCK_USER, "user");
      setUser(data);
    } catch (err) {
      setError((prev) => ({ ...prev, user: err instanceof Error ? err.message : "Failed to load user" }));
      toast.error("Could not load user information");
    } finally {
      setLoading((prev) => ({ ...prev, user: false }));
    }
  }, []);

  const loadAddresses = useCallback(async () => {
    try {
      const data = await withNetworkFallback(fetchAddresses, MOCK_ADDRESSES, "addresses");
      setAddresses(data);
    } catch (err) {
      setError((prev) => ({ ...prev, addresses: err instanceof Error ? err.message : "Failed to load addresses" }));
      toast.error("Could not load addresses");
    } finally {
      setLoading((prev) => ({ ...prev, addresses: false }));
    }
  }, []);

  const loadOrders = useCallback(async () => {
    try {
      const data = await withNetworkFallback(fetchOrders, MOCK_ORDERS, "orders");
      setOrders(data);
    } catch (err) {
      setError((prev) => ({ ...prev, orders: err instanceof Error ? err.message : "Failed to load orders" }));
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
      setError((prev) => ({ ...prev, cart: err instanceof Error ? err.message : "Failed to load cart" }));
    } finally {
      setLoading((prev) => ({ ...prev, cart: false }));
    }
  }, []);

  useEffect(() => {
    Promise.allSettled([loadUser(), loadAddresses(), loadOrders(), loadCart()]);
  }, [loadUser, loadAddresses, loadOrders, loadCart]);

  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = "/";
    } catch (err) {
      toast.error("Logout failed. Please try again.");
    }
  };

  const handleSubscribe = async (email: string) => {
    try {
      await subscribeNewsletter(email);
      toast.success("Subscribed successfully!");
    } catch (err) {
      toast.error("Subscription failed. Please try again.");
    }
  };

  if (loading.user) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#F5F5F5]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#519A09]/30 border-t-[#519A09]" />
      </div>
    );
  }

  if (error.user && !user) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-[#F5F5F5]">
        <p className="text-red-600">{error.user}</p>
        <button
          onClick={loadUser}
          className="rounded-lg bg-[#519A09] px-6 py-2 text-white hover:bg-[#457f07]"
        >
          Retry
        </button>
      </div>
    );
  }

  const pageTitle =
    activeTab === "Profile"
      ? "My Account"
      : activeTab === "Addresses"
      ? "Your Addresses"
      : "Your Orders";

  return (
    <div className="relative mx-auto w-full max-w-[1440px] bg-[#F5F5F5] font-sans">
      <AccountHeader cartCount={cartCount} />

      <div className="px-4 pb-20 pt-[130px] md:px-[70px]">
        {/* Breadcrumbs */}
        <div className="mb-10 flex items-center gap-2">
          <Link href="/" className="text-sm font-normal text-[#5F6368] hover:text-[#519A09]">
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

        {/* Header + Logout */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <AccountDetails user={user || undefined} />
            <AddressCard addresses={addresses} loading={loading.addresses} />
          </div>
        )}

        {activeTab === "Addresses" && (
          <AddressesTab addresses={addresses} loading={loading.addresses} />
        )}

        {activeTab === "Orders" && (
          <OrdersTab orders={orders} loading={loading.orders} />
        )}
      </div>

      <NewsletterSection userEmail={user?.email} onSubscribe={handleSubscribe} />
      <FeaturesSection />
      <AccountFooter />
    </div>
  );
}