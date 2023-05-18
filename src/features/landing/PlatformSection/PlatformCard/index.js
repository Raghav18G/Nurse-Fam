import React from "react";
import "./styles.css";
import { Paper } from "@mui/material";

const PlatformCard = ({ image, text, handleClick }) => {
  return (
    <div
      className="platformCard"
      style={{ backgroundImage: `url(${image})` }}
      onClick={handleClick}
    >
      <div className="platformCard--Content">
        <Paper
          elevation={3}
          sx={{
            height: "19vh",
            borderRadius: "4px",
            padding: "1.5rem",
            fontFamily: "Montserrat",
            fontWeight: "600",
            color: "#666F80",
            fontSize: "14px",
            border: "1px solid #341950",
          }}
        >
          {text}
        </Paper>
      </div>
    </div>
  );
};

export default PlatformCard;
