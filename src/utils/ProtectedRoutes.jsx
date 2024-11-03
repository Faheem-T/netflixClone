import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function ProtectedRoutes() {
  const { user, setUser } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
}
