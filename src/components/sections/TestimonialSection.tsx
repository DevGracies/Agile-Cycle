import TestimonialCard from "../cards/TestimonialCard";
import { Pagination } from "../dashboard/common/Dashboard";
import Container from "../layout/Container";
import EbikesImage1 from "@/public/ebikes/ebikesm.png"
import EbikesImage2 from "@/public/ebikes/Ebike2.png"
import EbikesImage3 from "@/public/ebikes/Ebikes3.png"
import EbikeImage from "@/public/home/product-image.png"

const testimonialImages = [
  EbikesImage1,
  EbikesImage2,
  EbikesImage3,
  EbikeImage,
]

const testimonials = [
  {
    id: 1,
    name: "Chimaka Favour",
    text: "Absolutely love Agile Cycle; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their ebike needs.",
    date: "January 22, 2026",
    images: [],
  },
  {
    id: 2,
    name: "Chimaka Favour",
    text: "Best damn place to buy your ebikes and accessories at great prices",
    date: "January 22, 2026",
    images: testimonialImages,
  },
  {
    id: 3,
    name: "Chimaka Favour",
    text: "Best damn place to buy your ebikes and accessories at great prices",
    date: "January 22, 2026",
    images: testimonialImages,
  },
];

const TestimonialSection = () => {
  return (
    <section className="pt-10 md:pt-10">
      <Container>
        <div className="flex items-start justify-between gap-5 flex-wrap mb-10">
          <div>
            <h2 className="text-xl md:text-3xl leading-tight font-bold text-black">
              Agile Journeys
            </h2>

            <p className="mt-3 text-[#6B6B6B] text-sm md:text-base">
              Real stories from riders who’ve embraced the Agile Cycle
              lifestyle.
            </p>
          </div>

          <Pagination
            // setCurrentPage={(prev: number) => 1}
            totalPages={1}
            currentPage={0}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
