"use client";

import Navbar from "@/src/components/dashboard/Navbar";
import Sidebar from "@/src/components/dashboard/Sidebar";
import { ReactNode, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* Main area */}
      <div className="flex flex-col flex-1">

        {/* Navbar */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}