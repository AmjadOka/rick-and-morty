import Image from "next/image";
import Link from "next/link";
const character = {
  id: 2,
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "1.webp",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    // ...
  ],
  url: "https://rickandmortyapi.com/api/character/2",
  created: "2017-11-04T18:50:21.651Z",
};
export default async function CharacterPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) return <p className="text-white p-10">Character not found</p>;

  const character = await res.json();

  const statusColor =
    character.status === "Alive"
      ? "bg-green-500"
      : character.status === "Dead"
      ? "bg-red-500"
      : "bg-gray-500";

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      {/* Back button */}
      <Link
        href="/"
        className="self-start mb-6 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
      >
        ← Back to Characters
      </Link>
      <div className="flex justify-between w-full max-w-5xl mt-8">
        {/* Previous char by id Button */}
        {Number(id) > 1 ? (
          <Link
            href={`/character/${Number(id) - 1}`}
            className="px-5 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            ← Previous
          </Link>
        ) : (
          <div></div>
        )}

        {/* next char by id Button */}

        <Link
          href={`/character/${Number(id) + 1}`}
          className="px-5 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
        >
          Next →
        </Link>
      </div>
      <div className="bg-neutral-800 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 max-w-5xl w-full">
        <div className="">
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-3 flex-1">
          <h1 className="text-4xl font-bold">{character.name}</h1>

          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${statusColor}`}></span>
            <span className="font-semibold">Status:</span> {character.status}
          </div>

          <p>
            <span className="font-semibold">Species:</span> {character.species}
          </p>

          {character.type && (
            <p>
              <span className="font-semibold">Type:</span> {character.type}
            </p>
          )}

          <p>
            <span className="font-semibold">Gender:</span> {character.gender}
          </p>

          <p>
            <span className="font-semibold">Origin:</span>{" "}
            {character.origin.name}
          </p>

          <p>
            <span className="font-semibold">Location:</span>{" "}
            {character.location.name}
          </p>

          <p>
            <span className="font-semibold">Created:</span>{" "}
            {new Date(character.created).toLocaleDateString()}
          </p>

          {/* Episodes List */}
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Episodes:</h2>
            <ul className="max-h-40 overflow-y-auto list-disc list-inside space-y-1">
              {character.episode.map((ep, index) => (
                <li key={index}>
                  <Link
                    href={ep}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {ep.split("/").pop()} {/* Show episode number from URL */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
