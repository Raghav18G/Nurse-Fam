import { Button, Typography } from "@mui/material";
import React from "react";
import logo from "../../image/UDLogo.png";
import SignupLayout from "../auth/SignupLayout";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const UDLanding = () => {
  const navigate = useNavigate();
  return (
    <SignupLayout>
      <div className="gridContainer">
        <div className="nfLogo">
          <img src={logo} style={{ width: "200px" }} />
        </div>
        <div className="titleText">
          <Typography variant="h4">
            Welcome to NurseFam Care Network! <br /> Let&apos;s complete your
            profile
          </Typography>
        </div>
        <div className="subTitle">
          <Typography variant="subtitle">
            It should only take a couple of minutes to
            <br /> complete your profile to get noticed by employers
          </Typography>
        </div>
        <div className="contentContainer">
          <div className="imageContainer">
            {/* This contains the background image */}
          </div>
          <div className="buttonContainer">
            <Button variant="outlined">Add Contact Details</Button>
            <Button variant="outlined">Add Qualifications</Button>
            <Button variant="outlined">Add Job Preferences</Button>
          </div>
        </div>
        <div className="footerContainer">
          <div className="userInfo">
            John Doe
            <br />
            j**e@gmail.com
          </div>
          <div className="completeProfile">
            <Button
              variant="contained"
              onClick={() => {
                navigate("/userDetails/info");
              }}
            >
              Complete Profile
            </Button>
          </div>
        </div>
      </div>
    </SignupLayout>
  );
};

export default UDLanding;
