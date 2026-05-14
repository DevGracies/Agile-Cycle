"use client";

import Navbar from "@/src/components/dashboard/Navbar";
import Sidebar from "@/src/components/dashboard/Sidebar";
import { ReactNode, useState } from "react";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`${lexend.className} flex h-screen bg-[#F2F5F3]`}>
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto md:ml-60">
          {children}
          <p className="text-gray-500 text-right text-sm px-10 py-4">
            &copy; {new Date().getFullYear()} AgileCycle. All Rights Reserved.
          </p>
        </main>
      </div>
    </div>
  );
}
