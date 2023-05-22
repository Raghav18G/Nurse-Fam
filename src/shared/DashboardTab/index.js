import React, { useEffect, useState } from "react";
import copylogo from "../../image/copyLogo.svg";

import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import johnAvatar from "../../image/JohnAvatar.svg";
import ReusableDialog from "../Dialog/ResusableDialog";
import RightTabList from "./TabList";
import "./styles.css";

import { useNavigate } from "react-router-dom";
import facebook from "../../image/Facebook 1.svg";
import linkedIn from "../../image/LinkedIn 1.svg";
import whatsapp from "../../image/whatsapp 1.svg";
import { getUserDetails } from "../../services";

const ariaLabel = { "aria-label": "description" };

const DashboardTab = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const getUserNameData = async () => {
    const user_response = await getUserDetails();
    console.log("USER Response", user_response);
    if (user_response?.status == 200) {
      setUserName(user_response?.full_name);
    }
  };
  useEffect(() => {
    getUserNameData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [referOpen, setReferOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleEmailOpen = () => {
    setIsOpen(false);
    setReferOpen(true);
  };

  const content = (
    <div style={{ backgroundColor: "#341950", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2px",
        }}
      >
        <Typography variant="h6">Get Verified</Typography>
        <Typography variant="h6">x</Typography>
      </div>
      <Divider style={{ border: "1px solid #fff" }} />
      <Typography sx={{ fontSize: "13px", marginTop: "1rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat
        dolor et ante tempus eleifend. Sed auctor consequat dapibus. Aliquam
        scelerisque tristique euismod.
      </Typography>
      <span
        onClick={() => {
          navigate("/dashboard/verificationStart");
        }}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          fontSize: "15px",
          color: "#fff",
          cursor: "pointer",
          textUnderlinePosition: "under",
          textDecoration: "underline",
          marginTop: "1.5rem",
        }}
      >
        Verify Now
      </span>
    </div>
  );
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
            <Typography sx={{ fontWeight: "800" }}> {userName}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Avatar alt="john" src={johnAvatar} />
          </Grid>
          <Grid item xs={6}>
            <Tooltip
              title={content}
              placement="bottom-start"
              enterDelay={500}
              leaveDelay={200}
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "#341950 !important",
                    "& .MuiTooltip-arrow": {
                      color: "#341950 !important",
                    },
                  },
                },
              }}
            >
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
            </Tooltip>
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
      {/* email dialog */}
      <ReusableDialog
        isOpen={referOpen}
        title="Enter Email"
        subtitle="Enter the email id to share
          your referral code"
        handleClose={() => {
          setReferOpen(false);
        }}
        btnLabel="Share"
      >
        <div style={{ display: "flex", alignItems: "center", margin: "20px" }}>
          <Input placeholder="Email Address" inputProps={ariaLabel} fullWidth />
        </div>
      </ReusableDialog>
      {/* referal dialog  */}

      <ReusableDialog
        isOpen={isOpen}
        title="Referral Link Generated"
        subtitle="Share your code by simply clicking the
          link below earn a reward"
        handleClose={handleEmailOpen}
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
