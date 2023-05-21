import React from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import DashboardCard from "../../shared/DashboardCard";
import DashboardBanner from "../../shared/DashboardBanner";
import SearchIcon from "@mui/icons-material/Search";
const Dashboard = () => {
  return (
    <Grid
      container
      spacing={10}
      sx={{ padding: "10px" }}
    >
      {/* serach bar */}
      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              sx={{
                backgroundColor: "#fff",
                border: "2px solid #A52B92",
                borderRadius: "10px",
              }}
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Search for jobs"
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{
                backgroundColor: "#341950 !important",
                borderRadius: "10px",
              }}
            >
              <SearchIcon style={{ fill: "#fff" }} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* cards */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="subtitle"
              sx={{ color: "#666F80", fontWeight: "700" }}
            >
              Overview
            </Typography>
          </Grid>
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
          <Grid item xs={4}>
            <DashboardCard
              white
              header="My Profile"
              text="80% Completed"
              subtext="Verification Pending*"
              footerText="Complete Now"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* banner */}
      <Grid item xs={12}>
        <DashboardBanner />
      </Grid>
      {/* recommended jobs */}
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Dashboard;
