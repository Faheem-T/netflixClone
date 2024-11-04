import { Category } from "./Category";
import { Footer } from "./Footer";
import { apiURLs } from "./utils/apiURLs";

export function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      {apiURLs.map((item) => {
        if (item.type.includes("home")) {
          return (
            <Category
              queryKey={item.queryKey}
              key={item.queryKey}
              pathParams={item.pathParams}
              queryParams={item.queryParams ?? ""}
            />
          );
        }
      })}
      <Footer />
    </div>
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
