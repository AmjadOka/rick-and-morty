"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLoading } from "@/app/context/LoadingContext";

const statusOptions = ["alive", "dead", "unknown"];

const speciesOptions = [
  "human",
  "alien",
  "robot",
  "humanoid",
  "animal",
  "poopybutthole",
  "mythological",
  "unknown",
];

export default function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setIsInstantLoading } = useLoading();
  const [isPending, startTransition] = useTransition();

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    // If clicking again → remove filter
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.set("page", 1); // reset page

    setIsInstantLoading(true);

    startTransition(() => {
      router.push(`/?${params.toString()}`);
    });
  };

  const activeStatus = searchParams.get("status");
  const activeSpecies = searchParams.get("species");

  return (
    <div className="px-6 mb-6 space-y-4">
      {/* Status Filter */}
      <div>
        <h2 className="text-lg font-semibold text-rm-primary mb-2">Status</h2>
        <div className="flex gap-2 flex-wrap">
          {statusOptions.map((st) => (
            <button
              key={st}
              onClick={() => updateFilter("status", st)}
              className={`
                px-4 py-2 rounded-xl
                border transition-all backdrop-blur-md
                ${
                  activeStatus === st
                    ? "bg-rm-primary/20 border-rm-primary text-white"
                    : "bg-black/30 border-gray-700 text-gray-300 hover:border-rm-primary"
                }
              `}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Species Filter */}
      <div>
        <h2 className="text-lg font-semibold text-rm-primary mb-2">Species</h2>
        <div className="flex gap-2 flex-wrap">
          {speciesOptions.map((sp) => (
            <button
              key={sp}
              onClick={() => updateFilter("species", sp)}
              className={`
                px-4 py-2 rounded-xl
                border transition-all backdrop-blur-md
                ${
                  activeSpecies === sp
                    ? "bg-rm-primary/20 border-rm-primary text-white"
                    : "bg-black/30 border-gray-700 text-gray-300 hover:border-rm-primary"
                }
              `}
            >
              {sp}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
