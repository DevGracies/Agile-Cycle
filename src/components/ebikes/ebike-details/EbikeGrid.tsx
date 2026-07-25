import { Ebike } from "@/src/types/product";
import EbikeCard from "../../cards/EbikeCard";
import EbikeCardSkeleton from "../../skeleton/EbikeCardSkeleton";


interface EbikeGridProps {
  products: Ebike[];
  loading?: boolean;
}

const EbikeGrid = ({
  products,
  loading
}: EbikeGridProps) => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <EbikeCardSkeleton key={index} />
        ))
      ) : products.length === 0 ? (
        Array.from({ length: 6 }).map((_, index) => (
          <EbikeCardSkeleton key={index} />
        ))
      )
        : (
          products.map((product) => (
            <EbikeCard
              key={product._id}
              ebike={product}
            />
          ))
        )}
    </div>
  );
};

export default EbikeGrid;