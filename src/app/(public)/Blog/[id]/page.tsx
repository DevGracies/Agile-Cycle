import Image from "next/image";
import { notFound } from "next/navigation";

import { insights } from "@/src/lib/data";
import { Insight } from "@/src/types";
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

interface PageProps {
  params: Promise<{id: string;}>; 
}

export default async function BlogDetailsPage({ params,}: PageProps) {
  const { id } = await params;

  const blog: Insight | undefined = insights.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
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
        <span>Blog</span>
        <span className="text-[#519A09]">›</span>
        <span className="truncate min-w-0 text-[#717378]">
          {blog.title}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-[38px] sm:leading-[46px] lg:leading-[58px] font-semibold text-[#111111] max-w-[1100px]">
        {blog.title}
      </h1>

      {/* Meta */}
      <div className="mt-[18px] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[14px] sm:text-[16px]">
        <div className="flex items-center gap-2">
          <span className="text-[#519A09]">
          {blog.author}
        </span>

        <span className="text-[#A3A3A3]">•</span>

        <span className="text-[#519A09]">
          {blog.date}
        </span>
        </div>

        <div className="flex items-center gap-2 text-[14px]">
         <span className="w-[2px] h-5 bg-gradient-to-b from-[#519A09] to-[#01430D]"></span>
          <img src={like.src} alt="Like" className="w-7 h-7" />
          <span className="text-[#519A09] ">
            {blog.likes}
          </span>
          <img src={unlike.src} alt="Unlike" className="w-5 h-5" />
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-[24px]">
        <Image
          src={blog.heroImage}
          alt={blog.title}
          width={1440}
          height={700}
          priority
          className="w-full h-auto"
        />
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

        <div>
          <img src={commentsIcon.src} alt="Comments" className="w-5 h-5 inline-block mr-3" />
          <span>
            {blog.comments} comments
          </span>
        </div>
      </div>

      {/* Description */}
     <p className="text-[15px] sm:text-[16px] leading-[28px] sm:leading-[32px] text-[#333333] mb-[32px] sm:mb-[40px]">
        {blog.description}
      </p>

      {/* Dynamic Sections */}
      <article className="max-w-[1200px]">
        {blog.sections.map((section) => (
          <section key={section.id} className="mb-[40px] lg:mb-[60px]">
            <h2 className="mb-[18px] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[42px] lg:leading-[48px] font-medium text-[#519A09]">
              {section.title}
            </h2>

            <p className="text-[16px] leading-[32px] text-[#333333]">
              {section.content}
            </p>

            {section.image && (
              <div className="mt-[32px]">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={1200}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            )}
          </section>
        ))}

        {/* Previous / Next Article */}
       <div className="mt-[60px] lg:mt-[80px] flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <button className="flex items-center gap-2 text-[#519A09]">
          
            <img src={leftArrowIcon.src} alt="Previous" className="w-8 h-8 sm:w-10 sm:h-10" />
            

            <span className="text-[16px]">
              Previous article
            </span>
          </button>

          <button className="flex items-center gap-2 text-[#519A09]">
            <span className="text-[16px]">
              Next article
            </span>

            <img src={rightArrowIcon.src} alt="Next" className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>

        <CommentSection />


      </article>
      </div>
      </div> 
    </main>
  );
}