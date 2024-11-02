const base_url = import.meta.env.VITE_IMG_BASE_URL;
const secure_base_url = import.meta.env.VITE_IMG_SECURE_BASE_URL;
const poster_size = "w500";
export function MovieCard({ movie }) {
  return (
    <div className="flex-shrink-0 h-80">
      <img
        src={`${secure_base_url}${poster_size}${movie.poster_path}`}
        className="h-4/5 hover:h-5/6 transition-all delay-100 duration-500 ease-in-out"
      />
    </div>
  );
}