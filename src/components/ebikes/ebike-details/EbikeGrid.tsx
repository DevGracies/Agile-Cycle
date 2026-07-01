import { Ebike } from "@/src/types/product";
import EbikeCard from "../../cards/EbikeCard";


interface EbikeGridProps {
  products: Ebike[];
}

const EbikeGrid = ({
  products,
}: EbikeGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.slice(0, 6).map((product) => (
        <EbikeCard
          key={product._id}
          ebike={product}
        />
      ))}
    </div>
  );
};

export default EbikeGrid;