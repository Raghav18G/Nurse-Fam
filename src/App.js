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
import UDProfilePricing from "./features/userDetails/Profile Pricing";
import UDPaymentSuccess from "./features/userDetails/Payment Success";
import UDGeneralInfo from "./features/userDetails/UDGeneralInfo";
import UDLayout from "./features/userDetails/UDLayout";
import Sample from "./shared/sample";
import Dashboard from "./features/Dashboard";
import Profile from "./features/Profile";
import SearchJobs from "./features/SearchJobs";
import MyJobs from "./features/MyJobs";
import Messages from "./features/Messages";
import Activities from "./features/Activities";

function App() {
  const admin_role = adminRoleGetterService();
  const permitAdmin = admin_role === "Super" ? true : false;
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/searchJobs" element={<SearchJobs />} />
        <Route path="/myJobs" element={<MyJobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/activities" element={<Activities />} />
      </Route>

      <Route exact path="/" element={<Landing />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/userDetails" element={<UDLanding />} />
      <Route exact path="/userDetails/info" element={<UDLayout />} />
      <Route exact path="/login" element={<Signin />} />
      <Route exact path="/plans" element={<UDProfilePricing />} />
      <Route exact path="/paysuccess" element={<UDPaymentSuccess />} />

      {/* PORTFOLIO */}
      <Route exact path="/components" element={<Sample />} />
    </Routes>
  );
}

export default App;
