import React from "react";
import "./styles.css";
import logo from "../../../image/UDLogo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Typography } from "@mui/material";

import userAvatar from "../../../image/useravatar.svg";
const UDLayout = () => {
  return (
    <div className="UDLayout--Contaner">
      <div className="UDLayout--Top">
        <img src={logo} style={{ width: "150px" }} />
        <div className="UDNavRight--Container">
          <NotificationsIcon
            sx={{ marginRight: "4rem", marginTop: "0.8rem" }}
          />
          <Typography
            sx={{
              color: "#A52B92",
              fontWeight: "800",
              marginRight: "2rem",
              marginTop: "0.8rem",
            }}
          >
            John Doe
          </Typography>
          <img src={userAvatar} style={{ width: "40px" }} />
        </div>
      </div>
      <div className="UDLayout--Bottom">
        <div className="UDLayout--Bottom-left">Component</div>
        <div className="UDLayout--Bottom-right">Right</div>
      </div>
    </div>
  );
};

export default UDLayout;
