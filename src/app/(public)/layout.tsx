import { ReactNode } from "react";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import FeaturesSection from "@/src/components/sections/FeatureBanner";
import Footer from "@/src/components/layout/Footer";
import NavbarShell from "@/src/components/userBars/NavbarShell";


export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarShell />
      {children}
      <SubscribeSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}
