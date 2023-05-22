import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import verifiedLogo from "../../../image/verified 1.svg";
import verifiedRightArrow from "../../../image/verifiedRightArrow.svg";
import "./styles.css";
const VerificationSuccess = () => {
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
        {/* <img
          src={verifiedRightArrow}
          alt=""
          onClick={handleBack}
          width={50}
          height={30}
          style={{ cursor: "pointer" }}
        /> */}
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "1rem" }}>
        <Paper
          elevation={3}
          sx={{ borderRadius: "2rem", height: "75vh", padding: "2rem" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{ color: "#A52B92", fontWeight: "bold" }}
              >
                Your Verification is Complete!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle" sx={{ fontWeight: 600 }}>
                You are now a verified member of NurseFam
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img src={verifiedLogo} alt="" height={160} />
            </Grid>
            <Grid item xs={12} style={{ color: "#A52B92", fontWeight: "bold" }}>
              <Typography variant="h4">John Doe</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle" sx={{ fontWeight: 800 }}>
                Staff Nurse
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#341950 !important",
                  width: "30%",
                  marginTop: "1rem",
                  borderRadius: "10px",
                  textTransform: "none",
                }}
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VerificationSuccess;
