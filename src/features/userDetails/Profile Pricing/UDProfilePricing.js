import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import logo from "../../../image/UDLogo.png";
import SignupLayout from "../../auth/SignupLayout";
import "./styles.css";
import tick from "../../../image/CheckboxTick.svg";
import cross from "../../../image/CheckboxCross.svg";

const UDProfilePricing = () => {
  return (
    <SignupLayout>
      <div className="mainContainer">
        <div className="nfLogo">
          <img src={logo} style={{ width: "150px" }} />
        </div>
        <div className="mainTitle">
          <Typography variant="h5">
            Great Job! You have <br />
            completed your Profile
          </Typography>
        </div>
        <div className="mainSubTitle">
          <Typography variant="subtitle">
            Now choose a plan and get started on your journey
          </Typography>
        </div>
        {/* content card */}

        <div className="cardContainer--profile-completion--parent">
          <div className="leftCardContainer--profile-completion">
            <div className="header-content">
              <Typography variant="title" sx={{ color: "#111 !important" }}>
                Basic Profile
              </Typography>

              <Typography> Free Plan</Typography>
            </div>
            <div className="benefitsCheck">
              <div className="benefitsCheck-content">
                <img
                  src={cross}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <Typography>No Background Verification</Typography>
              </div>
              <div className="benefitsCheck-content">
                <img
                  src={cross}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <Typography>No Badge</Typography>
              </div>
              <div className="benefitsCheck-content">
                <img
                  src={tick}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <Typography>Platform Level Support</Typography>
              </div>
            </div>
          </div>
          <Paper elevation={3} sx={{ borderRadius: "20px", width: "60vh" }}>
            <div className="rightCardContainer--profile-completion">
              <div className="header-content">
                <Typography variant="title" sx={{ color: "#111 !important" }}>
                  NurseFam Verified Profile
                </Typography>

                <Typography>
                  INR 2,500
                  <br />
                  One Time Verification Charges
                </Typography>
              </div>
              <div className="benefitsCheck">
                <div className="benefitsCheck-content">
                  <img
                    src={tick}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Typography>Get NurseFam Verified Badge</Typography>
                </div>
                <div className="benefitsCheck-content">
                  <img
                    src={tick}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Typography>Higher Job Success</Typography>
                </div>
                <div className="benefitsCheck-content">
                  <img
                    src={tick}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Typography>Higher Visibility</Typography>
                </div>
                <div className="benefitsCheck-content">
                  <img
                    src={tick}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Typography>Support and Guidance</Typography>
                </div>
                <div className="select-btn">
                  <Button variant="outlined">Select</Button>
                </div>
              </div>
            </div>
          </Paper>
        </div>

        {/* footer */}
        <div className="footerContainer--profile-completion">
          <div className="skip-btn">
            <Button variant="outlined" fullWidth>
              Skip
            </Button>
          </div>
          <div className="completeProfile--profile-completion">
            <Button variant="contained" fullWidth>
              Start Verification
            </Button>
          </div>
        </div>
      </div>
    </SignupLayout>
  );
};

export default UDProfilePricing;
