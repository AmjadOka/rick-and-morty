"use client";

import { useLoading } from "@/app/context/LoadingContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { setIsInstantLoading } = useLoading();
  const [isPending, startTransition] = useTransition();

  const initialValue = searchParams.get("search") || "";
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    if (query.trim()) params.set("search", query.trim());
    else params.delete("search");

    params.set("page", 1);

    // Show instant loading shimmer immediately
    setIsInstantLoading(true);

    startTransition(() => {
      router.push(`/?${params.toString()}`);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center mb-6 px-6"
    >
      <div className="relative w-full max-w-xl group">
        {/* Icon */}
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rm-primary transition">
          🔍
        </span>

        {/* Input */}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search characters..."
          className={` w-full pl-12 pr-4 py-3 rounded-xl bg-black/40 text-white border border-gray-700 outline-none backdrop-blur-md placeholder-gray-500 focus:border-rm-primary focus:ring-2 focus:ring-rm-primary/50 transition-all shadow-[0_0_0px_#00ffea40] focus:shadow-[0_0_15px_#00ffea70]`}
        />

        {/* Clear Button */}
        {query !== "" && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              const params = new URLSearchParams(searchParams.toString());
              params.delete("search");
              params.set("page", 1);
              router.push(`/?${params.toString()}`);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-rm-primary transition"
          >
            ✖
          </button>
        )}
      </div>
    </form>
  );
}
