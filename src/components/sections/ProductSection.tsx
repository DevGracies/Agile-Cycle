import Container from "../layout/Container";
import ProductCard from "../cards/ProductCard";
import SectionHeader from "../shared/SectionHeader";
import { Pagination } from "../dashboard/common/Dashboard";
import ProductSectionLayout from "../product/ProductSectionLayout";
import ProductGrid from "../product/ProductGrid";
import { products } from "@/src/mocks/index.mock";

const ProductSection = () => {
  return (
    <section className="min-h-screen py-24">
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
