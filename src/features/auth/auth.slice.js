import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authDetails: {},
  role: "",
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    storeAuthSlice: (state, action) => {
      state.authDetails = action.payload;
    },

    storeUserNameSlice: (state, action) => {
      state.userName = action.payload;
    },
    storeUserRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { storeAuthSlice, storeUserNameSlice } = authSlice.actions;

export default authSlice.reducer;
