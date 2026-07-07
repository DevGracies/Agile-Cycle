"use client";
import { useParams } from "next/navigation";
import Container from "@/src/components/layout/Container";
import Loader from "@/src/components/ui/Loader";
import BreadCrumbs from "@/src/components/shared/product/BreadCrumbs";
import ProductGallery from "@/src/components/ebikes/ebike-details/ProductGallery";
import ProductInfo from "@/src/components/ebikes/ebike-details/ProductInfo";
import DescriptionCard from "@/src/components/ebikes/ebike-details/DescriptionCard";
import ProductSpecs from "@/src/components/ebikes/ebike-details/ProductSpecs";
import BulkOrderCard from "@/src/components/ebikes/ebike-details/BulkOrderCard";
import AccessoryList from "@/src/components/ebikes/ebike-details/AccessoryList";
import FeatureSection from "@/src/components/ebikes/ebike-details/FeatureSection";
import VideoSection from "@/src/components/ebikes/ebike-details/VideoSections";
import CustomerReviews from "@/src/components/reviews/CustomerReviews";
import RecentlyViewed from "@/src/components/ebikes/ebike-details/RecentlyViewed";
import { useEbike } from "@/src/hooks/useEbike";

export default function EbikeDetailsPage() {
  const params = useParams();

  const { ebike, loading, compatibleAccessories, compatibleEnhancements } = useEbike(params.id as string);

  if (loading.ebike) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader text="Loading Product Details..." />
      </div>
    );
  }

  if (!ebike) {
    return (
      <div className="h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <main className="bg-[#f8f8f8] min-h-screen py-24 space-y-20">
      <Container>
        <BreadCrumbs product={ebike} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-6">
          <ProductGallery product={ebike} />
          <ProductInfo product={ebike} />

          <div className="space-y-4">
            <DescriptionCard product={ebike} />
            <ProductSpecs product={ebike} />
            <BulkOrderCard />
          </div>

          <div className="mt-10">
            <AccessoryList accessories={[...compatibleAccessories, ...compatibleEnhancements]} />
          </div>
        </div>
      </Container>

      <div className="overflow-hidden bg-white py-20">
        <VideoSection />

        {ebike.features?.map((feature, index) => (
          <FeatureSection
            key={feature._id}
            title={feature.title}
            subtitle={feature.subtitle ?? ""}
            description={feature.description}
            image={feature.image ?? ""}
            specs={feature.specs ?? []}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      <Container>
        <CustomerReviews product={ebike} />

        <RecentlyViewed />
      </Container>
    </main>
  );
}
