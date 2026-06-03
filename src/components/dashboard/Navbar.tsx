"use client";

import { Bell, Menu, Search } from "lucide-react";

import Avatar from "@/src/components/shared/Avatar";
import { NavbarProps } from "@/src/types/user";
import SearchInput from "../shared/SearchInput";

export default function Navbar({ setSidebarOpen, user }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100">
      <div className="w-auto h-[72px] px-2 md:px-8 flex items-center justify-between">
        <div />

        <div className="flex justify-between w-full md:w-3/4 gap-4">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-4 w-full">
            {/* Mobile Toggle */}
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Menu size={22} />
            </button>

            {/* Search */}
            <div className="max-w-md w-full">
              <SearchInput placeholder="Search..." />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">
            {/* Notification */}
            <button aria-label="Notifications" className="relative">
              <Bell size={18} className="text-gray-700" />

              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary" />
            </button>

            <span className="hidden md:block w-[1px] h-6 bg-[#DADADA]" />

            {/* Role */}
            <p className="hidden md:block text-sm font-medium text-[#6B7280]">
              {user.role}
            </p>

            <span className="hidden md:block w-[1px] h-6 bg-[#DADADA]" />

            {/* User */}
            <div className="flex items-center gap-3">
              <Avatar src={user.avatar} alt={user.name} size={40} />

              <div className="hidden md:block">
                <h4 className="text-sm font-semibold text-gray-800 leading-none">
                  {user.name}
                </h4>

                <p className="text-xs text-gray-400 mt-1">{user.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
