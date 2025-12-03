export default function FilterSkeleton() {
  return (
    <div className="px-6 mb-6 space-y-4">
      {/* Status Skeleton */}
      <div>
        <div className="h-5 w-24 shimmer bg-black/30 rounded-md mb-3"></div>
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-24 shimmer rounded-xl bg-black/30 backdrop-blur-lg border border-rm-primary/20"
            ></div>
          ))}
        </div>
      </div>

      <div>
        <div className="h-5 w-28 shimmer bg-black/30 rounded-md mb-3"></div>
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-28 shimmer rounded-xl bg-black/30 backdrop-blur-lg border border-rm-primary/20"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
