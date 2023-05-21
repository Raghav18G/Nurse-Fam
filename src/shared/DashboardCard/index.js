import React from "react";
import "./styles.css";
import { Paper, Typography } from "@mui/material";
import RightArrowBlack from "../../image/rightArrow-Black.svg";
import RightArrowWhite from "../../image/rightArrow-White.svg";

import { bgcolor } from "@mui/system";

const DashboardCard = ({ white, header, text, subtext, footerText }) => {
  const headerColor = white ? "#A52B92" : "#FFF";
  const textColor = white ? "#111" : "#FFF";
  const imageIcon = white ? RightArrowBlack : RightArrowWhite;
  const bgColor = white ? "#fff" : "#B06293";

  return (
    <Paper
      elevation={3}
      sx={{
        width: "30vh",
        borderRadius: "20px",
        padding: "1rem",
        background: bgColor,
      }}
    >
      <div className="DashboardCard--Container">
        <Typography variant="h6" sx={{ color: headerColor, fontWeight: "800" }}>
          {header}
        </Typography>
        <div className="DashboardCard--Content">
          <Typography
            variant="body1"
            sx={{ color: textColor, fontWeight: "bolder", fontSize: "16px" }}
          >
            {text}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#98A0A6", fontWeight: "bolder", fontSize: "14px" }}
          >
            {subtext}
          </Typography>
        </div>

        <div className="DashboardCard--Footer">
          <Typography
            variant="body1"
            sx={{ color: "#666F80", fontWeight: "bolder", fontSize: "13px" }}
          >
            {footerText}
          </Typography>
          <img src={imageIcon} style={{ width: "20px" }} />
        </div>
      </div>
    </Paper>
  );
};

export default DashboardCard;
