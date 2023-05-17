import React from "react";

import { Route, Routes } from "react-router-dom";
import { adminRoleGetterService } from "./shared/services";

import SidebarLayout from "./features/side-bar/SidebarLayout";

import "./App.css";
//
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

      {/* <Route
        exact
        path="/"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      /> */}
    </Routes>
  );
}

export default App;
