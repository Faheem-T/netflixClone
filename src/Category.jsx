import { useQuery } from "@tanstack/react-query";
import { MovieCard } from "./MovieCard";
import { fetchFromAPI } from "./utils/apiRequests";
import { Loading } from "./Loading";
import { HeroComponent } from "./HeroComponent";
import { useRef, useState } from "react";

export function Category({ queryKey, pathParams, queryParams }) {
  const categoryQuery = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchFromAPI({ pathParams, queryParams }),
  });
  const categoryRef = useRef(null);

  if (categoryQuery.isLoading) return <div></div>;

  if (categoryQuery.isError) return <div>{categoryQuery.error.json}</div>;
  const categoryTitles = categoryQuery.data;

  // Rendering Hero Component if current Category is "Trending"
  let renderHero = false;
  let heroTitleId;
  if (queryKey === "All Trending" && !categoryQuery.isLoading) {
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
          <div
            className="flex flex-row gap-4 overflow-auto no-scrollbar"
            ref={categoryRef}
          >
            {/*left button */}
            <button
              className="top-[40%] absolute z-10 left-8 hover:text-gray-600"
              onClick={() => {
                categoryRef.current.scrollBy({
                  left: -500,
                  behavior: "smooth",
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            {/* {categoryQuery.isLoading ? (
              // <Loading componentName={queryKey} />
              <div></div>
            ) : ( */}
            {/* <> */}
            {categoryTitles.map((title) => (
              <MovieCard movie={title} key={title.id} />
            ))}
            {/* </> */}
            {/* )} */}
            {/*right button */}
            <button
              className="top-[40%] absolute z-10 right-8 hover:text-gray-600"
              onClick={() => {
                categoryRef.current.scrollBy({ left: 500, behavior: "smooth" });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
