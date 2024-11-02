import { Link } from "react-router-dom";

const netflixLogoURL = import.meta.env.VITE_NETFLIX_LOGO_FULL_URL;
export function Header() {
  return (
    <div className="flex gap-4 items-center my-4 font-bold">
      <Link to="/">
        <img src={netflixLogoURL} className="h-8" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/tv">TV Shows</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/new">New & Popular</Link>
    </div>
  );
}
