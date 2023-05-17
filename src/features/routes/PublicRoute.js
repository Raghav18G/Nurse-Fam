import React from "react";

import { Navigate } from "react-router-dom";
import { adminInfoGetterService } from "../../shared/services";

const PublicRoute = ({ children }) => {
  const token = adminInfoGetterService();
  return !token ? children : <Navigate to="/dashboard/statistics" />;
};

export default PublicRoute;

