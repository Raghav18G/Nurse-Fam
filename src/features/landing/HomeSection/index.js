import React from "react";
import "../styles.css";
import logo from "../../../image/signup/logo.png";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const HomeSection = () => {
  const navigate = useNavigate();
  return (
    <div className="HomeSection--Container">
      <div className="HomeSection--Navbar">
        <img src={logo} style={{ width: "200px" }} />
        <div className="HomeSection--Navbar--text">
          <Typography
            sx={{
              fontWeight: "600",
              color: "#666F80",
              fontFamily: "Montserrat",
              textAlign: "center",
              margin: "1rem",
              cursor: "pointer",
            }}
          >
            Find Jobs
          </Typography>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#666F80",
              fontFamily: "Montserrat",
              textAlign: "center",
              margin: "1rem",
              cursor: "pointer",
            }}
          >
            .
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              color: "#666F80",
              fontFamily: "Montserrat",
              textAlign: "center",
              margin: "1rem",
              cursor: "pointer",
            }}
          >
            Find Care
          </Typography>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#666F80",
              fontFamily: "Montserrat",
              textAlign: "center",
              margin: "1rem",
              cursor: "pointer",
            }}
          >
            .
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              color: "#666F80",
              fontFamily: "Montserrat",
              textAlign: "center",
              margin: "1rem",
              cursor: "pointer",
            }}
          >
            For Employers
          </Typography>
        </div>
        <div style={{ marginTop: "-2rem" }}>
          <Typography
            sx={{
              textAlign: "end",
              marginBottom: "1rem",
              color: "#A52B92",
              fontWeight: "800",
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            Sign In
          </Typography>
          <Button variant="contained" sx={{ marginTop: "-0.5rem" }}>
            Partner Program
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
