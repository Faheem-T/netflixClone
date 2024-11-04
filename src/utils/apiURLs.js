export const apiURLs = [
  {
    queryKey: "All Trending",
    pathParams: "trending/all/day",
    type: ["all", "home"], // type can be either movie / tv / all
  },
  {
    queryKey: "Trending TV Shows",
    pathParams: "trending/tv/day",
    type: ["tv", "home"],
  },
  {
    queryKey: "Top Rated Movies",
    pathParams: "movie/top_rated",
    type: ["movie", "home"],
  },
  {
    queryKey: "Top Rated TV Shows",
    pathParams: "tv/top_rated",
    type: ["tv", "home"],
  },
  {
    queryKey: "Now Playing",
    pathParams: "movie/now_playing",
    type: ["movie", "home"],
  },
  {
    queryKey: "TV Shows Airing Today",
    pathParams: "tv/airing_today",
    type: ["tv", "home"],
  },
  {
    queryKey: "Discover Movies",
    pathParams: "discover/movie?include_adult=false&include_video=false",
    queryParams: "&page=1&sort_by=popularity.desc",
    type: ["movie"],
  },
  {
    queryKey: "Popular TV",
    pathParams: "tv/popular",
    type: ["tv", "home"],
  },
  {
    queryKey: "Trending Movies",
    pathParams: "trending/movie/day",
    type: ["movie", "home"],
  },
  {
    queryKey: "On The Air",
    pathParams: "tv/on_the_air",
    type: ["tv"],
  },
  {
    queryKey: "Upcoming Movies",
    pathParams: "movie/upcoming",
    type: ["movie"],
  },
  {
    queryKey: "",
    pathParams: "",
    type: [""],
  },
  {
    queryKey: "",
    pathParams: "",
    type: [""],
  },
];
