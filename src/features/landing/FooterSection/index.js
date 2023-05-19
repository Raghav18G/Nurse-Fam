import React from "react";
import logo from "../../../image/FooterLogoImage.png";
import "../styles.css";
import { Divider, Grid } from "@mui/material";

const FooterSection = () => {
  return (
    <div className="landingFooterContainer">
      <div className="landingFooterLogo">
        <img src={logo} style={{ width: "200px" }} />
      </div>
      <div className="landingFooterLogo">
      Terms & Conditions . Privacy Policies . Sitemap 
      <br />
      &#169; MedFam 2023 All Rights Reserved.
      </div>
    </div>
  );
};

export default FooterSection;
