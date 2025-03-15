import { Navigate, Outlet } from "react-router";
import { currentUserProviders } from "../context/AuthContext";

const PublicRoute = () => {
  const { currentUser } = currentUserProviders();

  if (currentUser) {

    return <Navigate to="/profile" />;
  }


  return <Outlet />;
};

export default PublicRoute;