import React from "react";
import DashboardCard from "../DashboardCard";
import { Grid } from "@mui/material";
import DashboardBanner from "../DashboardBanner";
import DashboardSearchJobsCard from "../DashboardSearchJobsCard";

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
        <Grid item xs={12} sx={{ marginTop: "5rem" }}>
          <DashboardSearchJobsCard
            title="Nursing Staff"
            subtitle="HCG Technology"
            location="Bangalore, IN"
            amount="INR 3L-6L/Year"
            time="3 Days Ago"
            promotedButton={true}
            newButton={true}
            isbookMarkEmpty={false}
            description={
              <p>
                Monitoring patient’s condition and assessing their needs to
                provide the best possible care. Advice, observe and interpreting
                their symptoms....
                <span
                  style={{
                    color: "#A52B92",
                    cursor: "pointer",
                    textUnderlinePosition: "under",
                    textDecoration: "underline",
                  }}
                >
                  Read More
                </span>
              </p>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Sample;
