"use client";
import Image from "next/image";
import Link from "next/link";

export default function CharactersGrid({ data }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 p-6">
      {data.map((char) => (
        <Link key={char.id} href={`/character/${char.id}`}>
          <div className="relative bg-rm-card backdrop-blur-md border border-gray-700 rounded-xl p-4 flex flex-col items-center text-centerhover:scale-105 hover:border-rm-primaryhover:shadow-[0_0_15px_#00FFEA]transition-all duration-300 shadow-lg shadow-black/50">
            {/* Status indicator */}
            <div
              className={`
                w-3 h-3 rounded-full absolute top-4 right-4
                ${
                  char.status === "Alive"
                    ? "bg-rm-alive"
                    : char.status === "Dead"
                    ? "bg-rm-dead"
                    : "bg-rm-unknown"
                }
              `}
            ></div>

            {/* Character Image */}
            <Image
              src={char.image}
              width={200}
              height={200}
              alt={char.name}
              className="rounded-lg mb-4 shadow-inner shadow-black/50"
            />

            <h3 className="text-white font-bold text-lg mb-1 drop-shadow-[0_0_5px_#00FFEA]">
              {char.name}
            </h3>

            <p className="text-gray-300 text-sm">{char.species}</p>
            <p className="text-gray-400 text-xs">{char.status}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
