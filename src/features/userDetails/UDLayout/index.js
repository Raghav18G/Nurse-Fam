import React, { useState } from "react";
import "./styles.css";
import logo from "../../../image/UDLogo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button, Step, StepLabel, Stepper, Typography } from "@mui/material";

import userAvatar from "../../../image/useravatar.svg";
import { Check } from "@mui/icons-material";
import styled from "@emotion/styled";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import UDGeneralInfo from "../UDGeneralInfo";
import UDQualifications from "../UDQualifications";
import UDJobPreferences from "../UDJobPreferences";
import { useNavigate } from "react-router-dom";

const UDLayout = () => {
  //Components Constants
  const UDComponents = {
    0: <UDGeneralInfo />,
    1: <UDQualifications />,
    2: <UDJobPreferences />,
  };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#341950",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#341950",
        color: "#341950",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#341950",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#341950",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

  const steps = ["General Information", "Qualifications", "Job Preferences"];

  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (activeStep < 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <div className="UDLayout--Contaner">
      <div className="UDLayout--Top">
        <img src={logo} style={{ width: "150px" }} />
        <div className="UDNavRight--Container">
          <NotificationsIcon
            sx={{ marginRight: "4rem", marginTop: "0.8rem", cursor: "pointer" }}
          />
          <Typography
            sx={{
              color: "#A52B92",
              fontWeight: "800",
              marginRight: "2rem",
              marginTop: "0.8rem",
            }}
          >
            John Doe
          </Typography>
          <img src={userAvatar} style={{ width: "40px", cursor: "pointer" }} />
        </div>
      </div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <p style={{ color: "#000000", fontWeight: "800" }}>{label}</p>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="UDLayout--Bottom">
        <div className="UDLayout--Bottom-left">{UDComponents[activeStep]}</div>
        <div className="UDLayout--Bottom-right">
          {activeStep < 2 && activeStep >= 0 && (
            <Button
              variant="contained"
              sx={{ width: "12rem" }}
              onClick={handleContinue}
            >
              {" "}
              Continue
            </Button>
          )}
          <Button
            variant="outlined"
            sx={{ width: "12rem", marginTop: "1rem" }}
            onClick={() => {
              if (activeStep == 2) {
                navigate("/dashboard");
              }
            }}
          >
            {" "}
            Save
          </Button>
          {activeStep > 0 && (
            <Button
              variant="outlined"
              sx={{ width: "12rem", marginTop: "1rem" }}
              onClick={handleBack}
            >
              {" "}
              Back
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UDLayout;
