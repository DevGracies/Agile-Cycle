import { Enhancement } from "@/src/types/product";
import EnhancementCard from "../../cards/EnhancementCard";


interface EnhancementsGridProps {
    products: Enhancement[];
}

const EnhancementsGrid = ({
    products,
}: EnhancementsGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
                <EnhancementCard
                    key={product._id ?? product._id}
                    enhancement={product}
                />
            ))}
        </div>
    );
};

export default EnhancementsGrid;