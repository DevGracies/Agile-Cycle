
import AccountFooter from "@/src/components/account/AccountFooter";
import FeaturesSection from "@/src/components/account/FeaturesSection";
import Navbar from "@/src/components/layout/Navbar";
import BenefitsSection from "@/src/components/sections/BenefitsSection";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import Navbar from "@/src/components/userBars/Navbar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {

  return (
    <div>
        {/* <Navbar /> */}
        <div className="py-16">
            {children}
        </div>
        <SubscribeSection />
        <FeaturesSection />
        <AccountFooter />
    </div>
  );
}
