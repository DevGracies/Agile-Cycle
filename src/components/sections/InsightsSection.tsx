import InsightCard from "../cards/InsightsCard";
import Container from "../layout/Container";
import image1 from "@/public/lifestyle/lifestyle1.png"
import image2 from "@/public/lifestyle/lifestyle2.png"
import image3 from "@/public/lifestyle/lifestyle3.png"

const insights = [
  {
    id: 1,
    title: "Tips and Tricks for Keeping Your EB...",
    description:
      "Keeping your ebike in great shape doesn’t have to be complicated. With regular cleaning, proper battery care,...",
    image: image1,
    date: "January 22, 2026",
  },
  {
    id: 2,
    title: "Nigeria’s Push for Greener Mobility",
    description:
      "How ebikes are becoming part of the national conversation on eco-friendly transport.",
    image: image2,
    date: "January 22, 2026",
  },
  {
    id: 3,
    title: "Agile Riders Meetup in Lagos",
    description:
      "A look back at our latest community ride, connecting cyclists across the city.",
    image: image3,
    date: "January 22, 2026",
  },
];

const InsightsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex items-end justify-between gap-5 flex-wrap mb-12">
          <div>
            <h2 className="text-xl md:text-3xl leading-tight font-bold text-black">
              Latest Insights
            </h2>

            <p className="mt-4 text-[#6B6B6B] max-w-3xl text-sm">
              Stay up to date with Agile Cycle. Product launches, riding tips
              to community highlights, industry news and more
            </p>
          </div>

          <button className="mt-5 h-[38px] px-6 text-sm rounded-md border border-[#519A09] text-[#519A09] font-medium hover:bg-[#F7F7F7] transition">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {insights.map((item) => (
            <InsightCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default InsightsSection;