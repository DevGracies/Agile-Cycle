
import AccountFooter from "@/src/components/account/AccountFooter";
import FeaturesSection from "@/src/components/account/FeaturesSection";
import Navbar from "@/src/components/layout/Navbar";
import BenefitsSection from "@/src/components/sections/BenefitsSection";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {

  return (
    <div>
        <Navbar />
        <div>
            {children}
        </div>
        <SubscribeSection />
        <FeaturesSection />
        <AccountFooter />
    </div>
  );
}
