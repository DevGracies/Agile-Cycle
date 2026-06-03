import { ArrowRight } from "lucide-react";

interface ExploreService {
  title: string;
  image: string;
  description: string;
}

interface ExploreSectionProps {
  exploreServices: ExploreService[];
}

export default function ExploreSection({
  exploreServices,
}: ExploreSectionProps) {
  return (
    <div className="space-y-6">

      {exploreServices.map((service, index) => (

        <div
          key={index}
          className="flex flex-col xl:flex-row gap-5"
        >

          {/* IMAGE */}
          <div className="w-full xl:max-w-[489px] h-[220px] sm:h-[180px] xl:h-[100px]">

            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />

          </div>

          {/* TEXT */}
          <div className="flex-1">

            <p className="text-[16px] leading-[28px] text-[#060709]/80">
              {service.description}
            </p>

            <button className="mt-3 flex items-center gap-2 text-[#519A09] text-[16px] font-semibold">

              Read more

              <ArrowRight
                className="w-[14px] h-[12px]"
                strokeWidth={2}
              />

            </button>

          </div>

        </div>

      ))}
    </div>
  );
}