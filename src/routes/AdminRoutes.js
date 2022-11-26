import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({children}) => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, adminLoader] = useAdmin(user?.email);
  const location = useLocation();
  if (loader || adminLoader) {
    return <Spinner></Spinner>;
  }
  if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
