import React from "react";

import { Route, Routes } from "react-router-dom";
import { adminRoleGetterService } from "./shared/services";

import Login from "./features/auth";
import PrivateRoute from "./features/routes/PrivateRoute";
import PublicRoute from "./features/routes/PublicRoute";
import SidebarLayout from "./features/side-bar/SidebarLayout";

import "./App.css";
import Signup from "./features/auth/Signup";
import Signin from "./features/auth/Signin";

function App() {
  const admin_role = adminRoleGetterService();
  const permitAdmin = admin_role === "Super" ? true : false;
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        {/* <Route
          path="/group-tour-enquiry"
          element={
            <PrivateRoute permitAdmin={true}>
              <GroupTourEnquiryView />
            </PrivateRoute>
          }
        /> */}
      </Route>

      <Route exact path="/" element={<Signup />} />
      <Route exact path="/login" element={<Signin />} />
    </Routes>
  );
}

export default App;
