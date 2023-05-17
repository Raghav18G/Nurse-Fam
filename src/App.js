import React from "react";

import { Route, Routes } from "react-router-dom";
import { adminRoleGetterService } from "./shared/services";

import Login from "./features/auth";
import PrivateRoute from "./features/routes/PrivateRoute";
import PublicRoute from "./features/routes/PublicRoute";
import SidebarLayout from "./features/side-bar/SidebarLayout";

import "./App.css";

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

      <Route exact path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
