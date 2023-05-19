import React from "react";
import "../styles.css";
import HiringCard from "./HiringCard";

import card1 from "../../../image/hiringCard1.png";
import card2 from "../../../image/hiringCard2.png";
import { Button, Typography } from "@mui/material";

const HiringSection = () => {
  return (
    <div className="HiringSection--Container">
      <div className="HiringSection--Left">
        <div>
          <Typography
            variant="h3"
            sx={{
              color: "#A52B92",
              fontWeight: "800",
              width: "22rem",
            }}
          >
            Hire from our Professional Caregivers Network today
          </Typography>
        </div>

        <Button variant="contained">Post a Job</Button>
      </div>
      <div className="HiringSection--Right">
        {" "}
        <HiringCard
          image={card1}
          text="5 lacs+"
          subtext="Profiles to
            Choose From"
        />
        <HiringCard
          image={card2}
          text="Verified"
          subtext="Access to
          Verified Care
          Professionals"
        />
      </div>
    </div>
  );
};

export default HiringSection;
