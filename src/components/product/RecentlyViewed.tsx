import { products } from "@/src/mocks/index.mock";
import ProductGrid from "./ProductGrid";
import { accessories } from "@/src/lib/data";
import ProductCard from "../cards/ProductCard";


const RecentlyViewed = () => {
  return (
    <section className="mt-32">
      <h2 className="text-3xl font-bold mb-12">
        Recently viewed
      </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        </div>
    </section>
  );
};

export default RecentlyViewed;