"use client"

import Container from "../layout/Container";
import { Pagination } from "../dashboard/common/Dashboard";
import ProductSectionLayout from "../ebikes/ebike-details/ProductSectionLayout";
import ProductGrid from "../ebikes/ebike-details/ProductGrid";
import { useProduct } from "@/src/hooks/useProduct";

const ProductSection = () => {
  const {products} = useProduct();
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
          
          <ProductGrid products={products} />
        </ProductSectionLayout>
      </Container>
  );
};

export default ProductSection;
