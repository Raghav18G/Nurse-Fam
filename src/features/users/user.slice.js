import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "./service";

const initialState = {
  total: 0,
  data: [],
  currentPage: 0,
  currentPageLimit: 25,
  loading: "idle", // "idle" | "pending" | "succeeded" | "failed",
  error: "",
  searchKey: "",
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUser",
  async (viewType, thunkAPI) => {
    const { searchKey, currentPage, currentPageLimit } =
      thunkAPI.getState().user;
    const payload = {
      currentPage,
      currentPageLimit,
      searchKey,
    };
    const data = await UserService.fetchUser(payload);
    // if (error) {
    //   return thunkAPI.rejectWithValue(error);
    // }
    return data;
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, thunkAPI) => {
    const { isSuccess, error } = await UserService.deleteUser(id);
    if (isSuccess) {
      return id;
    }
    return thunkAPI.rejectWithValue(error);
  }
);

// export const logoutUser = createAsyncThunk(
//   "user/logoutUser",
//   async (id, thunkAPI) => {
//     const { isSuccess, error } = await UserService.logoutUser(id);
//     if (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//     return isSuccess;
//   }
// );
// export const remarkUpdate = createAsyncThunk(
//   "user/remarkUpdate",
//   async ({userId, remarkType}, thunkAPI) => {
//     const data = await UserService.remarkUpdate(userId, remarkType);

//     // if (error) {
//     //   return thunkAPI.rejectWithValue(error);
//     // }
//     return data.remarkList.remark;
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    pageChanged(state, action) {
      state.currentPage = action.payload;
    },
    sortingChanged(state, action) {
      state.sortingInfo = action.payload;
    },
    searchKeyChanged(state, action) {
      state.searchKey = action.payload;
    },
    pageLeft(state) {
      state.searchKey = "";
    },
    pageLimit(state, action) {
      state.currentPageLimit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = "pending";
      state.data = [];
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.total = action.payload.totalData;
      state.loading = "succeeded";
    });
    // builder.addCase(deleteUser.fulfilled, (state, action) => {
    //   state.data.forEach((item) =>
    //     item._id === action.payload ? (item.isDeleted = true) : item
    //   );
    // });
    // builder.addCase(undoUser.fulfilled, (state, action) => {
    //   state.data.forEach((item) =>
    //     item._id === action.payload ? (item.isDeleted = false) : item
    //   );
    // });
    // builder.addCase(toggleUserStatus.fulfilled, (state, action) => {
    //   state.data.forEach((item) =>
    //     item._id === action.payload ? (item.isActive = !item.isActive) : item
    //   );
    // });
    // builder.addCase(updateBlockStatus.fulfilled, (state, action) => {
    //   const { id, status } = action.payload;
    //   state.data.forEach((item) =>
    //     item._id === id ? (item.isBlacklisted = status) : item
    //   );
    // });
    // builder.addCase(remarkUpdate.fulfilled, (state, action) => {
    //   state.remarkStatus = action.payload;
    //   state.loading = "succeeded";
    // });
  },
});

export const {
  pageChanged,
  sortingChanged,
  searchKeyChanged,
  pageLeft,
  pageLimit,
} = userSlice.actions;
export default userSlice.reducer;
