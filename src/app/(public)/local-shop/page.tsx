import AboutSection from "@/src/components/home/localShop/ServiceOverviewSection";
import HeroSection from "@/src/components/home/localShop/HeroSection";
import VideoSection from "@/src/components/home/localShop/VideoSection";
import LatestInsightsSection from "@/src/components/home/localShop/LatestInsightsSection";




export default function LocalShopPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <LatestInsightsSection />
    </main>
  );
}