import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import bannerImage from "../../image/banner-image.svg";
import "./styles.css";
import medfamLogo from "../../image/MedFam_Logo 02_Tag 1.svg";
const DashboardBanner = () => {
  return (
    <div style={{ width: "60vw" }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Grid
              container
              spacing={1}
              sx={{
                padding: "20px",
              }}
            >
              <Grid item xs={12}>
                <img src={medfamLogo} alt="" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" sx={{fontWeight: "800"}}>
                  Join India&apos;s <br />
                  favorite Geriatric
                  <br />
                  Care brand.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#341950 !important",
                    textTransform: "none",
                  }}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7} className="right-banner-content">
            <img src={bannerImage} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default DashboardBanner;
