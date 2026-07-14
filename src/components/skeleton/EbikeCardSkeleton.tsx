"use client";

import Skeleton from "../ui/Skeleton";


const EbikeCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl scale-95 overflow-hidden border border-gray-100 shadow-sm">
      {/* IMAGE */}
      <Skeleton className="w-full h-[200px] rounded-none" />

      {/* CONTENT */}
      <div className="px-3 py-3">

        {/* TITLE */}
        <div className="flex justify-center mb-5">
          <Skeleton className="h-5 w-36" />
        </div>

        {/* PRICE + RATING */}
        <div className="grid grid-cols-2 gap-4 mb-4 px-6">

          {/* PRICE */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-14" />
          </div>

          {/* RATING */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>

        {/* SPECS */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-6 border-t border-gray-100 pt-3 mb-6">
          {Array.from({
            length: 6,
          }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-3 w-full"
            />
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
};

export default EbikeCardSkeleton;