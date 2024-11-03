import { useLocation, useParams } from "react-router-dom";
import { Header } from "./Header";
import { TitleVideo } from "./TitleVideo";

const secure_base_url = import.meta.env.VITE_IMG_SECURE_BASE_URL;
const poster_size = "original";
// poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],

export function TitlePage() {
  const { id, type } = useParams();
  const { movie } = useLocation().state;
  console.log(movie);
  return (
    <div className="p-4 flex flex-col h-full">
      <Header />
      <div className="p-4 flex flex-row items-center">
        <div className="w-2/3">
          <img src={secure_base_url + poster_size + movie.poster_path} />
        </div>
        <div className="p-10 ml-6">
          <div className="font-black text-6xl">{movie.title ?? movie.name}</div>
          <div className="w-2/3">{movie.overview}</div>
        </div>
      </div>
      <TitleVideo id={id} type={movie.media_type ?? "movie"} />
    </div>
  );
}
