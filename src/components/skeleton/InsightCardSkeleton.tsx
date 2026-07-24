export default function InsightCardSkeleton() {
  return (
    <div className="flex flex-col h-full animate-pulse">
      {/* Image */}
      <div className="relative h-[435px] rounded-[12px] overflow-hidden bg-gray-300" />

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Title */}
        <div className="mt-4 h-7 w-5/6 rounded bg-gray-200" />

        {/* Description */}
        <div className="mt-3 space-y-2">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4">
          {/* Date */}
          <div className="h-4 w-24 rounded bg-gray-200" />

          {/* Button */}
          <div className="mt-5 h-9 w-28 rounded-[4px] border border-gray-200 bg-gray-200" />
        </div>
      </div>
    </div>
  );
}