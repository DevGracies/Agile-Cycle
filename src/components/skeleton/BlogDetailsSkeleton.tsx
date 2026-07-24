export default function BlogDetailsSkeleton() {
  return (
    <main className="w-full pt-5 pb-20 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-7">
          <div className="h-3 w-14 rounded bg-gray-200" />
          <div className="h-3 w-3 rounded bg-gray-200" />
          <div className="h-3 w-20 rounded bg-gray-200" />
          <div className="h-3 w-3 rounded bg-gray-200" />
          <div className="h-3 w-40 rounded bg-gray-200" />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <div className="h-10 w-4/5 rounded bg-gray-200" />
          <div className="h-10 w-2/3 rounded bg-gray-200" />
        </div>

        {/* Meta */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-3">
            <div className="h-4 w-24 rounded bg-gray-200" />
            <div className="h-4 w-16 rounded bg-gray-200" />
          </div>

          <div className="h-6 w-20 rounded bg-gray-200" />
        </div>

        {/* Hero Image */}
        <div className="mt-8 h-[700px] rounded-xl bg-gray-200" />

        <div className="mx-auto max-w-[1100px]">

          {/* Divider */}
          <div className="h-px bg-gray-200 mt-10" />

          {/* Share */}
          <div className="flex items-center justify-between py-6">
            <div className="flex gap-3">
              <div className="h-5 w-12 rounded bg-gray-200" />
              <div className="h-5 w-5 rounded-full bg-gray-200" />
              <div className="h-5 w-5 rounded-full bg-gray-200" />
              <div className="h-5 w-5 rounded-full bg-gray-200" />
              <div className="h-5 w-5 rounded-full bg-gray-200" />
            </div>

            <div className="h-8 w-32 rounded bg-gray-200" />
          </div>

          {/* Description */}
          <div className="space-y-3 mb-10">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-5/6 rounded bg-gray-200" />
          </div>

          {/* Content */}
          <div className="space-y-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="h-4 w-full rounded bg-gray-200"
              />
            ))}
          </div>

          {/* Previous / Next */}
          <div className="mt-20 flex justify-between">
            <div className="h-10 w-40 rounded bg-gray-200" />
            <div className="h-10 w-40 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </main>
  );
}