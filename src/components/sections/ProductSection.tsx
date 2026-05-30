import Container from "../layout/Container";
import ProductCard from "../cards/ProductCard";
import SectionHeader from "../shared/SectionHeader";
import { products } from "@/src/lib/data";
import { Pagination } from "../dashboard/common/Dashboard";

const ProductSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeader
            title="Gear That Completes the Ride"
            subtitle="Latest Launches"
          />
          <Pagination
            // setCurrentPage={(prev: number) => 1}
            totalPages={1}
            currentPage={0}
          />
        </div>
        <p className="text-gray-600 max-w-3xl leading-6 text-sm mb-10 sm:mb-14">
          Experience innovation at its freshest. Cutting-edge designs built to
          redefine your ride.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
