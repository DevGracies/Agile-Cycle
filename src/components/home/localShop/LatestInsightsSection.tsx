import { insights } from "@/src/lib/data";
import InsightCard from "./InsightCard";

export default function LatestInsightsSection() {
  return (
    <section className="py-15 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#000000]">
              Latest Insights
            </h2>

            <p className="mt-4 text-[#000000]  max-w-[700px]">
              Stay up to date with Agile Cycle. Product launches,
              riding tips, community highlights, industry news
              and more.
            </p>
          </div>

          <button className="px-8 py-3 border border-[#519A09] rounded-md text-[#519A09] font-medium">
            View All
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
         {insights.slice(0, 3).map((item, index) => (
            <InsightCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}