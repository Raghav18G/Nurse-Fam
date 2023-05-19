import { Grid, Link } from "@mui/material";
import React from "react";
import logo from "../../../image/FooterLogoImage.png";
import "../styles.css";
import { Divider } from "@mui/material";

const FooterSection = () => {
  return (
    <div className="landingFooterContainer">
      <Grid container spacing={1} className="leftFooter">
        <Grid items xs={12}>
          <img src={logo} style={{ width: "200px" }} />
        </Grid>
      </Grid>

      <Grid container spacing={3} className="rightFooter">
        <Grid item xs={4}>
          Quick Links
          <Grid item>
            <Link href="#" underline="none" color="#fff">
              Search Jobs
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none" color="#fff">
              Partner Program
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none" color="#fff">
              Sign Up
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none" color="#fff">
              Sign In
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          Business
          <Grid item>
            <Link href="#" underline="none" color="#fff">
              Post a Job
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none" color="#fff">
              Find Care
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none" color="#fff">
              Hire
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          Company
          <Grid item>
            <Link href="#" underline="none" color="#fff">
              About
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none" color="#fff">
              Support
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Terms & Conditions . Privacy Policies . Sitemap
          <br />
          &#169; MedFam 2023 All Rights Reserved.
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterSection;
