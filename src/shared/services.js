import { axiosInstance } from "./axios";

export const adminLogoutService = async () => {
  try {
    const { data } = await axiosInstance.post(`/admin/logout`);
    return { isSuccess: data.response.message === "successfully logged out." };
  } catch (e) {
    return {
      error: e.response.data,
    };
  }
};

export const adminRoleGetterService = () => {
  return localStorage.getItem("role");
};

export const adminRoleStorageService = (admin) => {
  localStorage.setItem("role", admin);
};

export const adminRoleRemovalService = () => {
  localStorage.removeItem("role");
};

export const adminInfoGetterService = () => {
  return localStorage.getItem("t_id");
};

export const adminInfoStorageService = (admin) => {
  localStorage.setItem("t_id", admin);
};
export const adminIdStorageService = (admin) => {
  localStorage.setItem("id", admin);
};

export const adminIdGetterService = () => {
  return localStorage.getItem("id");
};

export const adminIdRemovalService = () => {
  localStorage.removeItem("id");
};

export const adminInfoRemovalService = () => {
  localStorage.removeItem("t_id");
};

export const adminNameGetterService = () => {
  return localStorage.getItem("name");
};

export const adminNameStorageService = (admin) => {
  localStorage.setItem("name", admin);
};

export const adminNameRemovalService = () => {
  localStorage.removeItem("name");
};

export const fetchCountryCodes = async () => {
  try {
    const { data } = await axiosInstance.get(`/country/get`);
    return data.response;
  } catch (e) {
    return { error: e.response.data.message };
  }
};

export const uploadFile = async (payload) => {
  try {
    const { status, data } = await axiosInstance.post(
      `/admins/upload`,
      payload
    );
    return { isSuccess: status === 201, fileUrl: data.data[0].fileLocation };
  } catch (e) {
    return { error: e.response.data.message };
  }
};
export const uploadMultiFile = async (payload) => {
  try {
    const { status, data } = await axiosInstance.post(
      `/admins/upload`,
      payload
    );
    return { isSuccess: status === 201, fileUrl: data.data };
  } catch (e) {
    return { error: e.message };
  }
};
