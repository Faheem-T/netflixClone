import { Category } from "./Category";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { apiURLs } from "./utils/apiURLs";

export function Categories({ category }) {
  return (
    <div className="flex flex-col h-full w-full">
      {category !== "home" && <Header />}
      {category !== "home" && (
        <div className="text-center font-black text-6xl m-32">
          {category.toUpperCase()}
        </div>
      )}
      {apiURLs.map((item) => {
        if (item.type.includes(category)) {
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
