import { Category } from "./Category";
import { HeroComponent } from "./HeroComponent";
import { useQuery } from "@tanstack/react-query";
import { fetchNowPlaying, fetchTrending } from "./utils/apiRequests";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export function Home() {
  const { user } = useContext(UserContext);
  console.log(user);

  const trendingQuery = useQuery({
    queryKey: ["Trending"],
    queryFn: fetchTrending,
  });
  const nowPlaying = useQuery({
    queryKey: ["Now playing"],
    queryFn: fetchNowPlaying,
  });
  if (trendingQuery.isError) return <div>{trendingQuery.error.json}</div>;
  if (trendingQuery.isLoading) return <div>Loading...</div>;

  if (nowPlaying.isError) return <div>{nowPlaying.error.json}</div>;
  if (nowPlaying.isLoading) return <div>Loading...</div>;

  // Randomly choosing one of the trending titles as the hero title
  const heroTitleId = Math.floor(Math.random() * trendingQuery.data.length);
  return (
    <>
      <HeroComponent heroMovie={trendingQuery.data[heroTitleId]} />
      <Category categoryName={"Trending"} categoryTitles={trendingQuery.data} />
      <Category categoryName={"Now Playing"} categoryTitles={nowPlaying.data} />
    </>
  );
}

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
