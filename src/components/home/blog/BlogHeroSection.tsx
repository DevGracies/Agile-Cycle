"use client";

import Image from "next/image";
import blogHeroImage from "@/public/home/blogHero.png";
import InsightCard from "../localShop/InsightCard";
import leftArrow from "@/public/home/Left-arrow.png";
import rightArrow from '@/public/home/Right-arrow.png';
import line from "@/public/home/line.png";
import line1 from "@/public/home/line1.png";
import { useBlogs } from "@/src/hooks/useBlogUsers";
import { useState } from "react";
import InsightCardSkeleton from "../../skeleton/InsightCardSkeleton";

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
  const [page, setPage] = useState(1);
const { data, isPending, isFetching, isError } = useBlogs(page);
  
  const blogs = data?.blogs ?? [];
  const pagination = data?.pagination;
  const start = pagination && blogs.length > 0
    ? (pagination.page - 1) * pagination.limit + 1
    : 0;

  const end = pagination && blogs.length > 0
      ? start + blogs.length - 1
      : 0;

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

                <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {isPending ? (
                    <>
                      {Array.from({ length: 6 }).map((_, index) => (
                        <InsightCardSkeleton key={index} />
                      ))}
                    </>
                  ) : isError ? (
                    <p className="col-span-full text-red-500 text-center">
                      Failed to load blogs.
                    </p>
                  ) : (
                    blogs.map((blog) => (
                      <InsightCard key={blog._id} blog={blog} />
                    ))
                  )}
                </div>

                {isFetching && !isPending && (
                  <div className="mb-4 text-sm text-[#519A09]">
                    Loading new page...
                  </div>
                )}

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
             <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
               disabled={!pagination || pagination.page === 1}
                className="flex items-center justify-center text-[#4CA832] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Image
                  src={leftArrow}
                  alt="Previous"
                  width={48}
                  height={48}
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
              <button
                onClick={() => {
                  if (pagination && pagination.page < pagination.pages) {
                    setPage((prev) => prev + 1);
                  }
                }}
                disabled={!pagination || pagination.page >= pagination.pages}
                className="flex items-center justify-center text-[#4CA832] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {/* <img
                  src={rightArrow.src}
                  alt="Next"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                /> */}
                <Image
                  src={rightArrow}
                  alt="Previous"
                  width={48}
                  height={48}
                />
              </button>

            </div>

            {/* Right Side - Page Info */}
            <div className="text-xs sm:text-sm text-[#4CA832] text-center">
             {start}-{end}

              <span className="text-gray-500 mx-1">of</span>

              {pagination?.total ?? 0}

              <span className="text-[#01430D] ml-3">Page</span>

              <span className="text-[#01430D] border px-2 ml-1 rounded-sm">
                {pagination?.page ?? 1}
              </span>
            </div>

          </div>
   
          </div>
        </section>
  );
}