import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import axiosInstance from "../../../axios";

const cookies = new Cookies();
// Login Action
export const login = createAsyncThunk(`auth/login`, async (payload) => {
  console.log("LOGIN ACTION");
  let t_id = "";
  console.log("PAYLOAD LOGIN", payload);
  const response = await axiosInstance.post("/signin/", payload);
  console.log("Response of Login API", response);
  if (response?.data?.status == 200) {
    cookies.set("t_id", response?.data?.refresh);
    return response;
  }
  return response;
});

// Logout Action
export const logout = createAsyncThunk("auth/logout", () => {
  try {
    cookies.remove("t_id");
    console.log("COOKIEs LOGOUT", cookies);
    return true;
  } catch (e) {
    console.log({ e });
  }
});

//Sign up Actions

// Mobile Verify Action
export const mobileVerify = createAsyncThunk(
  `auth/signup/MobileVerify`,
  async (payload) => {
    console.log("Mobile Verification ACTION");
    console.log("PAYLOAD Mobile", payload);
    const response = await axiosInstance.get(`/sendotp?phno=${payload}`);
    console.log("Response of Mobile Verification API", response);
    if (response?.data?.status == 200) {
      console.log("OTP SENT");
      return response?.data;
    }
    return response?.data;
  }
);
