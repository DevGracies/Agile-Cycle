"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  User,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "E-bikes", hasDropdown: true },
    { label: "Accessories", hasDropdown: true },
    { label: "Enhancements", hasDropdown: true },
    { label: "Explore", hasDropdown: true },
    { label: "Support", hasDropdown: true },
  ];

  return (
    <nav
      ref={navbarRef}
      className="w-full bg-white font-sans relative z-50"
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-6 pt-3">
        <div className="relative h-16 flex items-center justify-between">
          {/* LEFT: LOGO */}
          <Link
            href="/"
            className="relative w-[85px] h-[65px] flex-shrink-0"
          >
            <Image
              src="/Agile-Cycle-Logo.png"
              alt="Agile Cycle Logo"
              fill
              priority
              className="object-contain"
            />
          </Link>

          {/* CENTER: NAV LINKS */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`text-[14px] font-medium flex items-center gap-1 transition-colors duration-200 ${
                      activeDropdown === item.label
                        ? "text-black"
                        : "text-[#4A4A4A] hover:text-black"
                    }`}
                  >
                    {item.label}

                    {activeDropdown === item.label ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="text-[14px] font-medium text-[#4A4A4A] hover:text-black transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT: ICONS */}
          <div className="flex items-center gap-5 text-[#4A4A4A]">
            <button className="hover:text-black transition-colors">
              <User className="w-5 h-5 stroke-[1.5]" />
            </button>

            <button className="relative hover:text-black transition-colors">
              <ShoppingCart className="w-5 h-5 stroke-[1.5]" />

              <span className="absolute -top-1.5 -right-2 bg-[#E14B33] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="pb-4">
          <div className="max-w-[600px] mx-auto relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#FAF9F5] border border-[#EDEDED] rounded-md py-2 px-4 text-sm outline-none placeholder-[#A0A0A0] text-gray-700 focus:border-gray-300 transition-all"
            />

            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#7A7A7A]">
              <span className="text-gray-300">|</span>

              <Search className="w-4 h-4 hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* DROPDOWN */}
      {activeDropdown && (
        <div className="absolute top-full left-0 w-full bg-[#F5F7F5] shadow-lg border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-10 py-8 min-h-[420px]">
            {/* Keep your mega menu content here */}
          </div>
        </div>
      )}
    </nav>
  );
}