import { Checkbox, Grid, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import "./styles.css";

import MultiInput from "../../../components/MultiInput";

const UDJobPreferences = () => {
  const [keywords, setKeywords] = useState([]);

  return (
    <div className="QualificationsContainer">
      <Grid
        container
        spacing={2}
        className="info-root-container"
        sx={{ padding: "4rem", paddingBottom: "4rem" }}
      >
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ color: "#A52B92", fontWeight: "800" }}>
            Please select your preferences
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "1rem",
          }}
        >
          <Grid
            container
            spacing={1}
            sx={{
              backgroundColor: "#F0F2F9",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <MultiInput
                // onChange={(e) => setKeywords(e.target.value)}
                setItinerary={setKeywords}
                itinerary={keywords}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* 2nd Container */}
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "1rem",
          }}
        >
          <Grid
            container
            spacing={1}
            sx={{
              backgroundColor: "#F0F2F9",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Availability*
                </FormLabel>
                <RadioGroup
                  defaultValue="male"
                  sx={{
                    display: "flex !important",
                    flexDirection: "row !important",
                  }}
                >
                  <FormControlLabel
                    value="fullTime"
                    control={<Radio />}
                    label="Full Time"
                  />
                  <FormControlLabel
                    value="partTime"
                    control={<Radio />}
                    label="Part Time"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Willing to Relocate*
                </FormLabel>
                <RadioGroup
                  defaultValue="male"
                  sx={{
                    display: "flex !important",
                    flexDirection: "row !important",
                  }}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                  <FormControlLabel
                    value="maybe"
                    control={<Radio />}
                    label="Maybe"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Care Delivery*
                </FormLabel>
                <RadioGroup
                  defaultValue="male"
                  sx={{
                    display: "flex !important",
                    flexDirection: "row !important",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Per Visit"
                  />
                  <FormControlLabel control={<Checkbox />} label="Per Day" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Long Term Visit"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UDJobPreferences;
