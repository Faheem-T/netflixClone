import { MovieCard } from "./MovieCard";

export function Category({ categoryName, categoryTitles }) {
  return (
    <div className="font-black text-4xl p-4">
      <div className="mb-2">{categoryName}</div>
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
  );
}
