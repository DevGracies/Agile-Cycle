"use client";

import CompatibilityTable from "@/src/components/accessories/CompatibilityTable";
import FeatureSection from "@/src/components/accessories/FeatureSection";
import ProductInformation from "@/src/components/accessories/ProductInfo";
import ProductGallery from "@/src/components/ebikes/ebike-details/ProductGallery";
import Container from "@/src/components/layout/Container";
import BreadCrumbs from "@/src/components/shared/product/BreadCrumbs";
import Loader from "@/src/components/ui/Loader";
import { useEnhancement } from "@/src/hooks/useEnhancement";
import { accessories2 as product } from "@/src/mocks/product.mock"
import { Enhancement } from "@/src/types/product";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const params = useParams();

  const { enhancement, loading } = useEnhancement(params.id as string);

  if (loading.enhancement) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader text="Loading Product Details..." />
      </div>
    );
  }
  if (!product) return;
  return (
    <main className="bg-gray-50 py-24">
      <Container>
        <div className="space-y-8">
          <BreadCrumbs product={enhancement} />
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            <ProductGallery product={enhancement as Enhancement} />

            <ProductInformation product={enhancement as Enhancement} />
          </section>

          <section className="space-y-8">
            <CompatibilityTable
              data={enhancement?.compatibleModels ?? []}
            />

            <FeatureSection
              features={product?.features}
              packageContents={product?.packageContents ?? []}
              note={product?.note ?? ""}
            />
          </section>
        </div>
      </Container>
    </main>
  );
}