import { Product } from "@/src/types";
import ProductCard from "../cards/ProductCard";


interface ProductGridProps {
  products: Product[];
  onAddToCart?: (id: string) => void;
  onView?: (id: string) => void;
}

const ProductGrid = ({
  products,
  onAddToCart,
  onView,
}: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onView={onView}
        />
      ))}
    </div>
  );
};

export default ProductGrid;