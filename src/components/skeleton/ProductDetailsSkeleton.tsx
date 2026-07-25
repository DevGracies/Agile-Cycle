import Skeleton from "../ui/Skeleton";

export default function ProductDetailsSkeleton() {
  return (
    <section className="container mx-auto py-8 mt-20">
      {/* Breadcrumb */}
      <Skeleton className="mb-4 h-4 w-56" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* ================= LEFT ================= */}
        <div>
          {/* Main Image */}
          <Skeleton className="aspect-square h-[400px] w-full rounded-xl" />

          {/* Thumbnails */}
          <div className="mt-2 flex gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-20 w-20 rounded-lg"
              />
            ))}
          </div>

          {/* Description */}
          <div className="mt-3 space-y-4">
            <Skeleton className="h-6 w-40" />

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-9/12" />
          </div>

          {/* Specs */}
          <div className="mt-3 grid grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 p-5"
              >
                <Skeleton className="mb-4 h-8 w-8 rounded-full" />
                <Skeleton className="mb-2 h-4 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>

          {/* Bulk Order */}
          <Skeleton className="mt-3 h-40 w-full rounded-lg" />
        </div>

        {/* ================= RIGHT ================= */}
        <div>
          {/* Title */}
          <Skeleton className="h-10 w-72" />

          {/* Subtitle */}
          <Skeleton className="mt-3 h-5 w-56" />

          {/* Rating */}
          <Skeleton className="mt-5 h-5 w-44" />

          {/* Price */}
          <Skeleton className="mt-6 h-10 w-52" />

          {/* Stock */}
          <Skeleton className="mt-2 h-5 w-28" />

          {/* Colour */}
          <div className="mt-8">
            <Skeleton className="mb-4 h-5 w-24" />

            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-10 w-10 rounded-md"
                />
              ))}
            </div>
          </div>

          {/* Battery */}
          <div className="mt-8">
            <Skeleton className="mb-4 h-5 w-36" />

            <div className="flex gap-3">
              <Skeleton className="h-11 w-28 rounded-md" />
              <Skeleton className="h-11 w-36 rounded-md" />
            </div>
          </div>

          {/* Size */}
          <div className="mt-8">
            <Skeleton className="mb-4 h-5 w-24" />

            <Skeleton className="h-11 w-28 rounded-md" />
          </div>

          {/* Variants */}
          <div className="mt-8 flex gap-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-gray-200 p-4"
              >
                <Skeleton className="h-16 w-40 rounded-lg" />

                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>
            ))}
          </div>

          {/* Quantity & Button */}
          <div className="mt-8 flex items-center gap-6">
            <Skeleton className="h-12 w-36 rounded-md" />

            <Skeleton className="h-12 flex-1 rounded-md" />
          </div>

          {/* Compatible Accessories */}
          <div className="mt-10">
            <Skeleton className="mb-6 h-6 w-72" />

            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg border border-gray-200 p-4"
                >
                  <Skeleton className="h-5 w-5 rounded" />

                  <Skeleton className="h-16 w-16 rounded-md" />

                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-44" />
                    <Skeleton className="h-4 w-56" />
                  </div>

                  <div className="space-y-2 text-right">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="ml-auto h-4 w-10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}