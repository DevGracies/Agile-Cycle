import EbikeCard from "../../cards/EbikeCard";
import EbikeCardSkeleton from "../../skeleton/EbikeCardSkeleton";
import { useFeaturedProducts } from "@/src/hooks/useFeaturedProducts";
import { useEffect } from "react";


const RecentlyViewed = () => {
  const { ebikes, isLoading, fetchFeaturedProducts } = useFeaturedProducts();

  useEffect(() => {
    fetchFeaturedProducts()
  }, []);
  
  return (
    <section className="mt-32">
      <h2 className="text-3xl font-bold mb-12">
        Recently viewed
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <EbikeCardSkeleton key={index} />
          ))
        ) : ebikes.length === 0 ? (
          Array.from({ length: 4 }).map((_, index) => (
            <EbikeCardSkeleton key={index} />
          ))
        )
          : (
            ebikes.slice(0, 4).map((product) => (
              <EbikeCard
                key={product._id}
                ebike={product}
              />
            ))
          )}
      </div>
    </section>
  );
};

export default RecentlyViewed;