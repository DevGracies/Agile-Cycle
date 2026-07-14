import { Enhancement } from "@/src/types/product";
import EnhancementCard from "../../cards/EnhancementCard";
import { useEnhancement } from "@/src/context/EnhancementProvider";
import CardSkeleton from "../../skeleton/CardSkeleton";


interface EnhancementsGridProps {
    products: Enhancement[];
}

const EnhancementsGrid = ({
    products,
}: EnhancementsGridProps) => {
    const { loading } = useEnhancement()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {loading.enhancements ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <CardSkeleton key={index} />
                ))
            ) : products.length === 0 ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <CardSkeleton key={index} />
                ))
            ) : (
                products.slice(0, 6).map((product) => (
                    <EnhancementCard
                        key={product._id}
                        enhancement={product}
                    />
                ))
            )}
        </div>
    );
};

export default EnhancementsGrid;