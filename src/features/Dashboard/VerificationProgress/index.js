import {
  Button,
  Grid,
  LinearProgress,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import verifiedRightArrow from "../../../image/verifiedRightArrow.svg";
import "./styles.css";

const VerificationProgress = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "2rem",
        paddingTop: "3rem",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography sx={{ color: "#666F80", fontWeight: 800 }}>
          Get Verified
        </Typography>
        <img
          src={verifiedRightArrow}
          alt=""
          onClick={handleBack}
          width={50}
          height={30}
          style={{ cursor: "pointer" }}
        />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "1rem" }}>
        <Paper elevation={3} sx={{ borderRadius: "2rem", height: "75vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{ color: "#A52B92", fontWeight: "bold" }}
              >
                You are now all set!
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle" sx={{ fontWeight: 600 }}>
                Your verification is complete and should reflect soon
              </Typography>
            </Grid>
            <Grid item={12}>
              <div className="progressBar-wrapper">
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: "5px",
                    padding: "20px",

                    backgroundColor: "#F0F2F9",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "800",
                      display: "flex",
                      margin: "20px 0px 20px 0px",
                    }}
                  >
                    Verification Progress
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={80}
                    color="secondary"
                    // sx={{ backgroundColor: "#341950 !important" }}
                  />
                </Paper>
              </div>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "800",
                  color: "#20242A",
                }}
              >
                IDfy is our BGV Partner for verification,
                <br /> please check your email to know the status of
                <br /> your verification and &nbsp;
                <span>
                  <Link>download the document</Link>
                </span>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  color: "#341950 !important",
                  width: "30%",
                  marginTop: "1rem",
                  borderRadius: "10px",
                  textTransform: "none",
                }}
                onClick={() => {
                  navigate("/dashboard/verificationSuccess");
                }}
              >
                Support
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VerificationProgress;
