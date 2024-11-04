import { Category } from "./Category";

export function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      {/*"Trending" Also renders the Hero Component*/}
      {homePageCategories.map((category) => (
        <Category queryKey={category} key={category} />
      ))}
    </div>
  );
}

const homePageCategories = [
  "All Trending",
  "Trending TV Shows",
  "Top Rated Movies",
  "Top Rated TV Shows",
  "Now Playing",
  "TV Shows Airing Today",
  "Trending Movies",
  "Popular TV",
];

const configs = {
  images: {
    base_url: "http://image.tmdb.org/t/p/",
    secure_base_url: "https://image.tmdb.org/t/p/",
    backdrop_sizes: ["w300", "w780", "w1280", "original"],
    logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    profile_sizes: ["w45", "w185", "h632", "original"],
    still_sizes: ["w92", "w185", "w300", "original"],
  },
};
