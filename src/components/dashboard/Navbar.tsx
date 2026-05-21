"use client";

import { Bell, Menu, Search } from "lucide-react";

export default function Navbar({
  setSidebarOpen,
}: {
  setSidebarOpen: (value: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100">
      <div className="w-auto h-[72px] px-2 md:px-8 flex items-center justify-between">
        <div />
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
            <div className="relative w-full max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 rounded-lg border border-gray-200 bg-white/70 pl-4 pr-10 text-sm outline-none"
              />
              <div className="flex items-center gap-4 absolute right-3 top-1/2 -translate-y-1/2 ">
                <span className="hidden md:block w-[1px] h-6 bg-[#78B52A]" />
                <Search className="text-[#78B52A]" size={18} />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            {/* Notification */}
            <button className="relative">
              <Bell size={18} className="text-gray-700" />

              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#84CC16]" />
            </button>
            <span className="hidden md:block w-[1px] h-6 bg-[#DADADA]" />

            {/* Role */}
            <p className="hidden md:block text-sm font-medium text-[#6B7280]">
              Admin Panel
            </p>

            <span className="hidden md:block w-[1px] h-6 bg-[#DADADA]" />
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

                <p className="text-xs text-gray-400 mt-1">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
