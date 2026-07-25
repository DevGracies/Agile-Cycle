import { Accessories } from "@/src/types/product";
import AccessoryCard from "../../cards/AccessoryCard";
import CardSkeleton from "../../skeleton/CardSkeleton";


interface AccessoriesGridProps {
    products: Accessories[];
    loading?: boolean;
}

const AccessoriesGrid = ({
    products,
    loading,
}: AccessoriesGridProps) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <CardSkeleton key={index} />
                ))
            ) : products.length === 0 ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <CardSkeleton key={index} />
                ))
            ) : (
                products.map((product) => (
                    <AccessoryCard
                        key={product._id}
                        accessory={product}
                    />
                ))
            )}
        </div>
    );
};

export default AccessoriesGrid;