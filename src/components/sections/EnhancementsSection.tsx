import React from "react";
import { enhancements } from "@/src/lib/data";
import Container from "../layout/Container";
import { Pagination } from "../dashboard/common/Dashboard";
import ProductSectionLayout from "../product/ProductSectionLayout";
import ProductGrid from "../product/ProductGrid";

const EnhancementsSection = () => {
  return (
    <section className="min-h-screen mb-35">
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
          <ProductGrid products={enhancements} />
        </ProductSectionLayout>
      </Container>
    </section>
  );
};

export default EnhancementsSection;
