import Image from "next/image";
import { notFound } from "next/navigation";
import { Heart, MessageCircle } from "lucide-react";
import { insights } from "@/src/lib/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const blog = insights.find((item) => item.id === Number(id));

  if (!blog) notFound();

  return (
    <main className="max-w-[1280px] mx-auto px-6 py-8">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        HOME <span className="text-[#519A09]">›</span> Blog 
        <span className="text-[#519A09]">›</span> 
        Tips and Tricks for Keeping Your E-Bike in Top Condition
      </div>

      {/* Title */}
      <h1 className="text-[42px] leading-[48px] font-bold text-black mb-6">
        Tips and Tricks for Keeping Your E-Bike in Top Condition
      </h1>

      {/* Meta */}
      <div className="flex items-center justify-between mb-10">
        <div className="text-sm text-gray-600">
          Agile Cycle • April 1, 2026
        </div>

        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-1.5">
            <Heart size={20} />
            <span>12</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle size={20} />
            <span>0 comments</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[520px] rounded-2xl overflow-hidden mb-10">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Share */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-medium text-[#01430D]">Share</span>
        <div className="flex gap-3">
          <button className="w-8 h-8 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center text-lg">𝕏</button>
          <button className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center">📱</button>
          <button className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center">𝔽</button>
          <button className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center">𝕚𝕟</button>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl text-[17px] leading-relaxed text-gray-700">
        <p>
          Electric bikes, also known as e-bikes, have gained immense popularity 
          in recent years due to their convenience, eco-friendliness, and ease of use.
        </p>

        <h2 className="text-2xl font-semibold text-[#01430D] mt-12 mb-4">
          Keep the battery charged.
        </h2>

        <p className="mb-6">
          The battery is the most critical component of an electric bike. 
          Therefore, it is essential to keep it charged regularly...
        </p>

        {/* Add the rest of your article content here */}
      </article>

    </main>
  );
}