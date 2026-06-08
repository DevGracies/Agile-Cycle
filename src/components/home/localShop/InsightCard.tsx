import { InsightCardProp } from "@/src/types";
import Image from "next/image";
import Link from "next/link";

type InsightCardProps = InsightCardProp;

export default function InsightCard({
  image,
  title,
  description,
  date,
  id,
}: InsightCardProps) {
 return (
  <Link href={`/Home/Blog/${id}`} className="flex flex-col h-full">
      
      {/* IMAGE */}
      <div className="relative h-[435px] rounded-[12px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

     {/* CONTENT */}
<div className="flex flex-col flex-1">

  <h3 className="mt-4 text-[22px] font-semibold text-[#000000] leading-tight line-clamp-1  min-h-[28px]">
    {title}
  </h3>

  <p className="mt-3 text-[#000000] text-[14px] leading-7 line-clamp-2  min-h-[14px]">
    {description}
  </p>

  {/* This pushes date & button to the bottom */}
  <div className="mt-auto pt-4">
    <p className="text-[#9D9EA2] text-sm">
      {date}
    </p>

    <button className="mt-5 px-3 py-[5px] border border-[#01430D] rounded-[4px] text-[#01430D] text-[16px] font-medium">
      Read More
    </button>
  </div>

      </div>

    </Link>
  );
}