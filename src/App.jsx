import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";

import "./index.css";

import { Home } from "./Homepage.jsx";
import { TitlePage } from "./TitlePage.jsx";
import { LoginPage } from "./LoginPage.jsx";
import { ProtectedRoutes } from "./utils/ProtectedRoutes.jsx";
import { UserContext } from "./contexts/UserContext.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Loading } from "./Loading.jsx";
import { TVPage } from "./TVPage.jsx";
import { MoviePage } from "./MoviePage.jsx";
import { NewTrending } from "./NewTrending.jsx";

// React Query Client
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 60 } },
});
export function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <Loading />;

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/title/:type/:id" element={<TitlePage />} />
              <Route path="/tv" element={<TVPage />} />
              <Route path="/movies" element={<MoviePage />} />
              <Route path="/new" element={<NewTrending />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
