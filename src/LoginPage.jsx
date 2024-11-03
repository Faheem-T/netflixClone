import { getAuth } from "firebase/auth";
import { signIn } from "../auth/auth_google_provider_create";

export function LoginPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center gap-2">
      <div className="text-6xl font-black w-1/2">
        Unlimited movies, TV shows and more.
      </div>
      <div className="text-2xl">Watch anywhere. Cancel any time.</div>
      <div>Ready to watch? Sign Up!</div>
      <button
        className="p-2 bg-red-700 rounded-xl font-bold"
        onClick={() => console.log(signIn())}
      >
        Sign up
      </button>
    </div>
  );
}
