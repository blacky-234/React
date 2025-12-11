import { Navigate,useLocation } from "react-router-dom";
import { useAuth } from "./Auth";
import type { JSX } from "react";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};