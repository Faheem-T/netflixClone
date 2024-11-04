import { Category } from "./Category";
import { apiURLs } from "./utils/apiURLs";

export function Categories({ category }) {
  return (
    <>
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
    </>
  );
}
