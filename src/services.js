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

export const SignupService = async (payload) => {
  try {
    const response = await axiosInstance.post("/signup/", payload);
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
    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};
//eduction details

export const setEducationDetails = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/nurse/education-details/",
      payload,
      {
        headers: { Authorization: `Bearer ${get_Token()}` },
      }
    );
    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};
//experience details

export const setExperienceDetails = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/nurse/experience-details/",
      payload,
      {
        headers: { Authorization: `Bearer ${get_Token()}` },
      }
    );
    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};
//license details

export const setLicenseDetails = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/nurse/licenses-details/",
      payload,
      {
        headers: { Authorization: `Bearer ${get_Token()}` },
      }
    );
    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};
//job preferences nurse details

export const setJobPreferences = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/nurse/nurse-details/",
      payload,
      {
        headers: { Authorization: `Bearer ${get_Token()}` },
      }
    );
    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};

//  nurse complete
export const getNurseCompletion = async (payload) => {
  try {
    const response = await axiosInstance.get(
      "/nurse/complition/",
      { headers: { Authorization: `Bearer ${get_Token()}` } },
      payload
    );

    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};
//  nurse applied jobs
export const getNurseAppliedJobs = async (payload) => {
  try {
    const response = await axiosInstance.get(
      "/nurse/appliedjob/",
      { headers: { Authorization: `Bearer ${get_Token()}` } },
      payload
    );

    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};
//  nurse invite
export const getNurseInvite = async (payload) => {
  try {
    const response = await axiosInstance.get(
      "/nurse/invities/",
      { headers: { Authorization: `Bearer ${get_Token()}` } },
      payload
    );

    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};

export const getUserDetails = async (payload) => {
  try {
    const response = await axiosInstance.get(
      "/nurse/invities/",
      { headers: { Authorization: `Bearer ${get_Token()}` } },
      payload
    );

    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};
