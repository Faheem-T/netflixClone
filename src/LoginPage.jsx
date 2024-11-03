import { signIn } from "../auth/auth_google_provider_create";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

export function LoginPage() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  const handleSignIn = async () => {
    try {
      const signedInUser = await signIn();
      setUser(signedInUser);
    } catch (error) {
      console.error("Sign in error: ", error);
    }
  };

  if (user) return <Navigate to="/" />;

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center gap-2">
      <div className="text-6xl font-black w-1/2">
        Unlimited movies, TV shows and more.
      </div>
      <div className="text-2xl">Watch anywhere. Cancel any time.</div>
      <div>Ready to watch? Sign Up!</div>
      <button
        className="p-2 bg-red-700 rounded-xl font-bold"
        onClick={handleSignIn}
      >
        Sign up
      </button>
    </div>
  );
}
