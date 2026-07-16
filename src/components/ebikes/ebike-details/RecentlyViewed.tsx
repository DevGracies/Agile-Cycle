import { useEbike } from "@/src/context/EbikeProvider";
import EbikeCard from "../../cards/EbikeCard";
import EbikeCardSkeleton from "../../skeleton/EbikeCardSkeleton";


const RecentlyViewed = () => {
  const { ebikes, loading } = useEbike();
  return (
    <section className="mt-32">
      <h2 className="text-3xl font-bold mb-12">
        Recently viewed
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading.ebikes ? (
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