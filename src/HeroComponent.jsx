import { Header } from "./Header";
import { HeroMovie } from "./HeroMovie";

const secure_base_url = import.meta.env.VITE_IMG_SECURE_BASE_URL;
const backdrop_size = "original";
//  backdrop_sizes: ["w300", "w780", "w1280", "original"],

export function HeroComponent({ heroMovie }) {
  return (
    <div
      className={
        " bg-right-top bg-[length:85%] hover:bg-[length:90%] transition-all duration-700 bg-no-repeat"
      }
      style={{
        backgroundImage: `url(${secure_base_url}${backdrop_size}${heroMovie.backdrop_path})`,
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-black/100 via-black/90 to-transparent">
        <div className="w-full h-full bg-gradient-to-t from-black/100 via-black/0 to-transparent p-4">
          <Header />
          <HeroMovie movie={heroMovie} />
        </div>
      </div>
    </div>
  );
}
