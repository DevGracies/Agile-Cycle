import Image from "next/image";
import blogHeroImage from "@/public/home/blogHero.png";
import { insights } from "@/src/lib/data";
import InsightCard from "../localShop/InsightCard";
import leftArrow from "@/public/home/Left-arrow.png";
import rightArrow from '@/public/home/Right-arrow.png';

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
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm mb-14">
          <span className="text-[#717378] uppercase">Home</span>

          <span className="text-[#519A09]">&gt;</span>

          <span className="text-[#717378]">Blog</span>
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-[4px] h-[260px] lg:h-[320px]">

          <Image
            src={blogHeroImage}
            alt="Blog Hero"
            fill
            priority
            className="object-center"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-between gap-4 mt-14">

          {categories.map((category, index) => (
            <button
              key={category}
              className={`
                px-5
                py-3
                rounded-[8px]
                border
                text-sm
                transition
                font-medium
                ${
                  index === 0
                    ? "bg-[#01430D] text-white border-[#01430D] text-base"
                    : "border-[#519A09] text-[#01430D] bg-white hover:bg-[#F6FAF4]"
                }
              `}
            >
              {category}
            </button>
          ))}

        </div>

         {/* Cards */}
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
<div className="flex items-center justify-between mt-16 mb-10">

  <div></div>

  {/* Center - Pagination Arrows */}
  <div className="flex items-center gap-4">
    
    {/* Left Arrow Icon */}
    <button className=" flex items-center justify-center text-[#4CA832] ">
     <img src={leftArrow.src} alt="Previous" className="w-13 h-13" />
    </button>

    <div className="w-8 h-[2px] bg-[#4CA832]"></div>

    {/* Right Arrow Icon */}
    <button className=" flex items-center justify-center text-[#4CA832]">
      <img src={rightArrow.src} alt="Next" className="w-13 h-13" />
    </button>

  </div>

  {/* Right side - Page Info */}
  <div className="text-sm text-gray-600">
    1-12 of 48 <span className="font-medium text-black ml-1">Page 1</span>
  </div>

</div>

              

   
          </div>
        </section>
  );
}