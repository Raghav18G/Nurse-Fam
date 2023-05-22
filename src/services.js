import axiosInstance from "./axios";

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
