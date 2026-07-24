// app/(public)/club/page.tsx

import ClubHero from "@/src/components/home/club/ClubHero";
import ClubNotice from "@/src/components/home/club/ClubNotice";
import ClubRules from "@/src/components/home/club/ClubRules";
import PostCard from "@/src/components/home/club/PostCard";
import QuestionCard from "@/src/components/home/club/QuestionCard";
import { clubPosts } from "@/src/lib/data";

export default function ClubPage() {
  return (
    <main>
      <ClubHero />

      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <ClubNotice />

        

        <div className="grid grid-cols-12 gap-6 mt-10">
          <div className="col-span-8">

            <div className="space-y-6">
              {/* First two Non-Question posts */}
              {clubPosts
                .filter((post) => post.category !== "Questions")
                .slice(0, 2)
                .map((post) => (
                  <PostCard key={post._id} {...post} />
                ))}

              {/* QuestionCard */}
              <QuestionCard />

              {/* Remaining Non-Question posts */}
              {clubPosts
                .filter((post) => post.category !== "Questions")
                .slice(2)
                .map((post) => (
                  <PostCard key={post._id} {...post} />
                ))}
            </div>
         
          </div>

          <div className="col-span-4">
            <ClubRules />
          </div>
        
        </div>
            <div className="mt-12 flex justify-center">
            <button className="rounded border border-[#005E11] px-10 py-3 text-[#005E11]">
                Loading More Post
            </button>
            </div>

      </section>
    </main>
  );
}