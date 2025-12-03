"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">
        {search
          ? "No such name found with these species"
          : "some thing went wrong"}
      </h1>
      <p className="text-lg">{error.message}</p>
      <a
        href="/"
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/30 border border-rm-primary/30 text-rm-primary hover:bg-black/50 transition-all backdrop-blur-md"
      >
        ← Back
      </a>
    </main>
  );
}
