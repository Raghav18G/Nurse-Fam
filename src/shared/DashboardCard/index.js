import React from "react";
import "./styles.css";
import { Paper, Typography } from "@mui/material";
import RightArrowBlack from "../../image/rightArrow-Black.svg";
import RightArrowWhite from "../../image/rightArrow-White.svg";

import { bgcolor } from "@mui/system";

const DashboardCard = ({
  white,
  header,
  text,
  subtext = "",
  footerText,
  handleClick,
}) => {
  const headerColor = white ? "#A52B92" : "#FFF";
  const textColor = white ? "#111" : "#FFF";
  const imageIcon = white ? RightArrowBlack : RightArrowWhite;
  const bgColor = white ? "#fff" : "#B06293";
  const contentColor = white ? "#666F80" : "#fff";
  const subTextColor = white ? "#98A0A6" : "#FFF";

  return (
    <Paper
      elevation={3}
      sx={{
        height: "20vh",
        width: "15vw",
        borderRadius: "20px",
        padding: "1rem",
        background: bgColor,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <div className="DashboardCard--Container">
        <Typography sx={{ color: headerColor, fontWeight: "800" }}>
          {header}
        </Typography>
        <div className="DashboardCard--Content">
          <Typography
            variant="body1"
            sx={{ color: textColor, fontWeight: "bolder", fontSize: "12px" }}
          >
            {text}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: subTextColor, fontWeight: "bolder", fontSize: "10px" }}
          >
            {subtext}
          </Typography>
        </div>

        <div className="DashboardCard--Footer">
          <Typography
            variant="body1"
            sx={{ color: contentColor, fontWeight: "bolder", fontSize: "10px" }}
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
