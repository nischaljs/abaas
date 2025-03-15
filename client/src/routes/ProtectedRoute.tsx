import { Navigate, Outlet } from "react-router";
import { currentUserProviders } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { currentUser } =  currentUserProviders();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;