import { Ebike } from "@/src/types/product";
import EbikeCard from "../../cards/EbikeCard";
import EbikeCardSkeleton from "../../skeleton/EbikeCardSkeleton";
import { useEbike } from "@/src/context/EbikeProvider";


interface EbikeGridProps {
  products: Ebike[];
}

const EbikeGrid = ({
  products,
}: EbikeGridProps) => {

  const { loading } = useEbike();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading.ebikes ? (
        Array.from({ length: 6 }).map((_, index) => (
          <EbikeCardSkeleton key={index} />
        ))
      ) : products.length === 0 ? (
        Array.from({ length: 6 }).map((_, index) => (
          <EbikeCardSkeleton key={index} />
        ))
      )
        : (
          products.slice(0, 6).map((product) => (
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