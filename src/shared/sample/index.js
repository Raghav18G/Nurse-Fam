import React from "react";
import DashboardCard from "../DashboardCard";
import { Grid } from "@mui/material";
import DashboardBanner from "../DashboardBanner";

const Sample = () => {
  return (
    <div
      style={{
        diplay: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem",
        padding: "2rem",
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <DashboardCard
            white
            header="My Profile"
            text="80% Completed"
            subtext="Verification Pending*"
            footerText="Complete Now"
          />
        </Grid>
        <Grid item xs={4}>
          <DashboardCard
            header="My Jobs"
            text="0 Applied For"
            subtext="Verification Pending*"
            footerText="Apply Here"
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "5rem" }}>
          <DashboardBanner />
        </Grid>
      </Grid>
    </div>
  );
};

export default Sample;
