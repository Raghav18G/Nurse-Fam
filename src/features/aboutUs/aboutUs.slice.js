import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AboutUsService } from "./service";



const initialState = {
 
  data: [],
  loading: "idle", // "idle" | "pending" | "succeeded" | "failed",
  error: "",
};

// export const fetchAboutUs = createAsyncThunk(
//   "tour/fetchData",
//   async (viewType, thunkAPI) => {  
//      const { data, count, error, isSuccess } = await AboutUsService.fetchAboutUs();        
//     if (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//     return { data, isSuccess };
//   }
// );


const aboutUsSlice = createSlice({
  name: "aboutUS",
  initialState,
  reducers: {
    storeAboutUs: (state, action) => {
      state.data = action.payload;
    },
  },
  
//   extraReducers: (builder) => {
//     builder.addCase(fetchAboutUs.pending, (state) => {
//       state.loading = "pending";
//       state.data = [];
//     });
//     builder.addCase(fetchAboutUs.fulfilled, (state, action) => {
//       state.data = action.payload.data;
//       state.loading = "succeeded";
//     });
//     builder.addCase(fetchAboutUs.rejected, (state, action) => {  
//       state.loading = "pending";
//     });
//   },
});

export const { storeAboutUs } = aboutUsSlice.actions;

export default aboutUsSlice.reducer;
