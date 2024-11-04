import { Header } from "./Header";
import { apiURLs } from "./utils/apiURLs";

export function TVPage() {
  const tvEnpoints = apiURLs.find((item) => item.type === "tv");
  return (
    <>
      <Header />
    </>
  );
}
