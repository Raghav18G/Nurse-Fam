import React from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { AppBar, Button, Grid, Paper, Toolbar } from "@mui/material";

import Sidebar from "./Sidebar";

import "./style.css";
import DashboardTab from "../../shared/DashboardTab";

const SidebarLayout = () => {
  const navigate = useNavigate();

  return (
    <Grid container className="main-container">
      <Grid item sm={4} md={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={6} md={7} className="OutletConatiner">
        <Outlet />
      </Grid>
      <Grid item xs={12} sm={2} md={3} className="ThirdConatiner">
        <Paper
          elevtion={3}
          sx={{
            backgroundColor: "fff",
            height: "130vh",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        >
          <DashboardTab />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SidebarLayout;
