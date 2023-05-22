import { createSlice } from "@reduxjs/toolkit";
import initialState from "./state";
import { login, logout } from "./actionCreator";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //LOGIN
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.t_id = action?.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      const msg = action?.error?.message;
      if (msg == "Request failed with status code 502") {
        state.error = "Invalid Password";
      } else {
        state.error = "User Not Found, Please Try Again!";
      }
      state.loading = false;
    });
    //LOGOUT
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.t_id = "";
      state.loading = false;
      state.error = "";
      state.success = true;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action?.payload;
    });
  },
});

export default authSlice.reducer;
