"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Search,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

import Container from "./Container";
import logo from "@/public/Agile-Cycle-Logo.png";
import SearchInput from "../shared/SearchInput";
import CartDrawer from "../cart/CartDrawer";
import { useCart } from "@/src/context/CartProvider";
import { useAuth } from "@/src/context/AuthProvider";
import { set } from "zod";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "E-bikes",
    path: "/bikes",
    dropDowns: true,
  },
  {
    name: "Accessories",
    path: "/acessories",
    dropDowns: true,
  },
  {
    name: "Enhancements",
    path: "/enhancement",
    dropDowns: true,
  },
  {
    name: "Explore",
    path: "/explore",
    dropDowns: true,
  },
  {
    name: "Support",
    path: "/support",
    dropDowns: true
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  // desktop dropdown
  const [activeDropDown, setActiveDropDown] = useState<string | null>(null);

  // mobile dropdown
  const [mobileDropDown, setMobileDropDown] = useState<string | null>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const toggleMobileDropdown = (name: string) => {
    setMobileDropDown((prev) => (prev === name ? null : name));
  };

  const { cartCount } = useCart();
  const { user, isAuthenticated, logOut, refreshUser } = useAuth();

  useEffect(() => {
    refreshUser();
  }, [user, refreshUser]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
    if(dropDownRef.current && !dropDownRef.current.contains(e.target as Node)){
      setOpen(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  }
  }, [])

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <Container>
          <div className="h-16 flex items-center justify-between gap-4">
            {/* LOGO */}
            <Link href="/">
              <Image
                src={logo}
                alt="Agile Cycle Logo"
                width={62}
                height={62}
                className="object-contain"
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => {
                const active = pathname === item.path;
                const hasDropDown = item.dropDowns;

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropDown(item.name)}
                    onMouseLeave={() => setActiveDropDown(null)}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${active
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                        }`}
                    >
                      {item.name}

                      {hasDropDown && (
                        <span className="transition-transform duration-300">
                          {activeDropDown === item.name ? (
                            <ChevronUp size={14} />
                          ) : (
                            <ChevronDown size={14} />
                          )}
                        </span>
                      )}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">
              {/* SEARCH */}
              <button
                onClick={() => setShowSearch((prev) => !prev)}
                className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center transition"
              >
                <Search className="w-4 h-4 stroke-[1.7]" />
              </button>

              {/* USER */}
              {isAuthenticated ? (
                <div className="relative">
                  {/* Trigger Button */}
                  <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-50"
                  >
                    <User className="w-5 h-5 stroke-[1.7]" />
                  </button>

                  {/* Dropdown */}
                  {open && (
                    <div 
                    ref={dropDownRef}
                    className="absolute right-0 mt-3 w-72 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                      <div className="flex items-center gap-3 p-4">
                        {/* <Image
                        src={user?.avatar || "/images/avatar.png"}
                        alt="User"
                        width={52}
                        height={52}
                        className="rounded-full object-cover"
                      /> */}

                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-semibold text-gray-900">
                            {user?.name}
                          </h3>

                          <p className="truncate text-sm text-gray-500">
                            {user?.email}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-gray-100" />

                      <div className="p-2">
                        <button
                          onClick={logOut}
                          className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/signin"
                  className="flex items-center justify-center px-6 rounded transition"
                >
                  Login
                </Link>
              )}

              {/* CART */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center transition"
              >
                <ShoppingCart className="w-5 h-5 stroke-[1.7]" />

                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setOpenMenu(true)}
                className="lg:hidden w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center transition"
              >
                <Menu className="w-5 h-5 stroke-[1.7]" />
              </button>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div
            className={`overflow-hidden transition-all duration-300 ${showSearch ? "max-h-24 opacity-100 pb-4" : "max-h-0 opacity-0"
              }`}
          >
            <SearchInput placeholder="Search Products..." />
          </div>
        </Container>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpenMenu(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl transition-transform duration-300 lg:hidden ${openMenu ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* HEADER */}
        <div className="h-16 border-b border-gray-100 px-5 flex items-center justify-between">
          <Image
            src={logo}
            alt="Logo"
            width={55}
            height={55}
            className="object-contain"
          />

          <button
            onClick={() => setOpenMenu(false)}
            className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center"
          >
            <X />
          </button>
        </div>

        {/* MOBILE NAV */}
        <nav className="px-5 py-6 flex flex-col">
          {navLinks.map((item) => {
            const active = pathname === item.path;
            const hasDropDown = item.dropDowns;

            return (
              <div key={item.name} className="border-b border-gray-100 py-1">
                {/* TOP LINK */}
                <div className="flex items-center justify-between">
                  <Link
                    href={item.path}
                    onClick={() => setOpenMenu(false)}
                    className={`py-3 text-[15px] font-medium ${active ? "text-primary" : "text-gray-700"
                      }`}
                  >
                    {item.name}
                  </Link>

                  {hasDropDown && (
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="w-8 h-8 flex items-center justify-center"
                    >
                      {mobileDropDown === item.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </nav>
      </aside>

      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
