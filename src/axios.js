import axios from "axios";
import { get_Token } from "./utils/Helper";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${get_Token()}`,
  },
});

export default axiosInstance;
