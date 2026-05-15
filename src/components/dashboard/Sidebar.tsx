"use client";

import Image from "next/image";
import Link from "next/link";
import {
  X,
} from "lucide-react";

import logo from "@/public/Agile-Cycle-Logo.png";
import { usePathname } from "next/navigation";
import { DASHBOARD_NAVS } from "@/src/lib/utils";

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-[260px]
          bg-white border-r border-gray-100
          transition-transform duration-300
          flex flex-col

          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >

        {/* HEADER */}
        <div className="h-[90px] flex items-center justify-between px-6 border-b border-gray-100">

          <Link
            href="/"
            className="flex flex-col items-center mx-auto"
          >
            <Image
              src={logo}
              alt="Logo"
              width={110}
              height={110}
              className="object-contain"
            />
          </Link>

          {/* CLOSE SIDEBAR BUTTON ON MOBILE*/}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* NAVS */}
        <nav className="flex-1 py-6 space-y-2">

          {DASHBOARD_NAVS.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.path;

            return (
              <Link
                key={item.id}
                href={item.path}
                className={`
                  relative flex items-center gap-4
                  px-4 h-[42px]
                  text-sm
                  font-medium
                  transition-all duration-200

                  ${
                    active
                      ? "bg-linear-to-r from-[#519A09] to-white"
                      : "text-gray-400 hover:bg-gray-50 hover:text-gray-700"
                  }
                `}
              >

                {/* LEFT BORDER */}
                {active && (
                  <div className="absolute left-0 top-0 h-full w-1 db-logout-btn" />
                )}

                <Icon
                  size={20}
                  className={active ? "text-white" : ""}
                />

                <span className={`${active ? "text-white font-bold" : ""}`}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div className="p-5">

          <button
            className="
              w-full h-[50px]
              rounded-xl
              db-logout-btn
              text-white
              font-semibold
              flex items-center justify-center gap-2
              hover:opacity-90
              transition
            "
          >
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}