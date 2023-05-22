import axiosInstance from "./axios";

export const getAdminUsers = async (payload) => {
  try {
    const response = await axiosInstance.post(`/adminuser/list`, payload);
    return response;
  } catch (e) {
    return { error: e.response.data.message };
  }
};
