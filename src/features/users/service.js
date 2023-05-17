import { cancellableRequest } from "../../shared/utils";
import { axiosInstance } from "../../shared/axios";
import { getBlockState } from "./utils";
import { adminInfoGetterService } from "../../shared/services";

const fetchUser = async ({ currentPageLimit, currentPage, searchKey }) => {
  try {
    const response = await axiosInstance.get(
      `/admins/userList?limit=${currentPageLimit}&page=${currentPage}&name=${searchKey}`,
      null
    );
    return response.data;
  } catch (e) {
    return {
      error: e,
    };
  }
};

// const deleteUser = async (id = "") => {
//   try {
//     const { status } = await axiosInstance.post(`/admin/deleteAccount?id=${id}`, null);
//     return { isSuccess: status === 200 };
//   } catch (e) {
//     return {
//       error: e.response.data || e.message,
//     };
//   }
// };

// const logoutUser = async (id) => {
//   try {
//     const { status } = await axiosInstance.post(`/admin/logoutAllDevices`, {
//       id,
//     });
//     return { isSuccess: status === 200 };
//   } catch (e) {
//     return {
//       error: e.response.data || e.message,
//     };
//   }
// };

export const UserService = {
  // fetchUsers: cancellableRequest(fetchUsers),
  // fetchTrainers: cancellableRequest(fetchTrainers),
  // deleteUser,
  // undoUser,
  // toggleUserStatus,
  // updateBlockStatus,
  // logoutUser,
  // remarkUpdate,
  fetchUser,
};
