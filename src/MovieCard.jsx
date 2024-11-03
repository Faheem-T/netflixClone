import { Link } from "react-router-dom";

const base_url = import.meta.env.VITE_IMG_BASE_URL;
const secure_base_url = import.meta.env.VITE_IMG_SECURE_BASE_URL;
const poster_size = "w500";
export function MovieCard({ movie }) {
  return (
    <div className="flex-shrink-0 h-80">
      <Link
        to={`/title/${movie.media_type ?? "movie"}/${movie.id}`}
        state={{ movie: movie }}
      >
        <img
          src={`${secure_base_url}${poster_size}${movie.poster_path}`}
          className="h-4/5 hover:h-5/6 transition-all delay-100 duration-500 ease-in-out"
        />
      </Link>
    </div>
  );
}
