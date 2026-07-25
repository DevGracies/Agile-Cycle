
import Image from "next/image";
import Link from "next/link";
import { clubPosts } from "@/src/lib/data";

export default function QuestionCard() {

  const questionPost = clubPosts.find((post) => post.category === "Questions");

  if (!questionPost) {
    return null ; 
  }

  return (
    <Link href={`/Home/club/${questionPost._id}`}>
      <div className="overflow-hidden rounded-lg border border-[#D8E6D0] bg-white">
        <div className="flex justify-end">
          <div className="bg-[#005E11] px-6 py-2 text-white">
            Questions
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-[20px] font-medium">{questionPost.title}</h3>

          <p className="mt-3 text-[#519A09] italic">
            {questionPost.author} • {questionPost.time} • {questionPost.comments} comments
          </p>

          <div className="relative mt-4 h-[280px] w-full">
            <Image
              src={questionPost.image}
              alt={questionPost.title}
              fill
              className="rounded-md object-cover"
            />
          </div>

          <div className="mt-4 flex gap-3">
            <button>👍 {questionPost.likes}</button>
            <button>👁</button>
            <button>💬</button>
            <button>↗</button>
          </div>
        </div>
      </div>
    </Link>
  );
}