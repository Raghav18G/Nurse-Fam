import * as yup from "yup";

export const getBlockState = (payload) => {
  return typeof payload === "number"
    ? { 0: "UNBLOCKED", 1: "PARTIALLY_BLOCKED", 2: "BLOCKED" }[
        payload.toString()
      ]
    : {
        UNBLOCK: "whitelist",
        PARTIALLY_BLOCK: "partial blacklist",
        BLOCK: "blacklist",
      }[payload];
};

export const getActiveState = (payload) => {
  return payload ? "ACTIVED" : "DEACTIVED";
};

export const getSchema = () => {
  return yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
  });
};
