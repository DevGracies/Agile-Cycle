
import ClubNotice from "@/src/components/home/club/ClubNotice";
import ClubRules from "@/src/components/home/club/ClubRules";      
import { clubPosts, comments } from "@/src/lib/data";            
import QuestionDetails from "@/src/components/home/club/QuestionDetails";
import CommentsSection from "@/src/components/home/club/CommentsSection";
import CommentCard from "@/src/components/home/club/CommentCard";
import Image from "next/image";
import banner from "@/public/home/club/banner.png";

interface PageProps {
  params: Promise<{ id: number }>;
}

export default async function ClubDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const postId = Number(id);

  const post = clubPosts.find((item) => item.id === postId);

  if (!post) {
    //  notFound();
    return null;
  }

  // Get other posts (excluding current post)
  const otherPosts = clubPosts.filter((item) => item.id !== postId);

  return (
    <main>
     

      <section className="max-w-[1280px] mx-auto px-6 py-8">

         {/* Breadcrumb */}
             <div className="flex items-center gap-2 text-[12px] sm:text-sm mb-8 sm:mb-14">
               <span className="text-[#717378] uppercase">Home</span>
     
               <span className="text-[#519A09]">&gt;</span>
     
               <span className="text-[#717378]">Agile Cycle Club</span>
             </div>
     
             {/* Hero Banner */}
             <div className="overflow-hidden mb-10">
     
               <Image
                 src={banner}
                 alt="Blog Hero"
                 width={1300}
                 height={268}
                 priority
                 className=" w-full h-auto"
               />
             </div>

       <div className="flex justify-between items-center">
        <div>
           <ClubNotice />
        </div>

        <div className="flex gap-3">
         <button className="px-4 sm:px-5
          py-2 sm:py-3
          rounded-lg
          border
          text-xs sm:text-sm bg-white text-[#01430D]">
          + Create Post
         </button >
       <button className="px-4 sm:px-5 lg:px-12
          py-2 sm:py-3
          rounded-lg
          border
          text-xs sm:text-sm bg-[#01430D] text-white">
          Join
         </button >
        </div>
       </div>

        <div className="grid grid-cols-12 gap-6 mt-10">
          {/* Left - Main Post Content */}
          <div className="col-span-8">
          
            {/* Add your full post content here */}
            
            {/* You can render more details from the `post` object */}
            <QuestionDetails post={post} />

            <CommentsSection />

            <div className="mt-10">
              {comments.map((comment) => ( 
                <CommentCard
                  key={comment.id} 
                  {...comment} 
                />
              ))}
            </div>
           
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4">
            <ClubRules />
          </div>
        </div>

        {/* More Posts Section - Below the grid */}
      </section>
      <div className="mt-5 mb-10 flex justify-center">
            <button className="rounded border border-[#005E11] px-10 py-3 text-[#005E11]">
                Loading More Post
            </button>
        </div>
    </main>
  );
}