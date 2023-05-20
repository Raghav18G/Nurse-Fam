import { Paper } from "@mui/material";
import React from "react";
import bannerImage from "../../image/banner-image.svg";
import "./styles.css";
const DashboardBanner = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "40vh",
        //   width: "30vh",
        borderRadius: "20px",
      }}
    >
      <div className="bannerWrapper">
        <div className="left-banner-content">Left</div>
        <div className="right-banner-content">
          <img src={bannerImage} />
        </div>
      </div>
    </Paper>
  );
};

export default DashboardBanner;
