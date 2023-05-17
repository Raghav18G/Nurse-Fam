
import { axiosInstance } from "../../shared/axios";


const fetchAboutUs = async () => {
  try {
    const  {data, status}  = await axiosInstance.get(
      `/landing/pages/about-us`,null
    );    
    return {data: data.data.aboutUs, isSuccess: status === 200};
  } catch (e) {
    return {
      error: e.response.data || e.message,
    };
  }
};

const fetchFacility = async () => {
  try {
    const response = await axiosInstance.get(
      `/facility`,
      null
    );
    return {facilityData :response.data.data};
  } catch (e) {
    return {
      error: e,
    };
  }
};
const updateAboutUs = async (payload) => {
  try {
    const  {data, status}  = await axiosInstance.post(
      `/landing/pages/about-us`,payload
    );    
    return { isSuccess: status === 200};
  } catch (e) {
    return {
      error: e.response.data || e.message,
    };
  }
};


export const AboutUsService = {
  fetchAboutUs: fetchAboutUs,
  fetchFacility:fetchFacility,
  updateAboutUs: updateAboutUs
};
