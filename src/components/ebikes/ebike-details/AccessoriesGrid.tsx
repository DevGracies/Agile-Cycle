import { Accessories } from "@/src/types/product";
import AccessoryCard from "../../cards/AccessoryCard";


interface AccessoriesGridProps {
    products: Accessories[];
}

const AccessoriesGrid = ({
    products,
}: AccessoriesGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
                <AccessoryCard
                    key={product._id ?? product._id}
                    accessory={product}
                />
            ))}
        </div>
    );
};

export default AccessoriesGrid;