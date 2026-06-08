"use client";

import CompatibilityTable from "@/src/components/accessories/CompatibilityTable";
import FeatureSection from "@/src/components/accessories/FeatureSection";
import ProductInformation from "@/src/components/accessories/ProductInfo";
import ProductGallery from "@/src/components/product/ProductGallery";
import {accessories2 as product} from "@/src/mocks/product.mock"

export default function ProductDetailsPage() {
    if(!product) return;
  return (
    <main className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ProductGallery product={product} />

            <ProductInformation product={product} />
          </section>

          <section className="space-y-8">
            <CompatibilityTable
              data={product?.compatibilityTable}
            />

            <FeatureSection
              features={product?.features}
              packageContents={product?.packageContents}
              note={product?.note}
            />
          </section>
        </div>
      </div>
    </main>
  );
}