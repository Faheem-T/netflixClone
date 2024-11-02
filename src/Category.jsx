import { MovieCard } from "./MovieCard";

export function Category({ categoryName, categoryTitles }) {
  return (
    <div className="font-black text-3xl">
      {categoryName}
      <div className="flex flex-row gap-2 overflow-auto no-scrollbar">
        {categoryTitles.map((title) => (
          <MovieCard movie={title} key={title.id} />
        ))}
      </div>
    </div>
  );
}
