"use client";

import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  User,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Menu,
  X
} from "lucide-react";

type NavbarProps = {
  activeDropdown?: string | null;
  setActiveDropdown?: React.Dispatch< React.SetStateAction<string | null>>;
};

export default function Navbar({activeDropdown,setActiveDropdown,}: NavbarProps) {
  const navbarRef = useRef<HTMLDivElement>(null);

  // i moved useState dropdown to parent page because its needed globally

  const toggleDropdown = (label: string) => {
  setActiveDropdown?.(null); // First close any open dropdown

  if (activeDropdown !== label) {
    setTimeout(() => {      // Then open the clicked one
      setActiveDropdown?.(label);
    }, 10);
  }
};

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setActiveDropdown?.(null);
    }
  };

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, [setActiveDropdown]);

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
  { label: "Home", href: "/Home" },

  {
    label: "E-bikes",
    hasDropdown: true,
    layout: "sidebar",
  },

  {
    label: "Accessories",
    hasDropdown: true,
    layout: "sidebar",
  },

  {
    label: "Enhancements",
    hasDropdown: true,
    layout: "sidebar",
  },

  {
    label: "Explore",
    hasDropdown: true,
    layout: "simple",
  },

  {
    label: "Support",
    hasDropdown: true,
    layout: "simple",
  },
];

  return (
    
    <nav ref={navbarRef} className="w-full bg-white font-sans relative z-50 0">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/Home"
            className="relative shrink-0 pt-5"
          >
            <Image
              src="/Agile-Cycle-Logo.png"
              alt="Agile Cycle Logo"
              width={80}
              height={62}
            
              priority
              className="object-contain "
            />
          </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.hasDropdown ? (
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`whitespace-nowrap text-[14px] font-semibold flex items-center gap-1.5 transition-colors duration-200 ${
                    activeDropdown === item.label
                      ? "text-[#4CA832]"
                      : "text-[#4A4A4A] hover:text-black"
                  }`}
                >
                  {item.label}

                  {activeDropdown === item.label ? (
                    <ChevronUp className="w-4 h-4 pt-1 text-[#4CA832]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 pt-1 text-[#7A7A7A]" />
                  )}
                </button>
              ) : (
                <Link
                  href={item.href || "#"}
                  onClick={() => setActiveDropdown?.(null)}
                  className="whitespace-nowrap text-[#4A4A4A] hover:text-black text-[14px] font-semibold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 shrink-0 text-[#4A4A4A]">

          <button className="hover:text-black transition-colors">
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>

          <button className="relative hover:text-black transition-colors">
            <ShoppingCart className="w-5 h-5 stroke-[1.5]" />

            <span className="absolute -top-1.5 -right-2 bg-[#E14B33] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>

          {/* Hidden button for mobile menu */}
          <button
            className="lg:hidden"
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

      </div>

      {/* SEARCH BAR */}
      <div className="w-full pb-4 pt-8 px-4 lg:px-6 lg:pt-3">
        <div className="max-w-120 mx-auto relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#FAF9F5] border border-[#EDEDED] rounded-md py-2 px-4 text-sm outline-none placeholder-[#A0A0A0] text-gray-700"
          />

          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#4cA832]">
            {/* <span className="text-gray-300">|</span> */}
            <img
              src="/Home/searchLine.png"
              alt="Shortcut Icon"
              className=" h-5"
            />
            <Search className="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col py-4">

            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.hasDropdown) {
                    toggleDropdown(item.label);
                  } else {
                    setActiveDropdown?.(null);
                    setMobileMenuOpen(false);
                  }
                }}
                className={`
                  w-full px-6 py-3 text-left font-medium transition-colors
                  ${
                    activeDropdown === item.label
                      ? "bg-[#F1F8EC] text-[#4CA832]"
                      : "text-[#4A4A4A] hover:bg-gray-50"
                  }
                `}
              >
                {item.label}
              </button>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}