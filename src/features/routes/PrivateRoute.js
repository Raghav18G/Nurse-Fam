import React from "react";

import { Navigate, useNavigate } from "react-router-dom";
import {
  adminInfoGetterService,
  adminInfoRemovalService,
  adminRoleRemovalService,
} from "../../shared/services";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { storeAuthSlice } from "../auth/auth.slice";

const PrivateRoute = ({ children, permitAdmin }) => {
  const token = adminInfoGetterService();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let urlParams = null;
  let user = null;
  if (window.location.toString().includes("token")) {
    urlParams = window.location.href.split("=")[1];
    // user = jwt(urlParams);
    user = atob(urlParams);
    const user_email = user.split("email")[1].split(":")[1].split(",")[0];
    const real_email = user_email.replace(`"`, "");
    const new_email = real_email.replace(`"`, "");
    dispatch(storeAuthSlice(new_email));
  }

  if (urlParams) {
    return children;
  } else if (children.type.name == "Register" && !urlParams) {
    adminInfoRemovalService();
    adminRoleRemovalService();
    return <Navigate to="/" />;
  } else if (token) {
    if (permitAdmin) {
      return children;
    }
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
