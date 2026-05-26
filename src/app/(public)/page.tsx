import Navbar from '@/src/components/layout/Navbar'
import HeroSection from '@/src/components/sections/HeroSection'
import CategorySection from '@/src/components/sections/CategorySection'
import ServicesSection from '@/src/components/sections/ServicesSection'
import ProductSection from '@/src/components/sections/ProductSection'
import AccessoriesSection from '../../components/sections/AccessoriesSection'
import EnhancementsSection from '../../components/sections/EnhancementsSection'
import OurShopSection from '../../components/sections/OurShopSection'
import CommunitySection from '../../components/sections/CommunitySection'
import TestimonialSection from '../../components/sections/TestimonialSection'
import InsightsSection from '../../components/sections/InsightsSection'
import SubscribeSection from '../../components/sections/SubscribeSection'
import BenefitsSection from '@/src/components/sections/BenefitsSection'

export default function HomePage() {
  return (
    <main className="bg-[#f5f7f2] overflow-hidden">
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
      <BenefitsSection />
    </main>
  )
}