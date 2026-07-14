import { Accessories } from "@/src/types/product";
import AccessoryCard from "../../cards/AccessoryCard";
import { useAccessory } from "@/src/context/AccessoryProvider";
import CardSkeleton from "../../skeleton/CardSkeleton";


interface AccessoriesGridProps {
    products: Accessories[];
}

const AccessoriesGrid = ({
    products,
}: AccessoriesGridProps) => {
    const { loading } = useAccessory();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {loading.accessories ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <CardSkeleton key={index} />
                ))
            ) : products.length === 0 ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <CardSkeleton key={index} />
                ))
            ) : (
                products.slice(0, 6).map((product) => (
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