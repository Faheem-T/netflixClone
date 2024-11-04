import { Categories } from "./Categories";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function TVPage() {
  return (
    <div className="p-4">
      <Header />
      <Categories category={"tv"} />
      <Footer />
    </div>
  );
}
