"use client";

import Link from "next/link";

import Container from "../layout/Container";

import InsightCardSkeleton from "@/src/components/skeleton/InsightCardSkeleton";
import { useBlogs } from "@/src/hooks/useBlogUsers";
import InsightCard from "../home/localShop/InsightCard";

const InsightsSection = () => {
  const { data, isPending, isError } = useBlogs(1, 3);

  const blogs = data?.blogs ?? [];

  return (
    <Container>
      <div className="flex items-end justify-between gap-5 flex-wrap mb-12">
        <div>
          <h2 className="text-xl md:text-3xl leading-tight font-bold text-black">
            Latest Insights
          </h2>

          <p className="mt-4 text-[#6B6B6B] max-w-3xl text-sm">
            Stay up to date with Agile Cycle. Product launches, riding tips,
            community highlights, industry news and more.
          </p>
        </div>

        <Link
          href="/Blog"
          className="mt-5 h-[38px] px-6 text-sm rounded-md border border-primary text-primary font-medium hover:bg-[#F7F7F7] transition flex items-center justify-center"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {isPending ? (
          Array.from({ length: 3 }).map((_, index) => (
            <InsightCardSkeleton key={index} />
          ))
        ) : isError ? (
          <p className="col-span-full text-center text-red-500">
            Failed to load blogs.
          </p>
        ) : (
          blogs.map((blog) => (
            <InsightCard
              key={blog._id}
              blog={blog}
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default InsightsSection;