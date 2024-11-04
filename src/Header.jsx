import { Link } from "react-router-dom";
import { logOut } from "../auth/auth_google_provider_create";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const netflixLogoURL = import.meta.env.VITE_NETFLIX_LOGO_FULL_URL;
export function Header() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex gap-4 items-center my-4 font-bold p-4">
      <Link to="/">
        <img src={netflixLogoURL} className="h-8" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/tv">TV Shows</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/new">New & Popular</Link>
      <button className="ml-auto" onClick={logOut}>
        Log Out
      </button>
      <img src={user.photoURL} className="rounded-full w-12" />
    </div>
  );
}
