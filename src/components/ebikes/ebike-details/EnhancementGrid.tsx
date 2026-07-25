"use client"

import { Enhancement } from "@/src/types/product";
import EnhancementCard from "../../cards/EnhancementCard";
import CardSkeleton from "../../skeleton/CardSkeleton";


interface EnhancementsGridProps {
    products: Enhancement[];
    loading?: boolean;
}

const EnhancementsGrid = ({
    products,
    loading
}: EnhancementsGridProps) => {

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