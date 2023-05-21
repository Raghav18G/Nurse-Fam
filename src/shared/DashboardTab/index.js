import React, { useState } from "react";
import copylogo from "../../image/copyLogo.svg";

import "./styles.css";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import RightTabList from "./TabList";
import NotificationsIcon from "@mui/icons-material/Notifications";
import johnAvatar from "../../image/JohnAvatar.svg";
import ReusableDialog from "../Dialog/ResusableDialog";

import facebook from "../../image/Facebook 1.svg";
import linkedIn from "../../image/LinkedIn 1.svg";
import whatsapp from "../../image/whatsapp 1.svg";

const DashboardTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  return (
    <Grid container spacing={1}>
      {/* top nav bar */}
      <Grid item xs={12}>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Grid item xs={4}>
            <IconButton sx={{ color: "#111" }}>
              <NotificationsIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ fontWeight: "800" }}> John Doe</Typography>
          </Grid>
          <Grid item xs={4}>
            <Avatar alt="john" src={johnAvatar} />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              // fullWidth
              sx={{
                textTransform: "none",
                borderRadius: "5px",
                color: "#111 !important",
                border: "2px solid #A52B92",
              }}
            >
              Verify Now
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* connections */}
      <Grid item xs={12}>
        <RightTabList />
      </Grid>
      {/* refer button */}
      <Grid
        item
        xs={12}
        sx={{
          margin: "20px",
        }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#341950 !important",
            textTransform: "none",
            borderRadius: "5px",
          }}
          onClick={handleDialogOpen}
        >
          Refer a friend
        </Button>
      </Grid>
      {/* dialog */}

      <ReusableDialog
        isOpen={isOpen}
        title="Referral Link Generated"
        subtitle="Share your code by simply clicking the
          link below earn a reward"
        handleClose={() => {
          setIsOpen(false);
        }}
        btnLabel="Share Link via Mail"
        footerText={true}
        footerTextContent={
          <div className="social-container">
            <div>
              <Typography>Or share via Socials</Typography>
            </div>
            <div className="socialLogos">
              <img src={whatsapp} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedIn} alt="" />
            </div>
          </div>
        }
      >
        <div style={{ display: "flex", alignItems: "center", margin: "20px" }}>
          <TextField
            sx={{ backgroundColor: "#fff" }}
            fullWidth
            variant="outlined"
            value="NFLink 000123A"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <img src={copylogo} alt="" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </ReusableDialog>
    </Grid>
  );
};

export default DashboardTab;
