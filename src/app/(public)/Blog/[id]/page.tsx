"use client"
import Image from "next/image";

import CommentSection from "@/src/components/home/localShop/CommentSection";
import commentsIcon from "@/public/home/comment.png";
import like from "@/public/home/Like.png";
import unlike from "@/public/home/unlike.png";
import facebookIcon from "@/public/home/Facebook.png";
import instagramIcon from "@/public/home/Instagram.png";
import youtubeIcon from "@/public/home/Youtube.png";
import twitterIcon from "@/public/home/Twitter.png";
import leftArrowIcon from "@/public/home/Left-arrow.png";
import rightArrowIcon from "@/public/home/Right-arrow.png";
import CommentsTrigger from "@/src/components/home/localShop/CommentsTrigger";
import { formatDate } from "@/src/utils/formatDate";

import { useParams, notFound } from "next/navigation";
import { useBlog } from "@/src/hooks/useBlogUsers";
import { insights } from "@/src/lib/data";
import BlogDetailsSkeleton from "@/src/components/skeleton/BlogDetailsSkeleton";

export default function BlogDetailsPage() {
  const params = useParams();

  const id = params.id as string;

  const {
  data: blog,
  isPending,
  isError,
} = useBlog(id);

  const fallbackBlog = insights.find(
  (item) => item._id === id
);

const currentBlog = blog ?? fallbackBlog;

if (isError && !fallbackBlog) {
  return <p>Something went wrong.</p>;
}

if (!isPending && isError && !fallbackBlog) {
  notFound();
}

  return (
    // <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[35px] pt-[20px] pb-[80px] bg-red-200"></main>
   <main className="w-full pt-5 pb-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[12px] sm:text-[14px] text-[#717378] mb-[20px] sm:mb-[28px]">
        <span>HOME</span>
        <span className="text-[#519A09]">›</span>
        <span>currentBlog</span>
        <span className="text-[#519A09]">›</span>
        <span className="truncate min-w-0 text-[#717378]">
          {currentBlog?.title}
        </span>
      </div>

      {/* Title */}
     <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-[38px] sm:leading-[46px] lg:leading-[58px] font-semibold text-[#111111] max-w-[1100px]">
  {isPending ? (
    <div className="h-10 w-3/4 rounded bg-gray-200 animate-pulse" />
  ) : (
    currentBlog.title
  )}
</h1>

      {/* Meta */}
      <div className="mt-[18px] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[14px] sm:text-[16px]">
        <div className="flex items-center gap-2">
          <span className="text-[#519A09]">
          {/* {currentBlog.author.name} */}
        </span>

        <span className="text-[#A3A3A3]">•</span>
<span className="text-[#519A09]">
  {isPending ? (
    <div className="h-4 w-28 rounded bg-gray-200 animate-pulse" />
  ) : (
    formatDate(currentBlog.publishedAt)
  )}
</span>
        </div>

        <div className="flex items-center gap-2 text-[14px]">
         <span className="w-[2px] h-5 bg-gradient-to-b from-[#519A09] to-[#01430D]"></span>
          <img src={like.src} alt="Like" className="w-7 h-7" />
          <span className="text-[#519A09]">
  {isPending ? (
    <div className="h-4 w-8 rounded bg-gray-200 animate-pulse" />
  ) : (
    currentBlog.stats.likes
  )}
</span>
          <img src={unlike.src} alt="Unlike" className="w-5 h-5" />
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-[24px]">
       {isPending ? (
  <div className="w-full aspect-[16/8] rounded-xl bg-gray-200 animate-pulse" />
) : (
  <Image
    src={currentBlog.image.secure_url}
    alt={currentBlog.title}
    width={1440}
    height={700}
    priority
    className="w-full h-auto"
  />
)}
      </div>

      <div className="mx-auto max-w-[1100px] w-full">

      {/* Divider */}
      <div className="h-px bg-[#519A09] mt-[40px] " />

      {/* Share */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between py-[24px]">
        <div className="flex items-center gap-3">
          <span className="text-[14px] text-[#519A09]">
          Share
        </span>
        <img src={facebookIcon.src} alt="Facebook" className="w-5 h-5" />
        <img src={twitterIcon.src} alt="Twitter" className="w-5 h-5" />
        <img src={instagramIcon.src} alt="Instagram" className="w-5 h-5" />
        <img  src={youtubeIcon.src} alt="YouTube" className="w-5 h-5" />
         </div>

        {isPending ? (
  <div className="h-8 w-32 rounded bg-gray-200 animate-pulse" />
) : (
  <CommentsTrigger
    comments={currentBlog.stats.comments}
    blogTitle={currentBlog.title}
    icon={commentsIcon.src}
    blogId={currentBlog._id}
  />
)}
      </div>

      {/* Description */}
    {isPending ? (
  <div className="space-y-3 mb-[40px]">
    <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
    <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
    <div className="h-4 w-4/5 rounded bg-gray-200 animate-pulse" />
  </div>
) : (
  <p className="text-[15px] sm:text-[16px] leading-[28px] sm:leading-[32px] text-[#333333] mb-[32px] sm:mb-[40px]">
    {currentBlog.description}
  </p>
)}

      {/* Dynamic Sections */}
      <article className="max-w-[1200px]">

        {isPending ? (
  <div className="space-y-4">
    {Array.from({ length: 12 }).map((_, index) => (
      <div
        key={index}
        className="h-4 w-full rounded bg-gray-200 animate-pulse"
      />
    ))}
  </div>
) : (
  <div className="text-[16px] leading-[32px] text-[#333333] whitespace-pre-line">
    {currentBlog.content}
  </div>
)}

        {/* Previous / Next Article */}
        <div className="mt-[60px] lg:mt-[80px] flex flex-col items-center gap-4 sm:flex-row sm:justify-between">

          <button className="flex items-center gap-2 text-[#519A09]">
            <img
              src={leftArrowIcon.src}
              alt="Previous"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />

            <span className="text-[16px]">
              Previous article
            </span>
          </button>

          <button className="flex items-center gap-2 text-[#519A09]">
            <span className="text-[16px]">
              Next article
            </span>

            <img
              src={rightArrowIcon.src}
              alt="Next"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </button>

        </div>

  <CommentSection />

</article>
      </div>
      </div> 
    </main>
  );
}