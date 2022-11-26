import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AuthContext } from "../context/AuthProvider";
import useSeller from "../hooks/useSeller";

const SellerRoutes = ({children}) => {
  const { user, loader } = useContext(AuthContext);
  const [isSeller, sellerLoader] = useSeller(user?.email);
  const location = useLocation();
  if (loader || sellerLoader) {
    return <Spinner></Spinner>;
  }
  if (user && isSeller) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoutes;
