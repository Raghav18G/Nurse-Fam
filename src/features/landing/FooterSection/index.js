import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import logo from "../../../image/FooterLogoImage.png";
import "../styles.css";
import { Divider } from "@mui/material";
import twitterLogo from "../../../image/homescreem/twitter.svg";
import facebookLogo from "../../../image/homescreem/facebook.svg";
import linkedinLogo from "../../../image/homescreem/linkedin.svg";
import instagramLogo from "../../../image/homescreem/instagram.svg";

const FooterSection = () => {
  return (
    <div className="landingFooterContainer">
      <Grid container>
        <Grid className="Footer--top" item xs={12} sx={{ marginTop: "3rem" }}>
          <Grid container className="leftFooter">
            <Grid item xs={5}>
              <img src={logo} style={{ width: "200px" }} />
            </Grid>
            <Grid item xs={7}>
              <Grid container spacing={3} className="rightFooter">
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "1.5rem", fontWeight: "800" }}
                  >
                    Quick Links
                  </Typography>
                  <Grid item sx={{ marginBottom: "1rem" }}>
                    <Link
                      href="#"
                      underline="none"
                      color="#fff"
                      sx={{ fontSize: "14px" }}
                    >
                      Search Jobs
                    </Link>
                  </Grid>
                  <Grid item sx={{ marginBottom: "1rem" }}>
                    <Link
                      href="#"
                      underline="none"
                      color="#fff"
                      sx={{ fontSize: "14px" }}
                    >
                      Partner Program
                    </Link>
                  </Grid>
                  <Grid item sx={{ marginBottom: "1rem" }}>
                    <Link
                      href="#"
                      underline="none"
                      color="#fff"
                      sx={{ fontSize: "14px" }}
                    >
                      Sign Up
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="#"
                      underline="none"
                      color="#fff"
                      sx={{ fontSize: "14px" }}
                    >
                      Sign In
                    </Link>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "1.5rem", fontWeight: "800" }}
                  >
                    Business
                  </Typography>
                  <Grid item sx={{ marginBottom: "1rem" }}>
                    <Link
                      href="#"
                      underline="none"
                      color="#fff"
                      sx={{ fontSize: "14px" }}
                    >
                      Post a Job
                    </Link>
                  </Grid>
                  <Grid item sx={{ marginBottom: "1rem" }}>
                    <Link
                      href="#"
                      underline="none"
                      color="#fff"
                      sx={{ fontSize: "14px" }}
                    >
                      Find Care
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="#"
                      underline="none"
                      color="#fff"
                      sx={{ fontSize: "14px" }}
                    >
                      Hire
                    </Link>
                  </Grid>
                </Grid>
                <Grid item xs={4} sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "1.5rem", fontWeight: "800" }}
                  >
                    Company
                  </Typography>
                  <Grid item sx={{ marginBottom: "1rem" }}>
                    <Link
                      href="#"
                      underline="none"
                      color="#fff"
                      sx={{ fontSize: "14px" }}
                    >
                      About
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="#"
                      underline="none"
                      color="#fff"
                      sx={{ fontSize: "14px" }}
                    >
                      Support
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider className="divider" />
        </Grid>
        <Grid className="Footer-bottom" item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <Typography sx={{ marginLeft: "5rem" }}>
                Terms & Conditions . Privacy Policies . Sitemap
                <br />
                <span style={{ fontSize: "10px" }}>
                  &#169; MedFam 2023 All Rights Reserved.
                </span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{ marginRight: "2rem" }}>
                <Grid
                  item
                  xs={11}
                  sx={{ textAlign: "end", marginRight: "1rem" }}
                >
                  <img
                    src={twitterLogo}
                    style={{ width: "30px", marginRight: "2rem" }}
                  />
                  <img
                    src={facebookLogo}
                    style={{ width: "30px", marginRight: "2rem" }}
                  />
                  <img
                    src={linkedinLogo}
                    style={{ width: "30px", marginRight: "2rem" }}
                  />
                  <img src={instagramLogo} style={{ width: "30px" }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterSection;
