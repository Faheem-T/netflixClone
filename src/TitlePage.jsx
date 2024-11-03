import { useLocation, useParams } from "react-router-dom";
import { Header } from "./Header";
import { TitleVideo } from "./TitleVideo";

const secure_base_url = import.meta.env.VITE_IMG_SECURE_BASE_URL;
const poster_size = "original";
// poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
const backdrop_size = "original";

export function TitlePage() {
  const { id, type } = useParams();
  const { movie } = useLocation().state;
  console.log(movie);
  return (
    <div className="relative">
      <div
        className="absolute inset-0 h-5/6 bg-top bg-[length:125%] bg-no-repeat "
        style={{
          backgroundImage: `url(${secure_base_url}${backdrop_size}${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 w-full bg-gradient-to-t from-black/100 via-black/50 to-transparent pointer-events-none"></div>
      </div>
      <div>
        <div className="relative w-full h-full flex flex-col p-4">
          <Header />
          <div className="p-4 flex flex-row items-center z-10">
            <div className="w-2/3">
              <img src={secure_base_url + poster_size + movie.poster_path} />
            </div>
            <div className="p-10 ml-6">
              <div className="font-black text-6xl">
                {movie.title ?? movie.name}
              </div>
              <div className="w-2/3">{movie.overview}</div>
            </div>
          </div>
          <TitleVideo id={id} type={movie.media_type ?? "movie"} />
        </div>
      </div>
    </div>
  );
}
