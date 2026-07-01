"use client";

import React from "react";
import Container from "../layout/Container";
import { Pagination } from "../dashboard/common/Dashboard";
import ProductSectionLayout from "../ebikes/ebike-details/ProductSectionLayout";
import AccessoriesGrid from "../ebikes/ebike-details/AccessoriesGrid";
import { useFeaturedProducts } from "@/src/hooks/useFeaturedProducts";

const AccessoriesSection = () => {
  const { accessories } = useFeaturedProducts();
  
  return (
    <Container>
      <ProductSectionLayout
        subtitle="Accessories & Essentials"
        description="Helmets, smart locks, chargers, panniers, and other premium
              accessories to enhance every journey."
        rightContent={
          <Pagination
            // setCurrentPage={(prev: number) => 1}
            totalPages={1}
            currentPage={0}
          />
        }
      >
        <AccessoriesGrid products={accessories} />
      </ProductSectionLayout>
    </Container>
  );
};

export default AccessoriesSection;
