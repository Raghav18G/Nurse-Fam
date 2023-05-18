import { Typography } from "@mui/material";
import React from "react";
import PlatformCard from "./PlatformCard";
import card1 from "../../../image/Card1.png";
import card2 from "../../../image/Card2.png";
import card3 from "../../../image/Card3.png";

const PlatformSection = () => {
  return (
    <div className="platformSection--container">
      <div className="platformSection--top">
        <Typography variant="h4" sx={{ color: "#A52B92", fontWeight: "800" }}>
          A Platform that Cares
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000000",
            width: "30vw",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          Experience the platform meticulously designed for the care
          professionals
        </Typography>
      </div>
      <div className="platformSection--bottom">
        <PlatformCard
          image={card1}
          text="Connect with 
            Peers Globally and 
            Grow your Network"
        />
        <PlatformCard
          image={card2}
          text="Maximise your Potential
          with High-Paying Job
          opportunities from 
          Top Employers"
        />
        <PlatformCard
          image={card3}
          text="Find jobs that 
          Work for You and
          Fit in your Schedule"
        />
      </div>
    </div>
  );
};

export default PlatformSection;
