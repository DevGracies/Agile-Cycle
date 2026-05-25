"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

const navLinks = [
  {
    name: "Home",
    path: "/",
    hasDropDown: false,
  },
  {
    name: "E-bikes",
    path: "/e-bikes",
    hasDropDown: true,
    dropDowns: [
      { name: "Cargo", path: "/cargo" },
      { name: "Cruisers", path: "/cruisers" },
    ],
  },
  {
    name: "Accessories",
    path: "/accessories",
    hasDropDown: true,
    dropDowns: [
      { name: "Saddle", path: "/saddle" },
      { name: "Pump", path: "/pump" },
    ],
  },
  {
    name: "Enhancements",
    path: "/enhancements",
    hasDropDown: true,
    dropDowns: [
      { name: "Display Control", path: "/display-control" },
      { name: "Suspension Seat", path: "/suspension-seat" },
    ],
  },
  {
    name: "Explore",
    path: "/explore",
    hasDropDown: true,
    dropDowns: [{ name: "Shop", path: "/shop" }],
  },
  {
    name: "Support",
    path: "/support",
    hasDropDown: true,
    dropDowns: [{ name: "help", path: "help" }],
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState<string | null>(null);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <Container>
          <div className="h-16 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((item) => {
                const active = pathname === item.path;

                return (
                  <div
                    key={item.name}
                    onMouseEnter={() => setActiveDropDown(item.name)}
                    onMouseLeave={() => setActiveDropDown(null)}
                    className="relative group"
                  >
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`flex items-center gap-2 text-sm font-medium transition ${
                        active
                          ? "text-[#519A09] font-semibold"
                          : "text-gray-700 hover:text-[#519A09]"
                      }`}
                    >
                      {item.name}
                      {item.hasDropDown &&
                        (activeDropDown === item.name ? (
                          <ChevronUp size={10} />
                        ) : (
                          <ChevronDown size={10} />
                        ))}
                    </Link>

                    {item.dropDowns && 
                      activeDropDown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-48 text-xs bg-white shadow-md transition-all translate-y-5 group-hover:translate-y-0 duration-300 rounded-md p-4">
                          {item.dropDowns.map((item) => (
                          <Link key={item.name} href={item.path}>
                            {item.name}
                          </Link>
                      ))}
                        </div>
                        )
                    }
                  </div>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search toggle */}
              <button
                onClick={() => setShowSearch((p) => !p)}
                className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-200 cursor-pointer"
              >
                <Search className="w-4 h-4 stroke-[1.5]" />
              </button>

              <User className="w-5 h-5 stroke-[1.5] cursor-pointer text-gray-700" />

              <div className="relative cursor-pointer">
                <ShoppingCart className="w-5 h-5 stroke-[1.5] text-gray-700" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                  0
                </span>
              </div>

              {/* Mobile Menu */}
              <button onClick={() => setOpenMenu(true)} className="lg:hidden">
                <Menu className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>
          </div>

          {/* Collapsible Search */}
          {showSearch && (
            <div className="pb-3">
              <div className="relative w-full max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-10 rounded-lg border border-gray-200 bg-white/70 pl-4 pr-10 text-sm outline-none"
                />
                <div className="flex items-center gap-4 absolute right-3 top-1/2 -translate-y-1/2 ">
                  <span className="block w-[.5px] h-6 bg-[#78B52A]" />
                  <Search className="text-[#78B52A]" size={18} />
                </div>
              </div>
            </div>
          )}
        </Container>
      </header>

      {/* Overlay */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-xl p-6 transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end mb-8">
          <button onClick={() => setOpenMenu(false)}>
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
};

export default Navbar;
