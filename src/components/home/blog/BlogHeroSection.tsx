import Image from "next/image";
import blogHeroImage from "@/public/home/blogHero.png";
import { insights } from "@/src/lib/data";
import InsightCard from "../localShop/InsightCard";
import leftArrow from "@/public/home/Left-arrow.png";
import rightArrow from '@/public/home/Right-arrow.png';
import line from "@/public/home/line.png";
import line1 from "@/public/home/line1.png";

const categories = [
  "All",
  "News & Updates",
  "Buying Guides",
  "Rider Stories",
  "Tech & Innovation",
  "Tips & Maintenance",
  "Lifestyle",
];

export default function BlogHeroSection() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] sm:text-sm mb-8 sm:mb-14">
          <span className="text-[#717378] uppercase">Home</span>

          <span className="text-[#519A09]">&gt;</span>

          <span className="text-[#717378]">Blog</span>
        </div>

        {/* Hero Banner */}
        <div className="overflow-hidden ">

          <Image
            src={blogHeroImage}
            alt="Blog Hero"
            width={1300}
            height={268}
            priority
            className=" w-full h-auto"
          />
        </div>

        {/* Categories */}
       {/* Categories */}
<div className="mt-10 sm:mt-14">
  <div className="flex flex-wrap gap-3 justify-center lg:justify-between">
    {categories.map((category, index) => (
      <button
        key={category}
        className={`
          whitespace-nowrap
          px-4 sm:px-5
          py-2 sm:py-3
          rounded-lg
          border
          text-xs sm:text-sm
          transition
          font-medium
          ${
            index === 0
              ? "bg-[#01430D] text-white border-[#01430D]"
              : "border-[#519A09] text-[#01430D] bg-white hover:bg-[#F6FAF4]"
          }
        `}
      >
        {category}
      </button>
    ))}
  </div>
</div>

         {/* Cards */}
                <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                 {insights.map((item) => (
                    <InsightCard
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      date={item.date ?? ""}
                    />
                  ))}
                </div>

        {/* Pagination */}
          <div className="
  mt-12 sm:mt-16 mb-10
  flex flex-col gap-5
  md:flex-row md:items-center md:justify-end
  relative
">

            {/* Center - Pagination Arrows */}
           <div className="
  flex items-center justify-center gap-2
  md:absolute md:left-1/2 md:-translate-x-1/2">

              {/* Left Arrow */}
              <button className="flex items-center justify-center text-[#4CA832]">
                <img
                  src={leftArrow.src}
                  alt="Previous"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </button>

              <div className="flex items-center gap-1">
                <img
                  src={line.src}
                  alt="Line"
                  className="w-full h-full object-cover"
                />
                <img
                  src={line1.src}
                  alt="Line"
                  className="w-full h-full object-cover"
                />
                <img
                  src={line1.src}
                  alt="Line"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Arrow */}
              <button className="flex items-center justify-center text-[#4CA832]">
                <img
                  src={rightArrow.src}
                  alt="Next"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </button>

            </div>

            {/* Right Side - Page Info */}
            <div className="text-xs sm:text-sm text-[#4CA832] text-center">
              1-12
              <span className="text-gray-500 mx-1">of</span>
              48
              <span className="text-[#01430D] ml-3">Page</span>
              <span className="text-[#01430D] border px-2 ml-1 rounded-sm">
                1
              </span>
            </div>

          </div>
   
          </div>
        </section>
  );
}