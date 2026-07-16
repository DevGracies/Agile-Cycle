"use client";

import CompatibilityTable from "@/src/components/accessories/CompatibilityTable";
import FeatureSection from "@/src/components/accessories/FeatureSection";
import AccessoryInfo from "@/src/components/accessories/AccessoryInfo";
import ProductGallery from "@/src/components/ebikes/ebike-details/ProductGallery";
import Container from "@/src/components/layout/Container";
import BreadCrumbs from "@/src/components/shared/product/BreadCrumbs";
import { Accessories } from "@/src/types/product";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useAccessory } from "@/src/context/AccessoryProvider";
import ProductDetailsSkeleton from "@/src/components/skeleton/ProductDetailsSkeleton";

export default function ProductDetailsPage() {
  const params = useParams();

  const {
    accessory,
    fetchAccessory,
    loading
  } = useAccessory();

  useEffect(() => {
    if (params.id) {
      fetchAccessory(params.id as string);
    }
  }, [params.id, fetchAccessory]);

  if (loading.accessory) return <ProductDetailsSkeleton />
  return (
    <main className="bg-gray-50 py-24">
      <Container>
        <div className="space-y-8">
          <BreadCrumbs product={accessory as Accessories} />
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ProductGallery product={accessory as Accessories} />

            <AccessoryInfo product={accessory as Accessories} />
          </section>

          <section className="space-y-8">
            <CompatibilityTable
              data={accessory?.compatibleModels ?? []}
            />

            <FeatureSection
              product={accessory as Accessories}
            />
          </section>
        </div>
      </Container>
    </main>
  );
}