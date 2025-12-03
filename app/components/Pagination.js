"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ page = 1, totalPages }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const current = Number(page);

  const goToPage = (p) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", p);
    router.push(`/?${params.toString()}`);
  };

  const pages = [];

  const addPage = (p) => {
    if (p > 0 && p <= totalPages) {
      pages.push(p);
    }
  };

  // Always show 1
  addPage(1);

  // Show previous 3 pages
  for (let i = current - 3; i < current; i++) {
    addPage(i);
  }

  // Show current
  addPage(current);

  // Show next 3 pages
  for (let i = current + 1; i <= current + 3; i++) {
    addPage(i);
  }

  // Always show last
  addPage(totalPages);

  // Remove duplicates and sort
  const uniquePages = [...new Set(pages)].sort((a, b) => a - b);

  const formattedPages = [];
  let prev = 0;

  for (const p of uniquePages) {
    if (p - prev > 1) {
      formattedPages.push("...");
    }
    formattedPages.push(p);
    prev = p;
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Prev Button */}
      <button
        onClick={() => goToPage(Math.max(1, current - 1))}
        disabled={current === 1}
        className="px-4 py-2 bg-black/40 border border-gray-700 text-white rounded-lg
                   disabled:opacity-40 hover:bg-black/60 transition"
      >
        ← Prev
      </button>

      {/* Page Numbers */}
      {formattedPages.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} className="px-3 text-gray-500">
            …
          </span>
        ) : (
          <button
            key={`page-${p}`}
            onClick={() => goToPage(p)}
            className={`px-4 py-2 rounded-lg border transition${
              p === current
                ? "bg-rm-primary text-white font-bold border-rm-primary shadow-[0_0_10px_#00ffea]"
                : "bg-black/40 border-gray-700 hover:bg-black/70 text-white"
            }`}
          >
            {p}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => goToPage(Math.min(totalPages, current + 1))}
        disabled={current === totalPages}
        className="px-4 py-2 bg-black/40 border border-gray-700 text-white rounded-lg
                   disabled:opacity-40 hover:bg-black/60 transition"
      >
        Next →
      </button>
    </div>
  );
}
