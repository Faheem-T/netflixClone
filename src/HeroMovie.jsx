export function HeroMovie({ movie }) {
  return (
    <div className="w-1/2 mt-10 py-36">
      <div className="font-black text-5xl">
        {movie.title ? movie.title : movie.name}
      </div>
      <div>{movie.overview}</div>
    </div>
  );
}
