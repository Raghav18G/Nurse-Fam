import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies();
// Login Action
export const login = createAsyncThunk(`auth/login`, async (payload) => {
  console.log("LOGIN ACTION");
  let t_id = "";
  console.log("PAYLOAD LOGIN", payload);
  if (
    payload?.email == "test123@gmail.com" &&
    payload?.password == "Test@0321"
  ) {
    cookies.set("t_id", "1234");
    return "1234";
  }
  return t_id;
});

// Logout Action
export const logout = createAsyncThunk("auth/logout", () => {
  try {
    cookies.remove("t_id");
    console.log("COOKIEs LOGOUT", cookies);
    return true;
  } catch (e) {
    console.log({ e });
  }
});
