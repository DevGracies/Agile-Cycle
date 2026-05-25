"use client"

import BreadCrumbs from "@/src/components/shared/product/BreadCrumbs";
import ProductGallery from "@/src/components/product/ProductGallery";
import ProductInfo from "@/src/components/product/ProductInfo";
import DescriptionCard from "@/src/components/product/DescriptionCard";
import ProductSpecs from "@/src/components/product/ProductSpecs";
import BulkOrderCard from "@/src/components/product/BulkOrderCard";
import AccessoryList from "@/src/components/product/AccessoryList";
import { useParams } from "next/navigation";
import Container from "@/src/components/layout/Container";
import SubscribeSection from "@/src/components/sections/SubscribeSection";


export default function ProductDetailsPage() {
  const { id } = useParams();
  
  return (
    <main className="bg-[#f8f8f8] min-h-screen py-8 space-y-20">
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
      <SubscribeSection />
    </main>
  );
}