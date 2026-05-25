
import Navbar from "@/src/components/layout/Navbar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {

  return (
    <div>
        <Navbar />
        <div className="py-16">
            {children}
        </div>
    </div>
  );
}
