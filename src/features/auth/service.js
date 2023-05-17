import { axiosInstance } from "../../shared/axios";

export const adminLoginService = async (creds) => {
  try {
    const data = await axiosInstance.post(`/admins/login`, creds);
    return data;
  } catch (e) {
    return {
      error: "Email/Password Invalid",
    };
  }
};
export const fetchRole = async (value) => {
  try {
    const { data } = await axiosInstance.get(`/admins/${value}`, value);
    return data?.data;
  } catch (e) {
    return {
      error: "Invalid Role",
    };
  }
};

export const adminRegisterService = async ({ data, token }) => {
  try {
    const response = await axiosInstance.post(
      `/admins/accept-invite?token=${token}`,
      data
    );
    return response;
  } catch (e) {
    return {
      error: "Enter Valid Credentials",
    };
  }
};
