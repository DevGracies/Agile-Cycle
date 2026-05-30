import React from "react";
import { accessories } from "@/src/lib/data";
import Container from "../layout/Container";
import { Pagination } from "../dashboard/common/Dashboard";
import ProductGrid from "../product/ProductGrid";
import ProductSectionLayout from "../product/ProductSectionLayout";

const AccessoriesSection = () => {
  return (
    <section className="min-h-screen py-24">
      <Container>
        <ProductSectionLayout
          subtitle="Accessories & Essentials"
          description="Helmets, smart locks, chargers, panniers, and other premium
              accessories to enhance every journey."
        >
          {/* <Pagination
            // setCurrentPage={(prev: number) => 1}
            totalPages={1}
            currentPage={0}
          /> */}
          <ProductGrid products={accessories} />
        </ProductSectionLayout>
      </Container>
    </section>
  );
};

export default AccessoriesSection;
