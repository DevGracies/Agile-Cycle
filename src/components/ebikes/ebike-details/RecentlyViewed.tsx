import { useEbike } from "@/src/context/EbikeProvider";
import EbikeCard from "../../cards/EbikeCard";


const RecentlyViewed = () => {
  const {ebikes} = useEbike();
  return (
    <section className="mt-32">
      <h2 className="text-3xl font-bold mb-12">
        Recently viewed
      </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ebikes.slice(0, 4).map((ebike) => (
          <EbikeCard key={ebike._id} ebike={ebike} />
        ))}
        </div>
    </section>
  );
};

export default RecentlyViewed;