import { Link } from "react-router-dom";

export function HeroMovie({ movie }) {
  return (
    <div className="w-1/2 mt-10 py-36">
      <div className="font-black text-5xl">
        {movie.title ? movie.title : movie.name}
      </div>
      <div>{movie.overview}</div>
      <Link
        to={`/title/${movie.media_type ?? "movie"}/${movie.id}`}
        state={{ movie }}
      >
        <button type="button" className="bg-red-700 rounded-lg p-2 font-bold">
          Watch Trailer
        </button>
      </Link>
    </div>
  );
}
