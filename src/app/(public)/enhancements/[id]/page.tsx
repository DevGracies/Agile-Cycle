"use client";

import CompatibilityTable from "@/src/components/accessories/CompatibilityTable";
import FeatureSection from "@/src/components/accessories/FeatureSection";
import ProductGallery from "@/src/components/ebikes/ebike-details/ProductGallery";
import EnhancementInfo from "@/src/components/enhancement/EnhancementInfo";
import Container from "@/src/components/layout/Container";
import BreadCrumbs from "@/src/components/shared/product/BreadCrumbs";
import ProductDetailsSkeleton from "@/src/components/skeleton/ProductDetailsSkeleton";
import { useEnhancement } from "@/src/context/EnhancementProvider";
import { Enhancement } from "@/src/types/product";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ProductDetailsPage() {
  const params = useParams();

  const { enhancement, fetchEnhancement, loading } = useEnhancement();

  useEffect(() => {
    if (params.id) {
      fetchEnhancement(params.id as string);
    }
  }, [params.id, fetchEnhancement])


  if (loading.enhancement) return <ProductDetailsSkeleton />

  return (
    <main className="bg-gray-50 py-24">
      <Container>
        <div className="space-y-8">
          <BreadCrumbs product={enhancement as Enhancement} />
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            <ProductGallery product={enhancement as Enhancement} />

            <EnhancementInfo product={enhancement as Enhancement} />
          </section>

          <section className="space-y-8">
            <CompatibilityTable
              data={enhancement?.compatibleModels ?? []}
            />

            <FeatureSection
              product={enhancement as Enhancement}
            />
          </section>
        </div>
      </Container>
    </main>
  );
}