import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";
import FeaturesSection from "@/src/components/sections/FeatureBanner";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import { ReactNode } from "react";

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div>
        <Navbar />
        {children}
        <SubscribeSection />
        <FeaturesSection />
        <Footer />
      </div>
    </>
  );
}