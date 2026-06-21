import Image from "next/image";

interface QuestionDetailsProps {
  post: {
    id: number;
    image: string;
    title: string;
    author: string;
    time: string;
    comments: number;
    likes: number;
    category: string;
    featured?: boolean;
  };
}

export default function QuestionDetails({
  post,
}: QuestionDetailsProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#D8E6D0] bg-white">
      <div className="flex justify-end">
        <div className="bg-[#005E11] px-6 py-2 text-white">
          {post.category}
        </div>
      </div>

      <div className="p-5">
        <h1 className="text-[24px] font-semibold">
          {post.title}
        </h1>

        <p className="mt-3 text-[#519A09] italic">
          {post.author} • {post.time} • {post.comments} comments
        </p>

        <div className="relative mt-4 h-[350px] w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}