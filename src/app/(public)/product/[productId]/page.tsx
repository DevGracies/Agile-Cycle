"use client";
import { useParams } from "next/navigation";
import Container from "@/src/components/layout/Container";
import Loader from "@/src/components/ui/Loader";
import BreadCrumbs from "@/src/components/shared/product/BreadCrumbs";
import ProductGallery from "@/src/components/product/ProductGallery";
import ProductInfo from "@/src/components/product/ProductInfo";
import DescriptionCard from "@/src/components/product/DescriptionCard";
import ProductSpecs from "@/src/components/product/ProductSpecs";
import BulkOrderCard from "@/src/components/product/BulkOrderCard";
import AccessoryList from "@/src/components/product/AccessoryList";
import FeatureSection from "@/src/components/product/FeatureSection";
import VideoSection from "@/src/components/product/VideoSections";
import CustomerReviews from "@/src/components/reviews/CustomerReviews";
import RecentlyViewed from "@/src/components/product/RecentlyViewed";
import { useProduct } from "@/src/hooks/useProduct";


export default function ProductDetailsPage() {
  const params = useParams();

  const productId =
    params.productId as string;

  const {
    product,
    loading,
  } = useProduct(productId);

  if (loading.product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader text="Loading Product Details..." />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <main className="bg-[#f8f8f8] min-h-screen py-24 space-y-20">
      <Container className="max-w-4xl">
        <BreadCrumbs product={product} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-6">
          <div>
            <ProductGallery product={product} />

            <div className="mt-8">
              <DescriptionCard product={product} />
            </div>

            <div className="mt-6">
              <ProductSpecs product={product} />
            </div>

            <div className="mt-6">
              <BulkOrderCard />
            </div>
          </div>

          <div>
            <ProductInfo product={product} />

            <div className="mt-10">
              <AccessoryList
                accessories={
                  product.accessories
                }
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="overflow-hidden bg-white py-20">
        <VideoSection />

        {product.features?.map(
          (feature, index) => (
            <FeatureSection
              key={feature.id}
              title={feature.title}
              subtitle={feature.subtitle}
              description={
                feature.description
              }
              image={feature.image}
              specs={feature.specs}
              reverse={
                index % 2 !== 0
              }
            />
          ),
        )}
      </div>

      <Container>
        <CustomerReviews
          product={product}
        />

        <RecentlyViewed
          currentProductId={
            product.id
          }
        />
      </Container>
    </main>
  );
}