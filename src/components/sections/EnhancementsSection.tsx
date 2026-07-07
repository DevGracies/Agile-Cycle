"use client";
import React from "react";
import Container from "../layout/Container";
import { Pagination } from "../dashboard/common/Dashboard";
import ProductSectionLayout from "../ebikes/ebike-details/ProductSectionLayout";
import EnhancementsGrid from "../ebikes/ebike-details/EnhancementGrid";
import { useFeaturedProducts } from "@/src/hooks/useFeaturedProducts";

const EnhancementsSection = () => {
  const { enhancements } = useFeaturedProducts();
  return (
    <Container>
      <ProductSectionLayout
        subtitle="Enhancements"
        description="Upgrade your ride with smart add-ons. Boost your e-bike's
              performance, safety, and style, giving you more value every time
              you ride."
        rightContent={
          <Pagination
            // setCurrentPage={(prev: number) => 1}
            totalPages={1}
            currentPage={0}
          />
        }
      >
        <EnhancementsGrid products={enhancements} />
      </ProductSectionLayout>
    </Container>
  );
};

export default EnhancementsSection;
