import { Product } from "@/src/types/product";
import ProductCard from "../cards/ProductCard";


interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({
  products,
}: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.slice(0, 6).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;