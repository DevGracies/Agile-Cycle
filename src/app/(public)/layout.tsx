import { ReactNode } from "react";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import FeaturesSection from "@/src/components/sections/FeatureBanner";
import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <SubscribeSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}
