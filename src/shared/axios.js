import axios from "axios";

import { BASE_URL } from "./constants";
import { adminInfoGetterService, adminInfoRemovalService } from "./services";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   language: 1,
  // },
});

axiosInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = `bearer ${adminInfoGetterService()}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 403) {
      adminInfoRemovalService();
      window.location = "/";
    } else return Promise.reject(error);
  }
);
