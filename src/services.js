import axiosInstance from "./axios";
import { get_Token } from "./utils/Helper";

//Signup
export const getMobileVerifyMessage = async (payload) => {
  try {
    const response = await axiosInstance.get(`/sendotp?phno=${payload}`);
    console.log("Response of Mobile Verification API", response);
    return response?.data;
  } catch (e) {
    return { error: e.response.data };
  }
};

export const OTPVerify = async (payload) => {
  try {
    const response = await axiosInstance.get(
      `verifyotp/?otp=${payload.otp}&message_id=${payload.message}`
    );
    console.log("Response of Mobile OTP API", response);
    if (response?.data?.status == 200) {
      console.log("OTP VERIFIED");
      return response?.data;
    }
    return response?.data;
  } catch (e) {
    return { error: e.response.data };
  }
};

export const Signup = async (payload) => {
  try {
    const response = await axiosInstance.post("/signup/", payload);
    console.log("Response of Signup API", response);
    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};

// my connections
export const GetConnections = async (payload) => {
  try {
    const response = await axiosInstance.get(
      "/nurse/allconnections/",
      { headers: { Authorization: `Bearer ${get_Token()}` } },
      payload
    );
    console.log("Response of GetConnections", response);
    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};

//general information

export const setGeneralInformation = async (payload) => {
  try {
    const response = await axiosInstance.patch("/nurse/generalinfo/", payload, {
      headers: { Authorization: `Bearer ${get_Token()}` },
    });
    console.log("Response of setGeneralInformation API", response);
    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};
