"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";

import Container from "./Container";
import { useCartStore } from "@/src/store/useCartStore";
import { logout } from "@/src/lib/api";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "E-bikes", path: "/e-bikes" },
  { name: "Accessories", path: "/accessories" },
  { name: "Enhancements", path: "/enhancements" },
  { name: "Explore", path: "/explore" },
  { name: "Support", path: "/support" },
];

interface NavbarProps {
  cartCount?: number;
}

export default function Navbar({ cartCount: cartCountProp }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);

  const cartCountFromStore = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  const cartCount = cartCountProp ?? cartCountFromStore;

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!profileRef.current) return;
      if (!(event.target instanceof Node)) return;
      if (!profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleLogoutClick = async () => {
    try {
      await logout();
    } catch {
      // ignore logout errors and still navigate away
    }
    router.push("/");
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <Container>
          <div className="h-16 flex items-center justify-between gap-4">
            <Link href="/">
              <Image
                src="/Agile-Cycle-Logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((item) => {
                const active = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-sm font-medium transition ${
                      active
                        ? "text-[#519A09] font-semibold"
                        : "text-gray-700 hover:text-[#519A09]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowSearch((prev) => !prev)}
                className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              <div ref={profileRef} className="relative">
                <button
                  aria-haspopup="true"
                  aria-expanded={showProfileMenu}
                  onClick={() => setShowProfileMenu((prev) => !prev)}
                  className="inline-flex items-center"
                  aria-label="Profile menu"
                >
                  <User className="cursor-pointer text-gray-700" />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-md shadow-lg z-50 overflow-hidden">
                    <nav className="flex flex-col py-1">
                      <Link
                        href="/account"
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        href="/account"
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        Orders
                      </Link>
                      <button
                        onClick={handleLogoutClick}
                        className="text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Logout
                      </button>
                    </nav>
                  </div>
                )}
              </div>

              <Link
                href="/shopping-cart"
                aria-label="Shopping cart"
                className="relative inline-flex items-center"
              >
                <ShoppingCart className="text-gray-700" />
                <span className="absolute -top-2 -right-2 min-w-4.5 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center px-1">
                  {cartCount}
                </span>
              </Link>

              <button
                onClick={() => setOpenMenu(true)}
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>

          {showSearch && (
            <div className="pb-3">
              <div className="relative w-full max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-10 rounded-lg border border-gray-200 bg-white/70 pl-4 pr-10 text-sm outline-none"
                />
                <div className="flex items-center gap-4 absolute right-3 top-1/2 -translate-y-1/2">
                  <span className="hidden md:block w-px h-6 bg-[#78B52A]" />
                  <Search className="text-[#78B52A]" size={18} />
                </div>
              </div>
            </div>
          )}
        </Container>
      </header>

      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-70 bg-white z-50 shadow-xl p-6 transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end mb-8">
          <button onClick={() => setOpenMenu(false)} aria-label="Close menu">
            <X />
          </button>
        </div>

        <nav className="flex flex-col gap-5">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpenMenu(false)}
              className={`text-base ${
                pathname === item.path
                  ? "text-[#519A09] font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
