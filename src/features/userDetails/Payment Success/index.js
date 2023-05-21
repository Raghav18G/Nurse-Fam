import { Button, Link, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../../image/UDLogo.png";
import SignupLayout from "../../auth/SignupLayout";
import "./styles.css";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

const UDPaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <SignupLayout>
      <div className="ps-main-container">
        <div className="nfLogo">
          <img src={logo} style={{ width: "150px" }} />
        </div>
        <div className="psTitle">
          <Typography variant="h5">
            Payment Successful <br />
            You are now all set!
          </Typography>
        </div>
        <div className="progress-bar">
          <Paper elevation={3} sx={{ borderRadius: "5px", padding: "25px" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "800",
                display: "flex",
                margin: "10px 0px 10px 0px",
              }}
            >
              Profile Progress
            </Typography>
            <div className="progress-percent">
              <LinearProgress
                variant="determinate"
                value={80}
                color="secondary"
              />
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                80
              )}%`}</Typography>
            </div>
          </Paper>
        </div>
        <div className="ps-subtext">
          <Typography variant="subtitle">
            IDfy is our BGV Partner for verification, please check your email to
            know the status of your verification and &nbsp;
            <span>
              <Link>download the document</Link>
            </span>
          </Typography>
        </div>

        <div className="ps-footer-div">
          <div className="support-btn">
            <Button variant="outlined" fullWidth>
              Support
            </Button>
          </div>
          <div className="cont-btn">
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </SignupLayout>
  );
};

export default UDPaymentSuccess;
