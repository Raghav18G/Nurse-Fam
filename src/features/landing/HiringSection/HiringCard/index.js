import React from "react";
import "./styles.css";
import { Typography } from "@mui/material";

const HiringCard = ({ image, text, subtext }) => {
  return (
    <div className="HiringCard--Container">
      <div className="HiringCard--Left">
        <img src={image} alt="" style={{ width: "120px", margin: "2rem" }} />
      </div>
      <div className="HiringCard--Right">
        <Typography
          style={{
            textAlign: "center",
            color: "#666F80",
            fontWeight: "600",
            fontSize: "22px",
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: "center",

            color: "#666F80",
            fontWeight: "600",
            fontSize: "14px",
            width: "9rem",
          }}
        >
          {subtext}
        </Typography>
      </div>
    </div>
  );
};

export default HiringCard;
