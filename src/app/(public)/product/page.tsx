"use client";

import BreadCrumbs from "@/src/components/shared/product/BreadCrumbs";
import ProductGallery from "@/src/components/product/ProductGallery";
import ProductInfo from "@/src/components/product/ProductInfo";
import DescriptionCard from "@/src/components/product/DescriptionCard";
import ProductSpecs from "@/src/components/product/ProductSpecs";
import BulkOrderCard from "@/src/components/product/BulkOrderCard";
import AccessoryList from "@/src/components/product/AccessoryList";
import { useParams } from "next/navigation";
import Container from "@/src/components/layout/Container";
import FeatureSection from "@/src/components/product/FeatureSection";
import VideoSection from "@/src/components/product/VideoSections";
import CustomerReviews from "@/src/components/reviews/CustomerReviews";
import RecentlyViewed from "@/src/components/product/RecentlyViewed";

export default function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <main className="bg-[#f8f8f8] min-h-screen py-24 space-y-20">
      <Container className="max-w-4xl">
        <BreadCrumbs />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-6">
          <div>
            <ProductGallery />

            <div className="mt-8">
              <DescriptionCard />
            </div>

            <div className="mt-6">
              <ProductSpecs />
            </div>

            <div className="mt-6">
              <BulkOrderCard />
            </div>
          </div>

          <div>
            <ProductInfo />

            <div className="mt-10">
              <AccessoryList />
            </div>
          </div>
        </div>
      </Container>
      <div className="overflow-hidden bg-white py-20">
        <VideoSection />

        <FeatureSection
          title="Powerful Motor"
          subtitle="Effortless acceleration for every ride"
          description="There is never a better way to be out and about than on an ebike. Whether you are getting fresh air, doing some exercise, or going to pick up a few things at the store, we have the perfect ebike to fit you and where you ride."
          image="/home/explore.png"
          specs={[
            { label: "Motor", value: "750W" },
            { label: "Max speed", value: "30 mph" },
            { label: "Torque", value: "85 Nm" },
          ]}
        />

        <FeatureSection
          reverse
          title="Long-Lasting Battery"
          subtitle="Go further on a single charge"
          description="Equipped with a 48V lithium battery that keeps you riding longer without interruption. This e-bike offers up to 80 km of range. Whether you're tackling a full day of commuting, exploring scenic trails, or running errands across town, this battery delivers consistent performance and reliability."
          image="/home/explore.png"
          specs={[
            { label: "Battery", value: "48V 15Ah" },
            { label: "Range", value: "50-80 km per charge" },
            { label: "Charging time", value: "5-6 hours" },
          ]}
        />
      </div>

      <Container>
        <div>
          <CustomerReviews />
          <RecentlyViewed />
        </div>
      </Container>
    </main>
  );
}
