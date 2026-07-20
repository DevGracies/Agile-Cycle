"use client"

import Container from "../layout/Container";
import { Pagination } from "../dashboard/common/Dashboard";
import ProductSectionLayout from "../ebikes/ebike-details/ProductSectionLayout";
import EbikeGrid from "../ebikes/ebike-details/EbikeGrid";
import { useFeaturedProducts } from "@/src/hooks/useFeaturedProducts";

const ProductSection = () => {
  const { ebikes } = useFeaturedProducts();

  return (
    <Container>
      <ProductSectionLayout
        title="Gear That Completes the Ride"
        subtitle="Latest Launches"
        description="Experience innovation at its freshest. Cutting-edge designs built to redefine your ride."
        rightContent={
          <Pagination
            // setCurrentPage={(prev: number) => 1}
            totalPages={1}
            currentPage={0}
          />
        }
      >

        <EbikeGrid products={ebikes} />
      </ProductSectionLayout>
    </Container>
  );
};

export default ProductSection;
