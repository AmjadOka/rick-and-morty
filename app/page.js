import CharactersGrid from "./components/CharactersGrid";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import ClientPageWrapper from "./components/ClientPageWrapper";
const results = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "/1.webp",
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",

    image: "/2.webp",

    created: "2017-11-04T18:50:21.651Z",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",

    image: "/3.webp",

    created: "2017-11-04T19:09:56.428Z",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",

    image: "/4.webp",

    created: "2017-11-04T19:22:43.665Z",
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",

    image: "/5.webp",

    created: "2017-11-04T19:26:56.301Z",
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    type: "",
    gender: "Female",

    image: "/6.webp",

    created: "2017-11-04T19:50:28.250Z",
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    type: "Genetic experiment",
    gender: "Male",

    image: "/7.webp",

    created: "2017-11-04T19:59:20.523Z",
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",

    image: "/8.webp",

    created: "2017-11-04T20:03:34.737Z",
  },
  {
    id: 9,
    name: "Agency Director",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",

    image: "/9.webp",

    created: "2017-11-04T20:06:54.976Z",
  },
  {
    id: 10,
    name: "Alan Rails",
    status: "Dead",
    species: "Human",
    type: "Superhuman (Ghost trains summoner)",
    gender: "Male",

    image: "/10.webp",

    created: "2017-11-04T20:19:09.017Z",
  },
  {
    id: 11,
    name: "Albert Einstein",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",

    image: "/11.webp",

    created: "2017-11-04T20:20:20.965Z",
  },
  {
    id: 12,
    name: "Alexander",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",

    image: "/12.webp",

    created: "2017-11-04T20:32:33.144Z",
  },
  {
    id: 13,
    name: "Alien Googah",
    status: "unknown",
    species: "Alien",
    type: "",
    gender: "unknown",

    image: "/13.webp",

    created: "2017-11-04T20:33:30.779Z",
  },
  {
    id: 14,
    name: "Alien Morty",
    status: "unknown",
    species: "Alien",
    type: "",
    gender: "Male",

    image: "/14.webp",

    created: "2017-11-04T20:51:31.373Z",
  },
  {
    id: 15,
    name: "Alien Rick",
    status: "unknown",
    species: "Alien",
    type: "",
    gender: "Male",

    image: "/15.webp",

    created: "2017-11-04T20:56:13.215Z",
  },
  {
    id: 16,
    name: "Amish Cyborg",
    status: "Dead",
    species: "Alien",
    type: "Parasite",
    gender: "Male",

    image: "/16.webp",

    created: "2017-11-04T21:12:45.235Z",
  },
  {
    id: 17,
    name: "Annie",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",

    image: "/17.webp",

    created: "2017-11-04T22:21:24.481Z",
  },
  {
    id: 18,
    name: "Antenna Morty",
    status: "Alive",
    species: "Human",
    type: "Human with antennae",
    gender: "Male",

    image: "/18.webp",

    created: "2017-11-04T22:25:29.008Z",
  },
  {
    id: 19,
    name: "Antenna Rick",
    status: "unknown",
    species: "Human",
    type: "Human with antennae",
    gender: "Male",

    image: "/19.webp",

    created: "2017-11-04T22:28:13.756Z",
  },
  {
    id: 20,
    name: "Ants in my Eyes Johnson",
    status: "unknown",
    species: "Human",
    type: "Human with ants in his eyes",
    gender: "Male",

    image: "/20.webp",

    created: "2017-11-04T22:34:53.659Z",
  },
];
const { id, name, status, origin, species, image } = {
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
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    // ...
  ],
  url: "https://rickandmortyapi.com/api/character/2",
  created: "2017-11-04T18:50:21.651Z",
};

export default async function Home({ searchParams }) {
  const { page } = (await searchParams) || 1;
  const { status } = (await searchParams) || "";
  const { species } = (await searchParams) || "";
  const { search } = (await searchParams) || "";
  const query = new URLSearchParams();
  query.set("page", page);
  if (status) query.set("status", status);
  if (species) query.set("species", species);
  if (search) query.set("name", search);

  let data = { results: [] };
  let totalPages = 1;

  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?${query.toString()}`
    );

    if (!res.ok) {
      if (res.status === 404) {
        data = { results: [] };
        totalPages = 1;
      } else {
        throw new Error("Fetch failed");
      }
    } else {
      data = await res.json();
      totalPages = data?.info.pages;
    }
  } catch (error) {
    data = { results: [] };
    totalPages = 1;
  }

  return (
    <main className="mt-24">
      <ClientPageWrapper>
        <SearchBar />
        <Filter />
        <CharactersGrid data={data.results} />
        <Pagination page={page} totalPages={totalPages} />
      </ClientPageWrapper>
    </main>
  );
}
