import React from "react";

import { Route, Routes } from "react-router-dom";

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
import VerificationStart from "./features/Dashboard/VerificationStart";
import VerificationProgress from "./features/Dashboard/VerificationProgress";
import VerificationSuccess from "./features/Dashboard/VerificationSuccess";
import PrivateOutlet from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmployerSignup from "./features/employerAuth/EmployerSignup";
import EmployerSignin from "./features/employerAuth/EmployerSignin";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<PrivateOutlet />}>
          <Route element={<SidebarLayout />}>
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/verificationStart"
              element={<VerificationStart />}
            />
            <Route
              path="/dashboard/verificationProgress"
              element={<VerificationProgress />}
            />
            <Route
              path="/dashboard/verificationSuccess"
              element={<VerificationSuccess />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/searchJobs" element={<SearchJobs />} />
            <Route path="/myJobs" element={<MyJobs />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/activities" element={<Activities />} />
          </Route>
        </Route>

        <Route exact index path="/landing" element={<Landing />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signupEmployer" element={<EmployerSignup />} />
        <Route exact path="/signinEmployer" element={<EmployerSignin />} />
        <Route exact path="/userDetails" element={<UDLanding />} />
        <Route exact path="/userDetails/info" element={<UDLayout />} />
        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/plans" element={<UDProfilePricing />} />
        <Route exact path="/paysuccess" element={<UDPaymentSuccess />} />

        {/* PORTFOLIO */}
        <Route exact path="/components" element={<Sample />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
