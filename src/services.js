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

//General information

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

//UserDetails

export const getUserDetails = async (payload) => {
  try {
    const response = await axiosInstance.get(`/userdetails/`, {
      headers: { Authorization: `Bearer ${get_Token()}` },
    });

    if (response?.data?.status == 200) {
      return response?.data;
    }
    return response?.data;
  } catch (e) {
    return { error: e.response };
  }
};

//Verifications

export const verificationService = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/nurse/verifyaccount/",
      payload,
      {
        headers: { Authorization: `Bearer ${get_Token()}` },
      }
    );
    console.log("Response of Verification API", response);
    return response;
  } catch (e) {
    return { error: e.response };
  }
};

export const getJobDetails = async (payload) => {
  try {
    console.log("GET JOb Details");
    const response = await axiosInstance.get(
      `/nurse/job/?employee_type=${payload.employee_type}&location=${payload.location}`,
      {
        headers: { Authorization: `Bearer ${get_Token()}` },
      }
    );

    if (response?.data?.status == 200) {
      return response?.data;
    }
    return response?.data;
  } catch (e) {
    return { error: e.response };
  }
};

export const getLocationDetails = async (payload) => {
  try {
    const response = await axiosInstance.get(`/nurse/location`, {
      headers: { Authorization: `Bearer ${get_Token()}` },
    });

    if (response?.data?.status == 200) {
      return response?.data;
    }
    return response?.data;
  } catch (e) {
    return { error: e.response };
  }
};

//  Refer complete
export const getReferral = async () => {
  try {
    const response = await axiosInstance.get("/nurse/refer/", {
      headers: { Authorization: `Bearer ${get_Token()}` },
    });

    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};

//  Refer email complete
export const getRefrralViaMail = async (payload) => {
  try {
    const response = await axiosInstance.get(
      `/nurse/share/?email=${payload?.mail}&link=${payload?.link}`,
      {
        headers: { Authorization: `Bearer ${get_Token()}` },
      }
    );

    return response;
  } catch (e) {
    return { error: e.response.data };
  }
};

//APPLY JOB

export const applyJob = async (payload) => {
  try {
    const response = await axiosInstance.post("/nurse/jobapply/", payload, {
      headers: { Authorization: `Bearer ${get_Token()}` },
    });
    console.log("Response of JOB AAPLY API", response);
    return response;
  } catch (e) {
    return { error: e.response };
  }
};

export const getAppliedJobsService = async (payload) => {
  try {
    const response = await axiosInstance.get(`/nurse/allapply`, {
      headers: { Authorization: `Bearer ${get_Token()}` },
    });

    return response;
  } catch (e) {
    return { error: e.response };
  }
};
