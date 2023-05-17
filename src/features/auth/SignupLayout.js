import React from "react";
import "./style.css";
import { Paper } from "@mui/material";

const SignupLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="cardContainer">
        <Paper elevation={3} sx={{ borderRadius: "40px" }}>
          <div className="cardContent">{children}</div>
        </Paper>
      </div>
    </div>
  );
};

export default SignupLayout;
