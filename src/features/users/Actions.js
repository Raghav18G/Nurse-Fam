import React, { useState } from "react";

import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import ConfirmationPopup from "../../shared/ConfirmationPopup";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { getBlockState, getActiveState } from "./utils";
import {
  deleteUser,
  toggleUserStatus,
  undoUser,
  updateBlockStatus,
  logoutUser,
} from "./user.slice";

const Actions = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const [params] = useSearchParams();

  const viewType = params.get("view-type");

  // const handleBlockStatus = (status) => {
  //   dispatch(
  //     updateBlockStatus({
  //       id: user._id,
  //       email: user.email,
  //       phone: user.phone,
  //       status,
  //     })
  //   );
  // };

  const open = Boolean(anchorEl);
  const blockState = getBlockState(user.isBlacklisted);
  const activeState = getActiveState(user.isActive);
  const deleteState = user.isDeleted;

  return (
    <>
      {/* <Button
        id="actions-button"
        aria-controls={open ? "actions-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        variant="contained"
      >
        Actions
      </Button> */}
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "actions-button",
        }}
      >
        <ConfirmationPopup
          message={`Do you really want to delete the user ?`}
          handleConfirmation={() => dispatch(deleteUser(user._id))}
          render={(handlePopupOpen) => (
            <MenuItem disabled={deleteState} onClick={handlePopupOpen}>
              {`Delete User`}
            </MenuItem>
          )}
        />
        {/* <ConfirmationPopup
          // message="Do you really want to undo the user ?"
          message={`Do you really want to undo the ${viewType} ?`}
          handleConfirmation={() => dispatch(undoUser(user._id))}
          render={(handlePopupOpen) => (
            <MenuItem disabled={!deleteState} onClick={handlePopupOpen}>
              {`Undo ${viewType}`}
            </MenuItem>
          )}
        /> */}
        {/* <ConfirmationPopup
          message={`Do you really want to activate the ${viewType} ?`}
          handleConfirmation={() => dispatch(toggleUserStatus(user._id))}
          render={(handlePopupOpen) => (
            <MenuItem
              disabled={deleteState || activeState === "ACTIVED"}
              onClick={handlePopupOpen}
            >
              Activate
            </MenuItem>
          )}
        />
        <ConfirmationPopup
          message={`Do you really want to deactivate the ${viewType} ?`}
          handleConfirmation={() => dispatch(toggleUserStatus(user._id))}
          render={(handlePopupOpen) => (
            <MenuItem
              disabled={deleteState || activeState === "DEACTIVED"}
              onClick={handlePopupOpen}
            >
              Deactivate
            </MenuItem>
          )}
        /> */}
        {/* <ConfirmationPopup
          message={`Do you really want to block the ${viewType} ?`}
          handleConfirmation={() => handleBlockStatus("BLOCK")}
          render={(handlePopupOpen) => (
            <MenuItem
              onClick={handlePopupOpen}
              disabled={deleteState || blockState === "BLOCKED"}
            >
              Block
            </MenuItem>
          )}
        /> */}
        {/* <ConfirmationPopup
          message={`Do you really want to unblock the ${viewType} ?`}
          handleConfirmation={() => handleBlockStatus("UNBLOCK")}
          render={(handlePopupOpen) => (
            <MenuItem
              onClick={handlePopupOpen}
              disabled={deleteState || blockState === "UNBLOCKED"}
            >
              Unblock
            </MenuItem>
          )}
        /> */}
        {/* <ConfirmationPopup
          message={`Do you really want to partially block the ${viewType} ?`}
          handleConfirmation={() => handleBlockStatus("PARTIALLY_BLOCK")}
          render={(handlePopupOpen) => (
            <MenuItem
              onClick={handlePopupOpen}
              disabled={deleteState || blockState === "PARTIALLY_BLOCKED"}
            >
              Partially Block
            </MenuItem>
          )}
        />
        <ConfirmationPopup
          message={`Do you really want to logout the ${viewType} ?`}
          handleConfirmation={() => dispatch(logoutUser(user._id))}
          render={(handlePopupOpen) => (
            <MenuItem onClick={handlePopupOpen}>Logout</MenuItem>
          )}
        /> */}
      </Menu>
    </>
  );
};

export default Actions;
