import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth.t_id);
  return auth ? <Outlet /> : <Navigate to="/landing" />;
};

export default PrivateRoute;
