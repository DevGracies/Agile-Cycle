

import Image from "next/image";
import {
  Eye,
  X,
} from "lucide-react";



interface PostCardProps {
  image: string;
  title: string;
  author: string;
  time: string;
  comments: number;
  likes: number;
  category: string;
   featured?: boolean;
}

export default function PostCard({
  image,
  title,
  author,
  time,
  comments,
  likes,
  category,
  featured,
}: PostCardProps) {

  return (
    <div className="relative flex overflow-hidden rounded-md border border-[#519A09] bg-white">
      {/* Badge */}
      <div className="absolute right-0 top-0 bg-[#005E11] px-4 py-2 text-white text-sm">
        {category}
      </div>

      {/* Image */}
      <div className="relative h-[140px] w-[170px] shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        <p className="mt-2 text-sm text-[#519A09] italic">
          {author} • {time}
        </p>

        <p className="mt-3 text-[#519A09]">
          {comments} comments
        </p>

        <div className="mt-4 flex items-center gap-3">
          <button className="flex items-center gap-1 rounded border px-2 py-1">
            <X size={14} />
            {likes}
          </button>

          <button className="rounded border p-2">
            <X size={14} />
          </button>

          <button className="rounded border p-2">
            <X size={14} />
          </button>
        </div>
      </div>
      
    </div>
  );
}