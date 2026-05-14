"use client";

import {
  Bell,
  Menu,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Agile-Cycle-Logo.png";

export default function Navbar({
  setSidebarOpen,
}: {
  setSidebarOpen: (value: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100">

      <div className="w-auto h-[72px] px-2 md:px-8 flex items-center justify-between">
        <Link
            href="/"
            className="md:block hidden"
          >
            <Image
              src={logo}
              alt="Logo"
              width={70}
              height={70}
              loading="eager"
              className="object-contain"
            />
          </Link>
        <div className="flex justify-between w-full md:w-3/4 gap-4">
          {/* LEFT SIDE */}
        <div className="flex items-center gap-4">

          {/* Mobile Toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Menu size={22} />
          </button>

          {/* Search */}
          <div className="flex items-center bg-[#F7F8FA] border border-gray-200 rounded-xl px-4 h-[46px] w-[280px]">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400"
            />

            <Search
              size={18}
              className="text-gray-500"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* Notification */}
          <button className="relative">
            <Bell
              size={18}
              className="text-gray-700"
            />

            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#84CC16]" />
          </button>

          {/* Role */}
          <p className="hidden md:block text-sm font-medium text-[#6B7280]">
            Admin Panel
          </p>

          {/* User Avatar */}
          <div className="flex items-center gap-3">

            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
            {/* Demo Image */}
              <img
                src="https://i.pravatar.cc/100"
                alt="avatar"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="hidden md:block">
              <h4 className="text-sm font-semibold text-gray-800 leading-none">
                John Doe
              </h4>

              <p className="text-xs text-gray-400 mt-1">
                Administrator
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}