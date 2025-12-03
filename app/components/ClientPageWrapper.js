"use client";

import { useEffect } from "react";
import { useLoading } from "../context/LoadingContext";
import { usePathname, useSearchParams } from "next/navigation";

import SearchBarSkeleton from "./SearchLoading";
import FilterSkeleton from "./FilterSkeleton.js";
import CharacterCardSkeletonLoading from "./CharactarcardLoading";

export default function ClientPageWrapper({ children }) {
  const { isInstantLoading, setIsInstantLoading } = useLoading();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 🚀 When URL changes → stop loading
  useEffect(() => {
    setIsInstantLoading(false);
  }, [pathname, searchParams]);

  if (isInstantLoading) {
    return (
      <div className="px-6">
        <SearchBarSkeleton />
        <FilterSkeleton />
        <CharacterCardSkeletonLoading />
      </div>
    );
  }

  return children;
}
