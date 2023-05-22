import React from "react";
import "./styles.css";
import { Grid, Paper } from "@mui/material";
import logo from "../../image/RJCARDPHOTO.svg";

const DashboardSearchJobsCard = () => {
  return (
    <div className="DBSearchJobsCard--Container">
      <Paper elevation={3} sx={{ height: "25vh", borderRadius: "20px" }}>
        <Grid container>
          <Grid item xs={2} sx={{ textAlign: "center" }}>
            <img src={logo} style={{ width: "80px", marginTop: "1rem" }} />
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              {/* UPPER */}
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={3}></Grid>
                </Grid>
              </Grid>
              {/* LOWER */}
              <Grid item xs={12}>
                <Grid container></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default DashboardSearchJobsCard;
