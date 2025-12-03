export default function CharacterCardSkeletonLoading() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 p-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl p-4 flex flex-col items-center animate-pulse"
          >
            <div className="bg-gray-700 w-40 h-40 rounded-lg mb-4"></div>

            <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>

            <div className="h-4 bg-gray-600 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
