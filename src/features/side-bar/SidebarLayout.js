import React from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";

import Sidebar from "./Sidebar";

import {
  adminInfoRemovalService,
  adminLogoutService,
  adminRoleRemovalService,
} from "../../shared/services";

import "./style.css";

const SidebarLayout = () => {
  const navigate = useNavigate();

  // const handleLogout = async () => {
  //   // const { isSuccess } = await adminLogoutService();
  //   // if (isSuccess) {
  //   adminInfoRemovalService();
  //   adminRoleRemovalService();
  //   navigate("/");
  //   // }
  // };

  return (
    <Grid container className="main-container">
      <Grid item sm={4} md={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={8} md={10}>
        {/* <AppBar
          position="static"
          sx={{ backgroundColor: "var(--navbar-color)" }}
        >
          <Toolbar className="toolbar">
            <Button
              variant="outlined"
              className="logout-button"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar> */}
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default SidebarLayout;
