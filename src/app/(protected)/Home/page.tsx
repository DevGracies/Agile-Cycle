import HeroSection from "@/src/components/sections/HeroSection";
import CategorySection from "@/src/components/sections/CategorySection";
import ServicesSection from "@/src/components/sections/ServicesSection";
import ProductSection from "@/src/components/sections/ProductSection";
import AccessoriesSection from "@/src/components/sections/AccessoriesSection";
import EnhancementsSection from "@/src/components/sections/EnhancementsSection";
import OurShopSection from "@/src/components/sections/OurShopSection";
import CommunitySection from "@/src/components/sections/CommunitySection";
import TestimonialSection from "@/src/components/sections/TestimonialSection";
import InsightsSection from "@/src/components/sections/InsightsSection";
import Navbar from "@/src/components/layout/Navbar";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import FeaturesSection from "@/src/components/sections/FeatureBanner";
import Footer from "@/src/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <ServicesSection />
      <ProductSection />
      <AccessoriesSection />
      <EnhancementsSection />
      <OurShopSection />
      <CommunitySection />
      <TestimonialSection />
      <InsightsSection />
      <SubscribeSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}
