import { useQuery } from "@tanstack/react-query";
import { MovieCard } from "./MovieCard";
import { fetchFromAPI } from "./utils/apiRequests";
import { apiURLs } from "./utils/apiURLs";
import { Loading } from "./Loading";
import { HeroComponent } from "./HeroComponent";

// export function Category({ categoryName, categoryTitles }) {
export function Category({ queryKey }) {
  // get params and query (if existing) from apiURLs
  const foundApiURL = apiURLs.find((item) => item.queryKey === queryKey);
  if (!foundApiURL) return <div>{queryKey} not found</div>;
  const { pathParams, queryParams } = foundApiURL;
  const categoryQuery = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchFromAPI({ pathParams, queryParams }),
  });

  if (categoryQuery.isError) return <div>{categoryQuery.error.json}</div>;
  if (categoryQuery.isLoading) return <Loading componentName={queryKey} />;
  const categoryTitles = categoryQuery.data;

  // Rendering Hero Component if current Category is "Trending"
  let renderHero = false;
  let heroTitleId;
  if (queryKey === "All Trending") {
    renderHero = true;
    // Randomly choosing one of the trending titles as the hero title
    heroTitleId = Math.floor(Math.random() * categoryTitles.length);
  }

  return (
    <>
      {renderHero && <HeroComponent heroMovie={categoryTitles[heroTitleId]} />}
      <div className="font-black text-4xl p-4">
        <div className="mb-2">{queryKey}</div>
        <div className="relative w-full h-full ">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/100 via-black/30 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/100 via-black/30 to-transparent pointer-events-none"></div>
          <div className="flex flex-row gap-4 overflow-auto no-scrollbar">
            {categoryTitles.map((title) => (
              <MovieCard movie={title} key={title.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
