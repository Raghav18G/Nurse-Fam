import React from "react";

import { Route, Routes } from "react-router-dom";
import { adminRoleGetterService } from "./shared/services";

import PrivateRoute from "./features/routes/PrivateRoute";
import PublicRoute from "./features/routes/PublicRoute";
import SidebarLayout from "./features/side-bar/SidebarLayout";

import "./App.css";
import Signup from "./features/auth/Signup";
import UDLanding from "./features/userDetails/UDLanding";

import Signin from "./features/auth/Signin";
import Landing from "./features/landing";
import UDGeneralInfo from "./features/userDetails/UDGeneralInfo";
import UDLayout from "./features/userDetails/UDLayout";
import Sample from "./shared/sample";

function App() {
  const admin_role = adminRoleGetterService();
  const permitAdmin = admin_role === "Super" ? true : false;
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route
          path="/group-tour-enquiry"
          // element={
          //   <PrivateRoute permitAdmin={true}>
          //     <GroupTourEnquiryView />
          //   </PrivateRoute>
          // }
        />
        <Route
          path="/group-tour"
          // element={
          //   <PrivateRoute permitAdmin={true}>
          //     <GroupTourEnquiryView />
          //   </PrivateRoute>
          // }
        />
        <Route
          path="/group"
          // element={
          //   <PrivateRoute permitAdmin={true}>
          //     <GroupTourEnquiryView />
          //   </PrivateRoute>
          // }
        />
      </Route>

      <Route exact path="/" element={<Landing />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/userDetails" element={<UDLanding />} />
      <Route exact path="/userDetails/generalInfo" element={<UDLayout />} />
      <Route exact path="/login" element={<Signin />} />

      {/* PORTFOLIO */}
      <Route exact path="/components" element={<Sample />} />
    </Routes>
  );
}

export default App;
