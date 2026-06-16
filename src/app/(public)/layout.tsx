
import Navbar from "@/src/components/userBars/Navbar";
import Footer from "@/src/components/layout/Footer";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import FeaturesSection from "@/src/components/sections/FeatureBanner";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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