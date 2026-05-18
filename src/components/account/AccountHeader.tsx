"use client";

import Link from "next/link";
import { ShoppingBag, User, Search } from "lucide-react"; 
import logo from "@/public/Agile-Cycle-Logo.png";

const NAV_ITEMS = ["Home", "E-bikes", "Accessories", "Explore", "Support", "Contact Us"];

interface AccountHeaderProps {
  cartCount: number;
}

export default function AccountHeader({ cartCount }: AccountHeaderProps) {
  return (
    <header className="relative z-50 flex flex-col">
      <div className="relative z-10 flex min-h-[82px] w-full items-center justify-between bg-white px-4 shadow-sm md:px-[70px]">
        {/* Logo (clickable) */}
        <Link href="/" className="flex h-[62px] items-center gap-1">
           <img src={logo.src} alt="Agile Cycle" className="h-full object-contain" />
          <div className="leading-tight">
            <div className="text-[9px] font-bold uppercase tracking-wider text-[#519A09]">AGILE</div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-[#519A09]">CYCLE</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link key={item} href="#" className="text-[16px] font-normal text-[#4A4A4A] transition-colors hover:text-[#519A09]">
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link href="/account" aria-label="User account" className="relative h-6 w-6 flex items-center justify-center">
            <User size={20} className="text-[#4A4A4A] hover:text-[#519A09] transition-colors" />
          </Link>
          <div className="h-[21px] w-px bg-gray-300" />
          <Link href="/cart" aria-label="Cart" className="relative flex items-center justify-center">
            <ShoppingBag size={20} className="text-[#4A4A4A] hover:text-[#519A09] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#eb2606]">
                <span className="text-[10px] font-bold text-white">{cartCount}</span>
              </span>
            )}
          </Link>
        </div>
      </div>

      <div className="absolute left-0 top-[82px] z-0 flex h-[92px] w-full justify-center bg-gradient-to-b from-white via-white to-transparent pt-[13px]">
        <div className="pointer-events-auto mx-4 flex h-11 w-full max-w-[614px] items-center rounded-[8px] border border-[#F4F4F4] bg-white/80 px-3 backdrop-blur-sm">
          <input
            type="text"
            placeholder="Search…"
            className="w-full bg-transparent text-sm text-[#515151] outline-none placeholder:text-[#515151]"
          />
          <div className="mx-3 h-[21px] w-px bg-gray-300" />
          <button className="flex items-center justify-center p-1">
            <Search size={16} className="text-[#519A09]" />
          </button>
        </div>
      </div>
    </header>
  );
}