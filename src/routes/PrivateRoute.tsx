import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { StorageService } from "../services/StorageService";

const PrivateRoute = () => {
  const auth = useAuth();
  const { validateToken } = StorageService();

  if (!auth?.token) return <Navigate to="/login" />;
  if (!validateToken(auth?.token ?? "")) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;
