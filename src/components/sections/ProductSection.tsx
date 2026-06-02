"use client"

import Container from "../layout/Container";
import { Pagination } from "../dashboard/common/Dashboard";
import ProductSectionLayout from "../product/ProductSectionLayout";
import ProductGrid from "../product/ProductGrid";
import { useProduct } from "@/src/hooks/useProduct";

const ProductSection = () => {
  const {products} = useProduct();
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <ProductSectionLayout
          title="Gear That Completes the Ride"
          subtitle="Latest Launches"
          description="Experience innovation at its freshest. Cutting-edge designs built to redefine your ride."
        >
          {/* <Pagination
            // setCurrentPage={(prev: number) => 1}
            totalPages={1}
            currentPage={0}
          /> */}
          <ProductGrid products={products} />
        </ProductSectionLayout>
      </Container>
    </section>
  );
};

export default ProductSection;
