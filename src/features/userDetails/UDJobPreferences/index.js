import { Button, Checkbox, Grid, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import "./styles.css";

import MultiInput from "../../../components/MultiInput";
import { setJobPreferences } from "../../../services";
import { useForm } from "react-hook-form";

const UDJobPreferences = () => {
  const {
    register,
    reset,
    formState: { errors },
    setValue,
    getValues,
    control,
    handleSubmit,
  } = useForm();
  const [keywords, setKeywords] = useState([]);
  const [availaibility, setAvailaibility] = useState("");
  const [relocate, setRelocate] = useState("");
  const [delivery, setDelivery] = useState("");

  const onSubmit = async (data) => {
    console.log("setJobPreferences", data);
    let payload = {
      care_specialisation: keywords,
      availability: availaibility,
      relocate: relocate,
      delivery: delivery,
    };
    console.log("PAYLOAD", payload);
    const response = await setJobPreferences(payload);
    console.log("setJobPreferences response", response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="jobPreferenceContainer">
        <Grid
          container
          spacing={2}
          className="info-root-container"
          sx={{ padding: "4rem", paddingBottom: "4rem" }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ color: "#A52B92", fontWeight: "800" }}
            >
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
                <MultiInput setItinerary={setKeywords} itinerary={keywords} />
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
                    onChange={(e) => setAvailaibility(e.target.value)}
                    sx={{
                      display: "flex !important",
                      flexDirection: "row !important",
                    }}
                  >
                    <FormControlLabel
                      value="full_time"
                      control={<Radio />}
                      label="Full Time"
                    />
                    <FormControlLabel
                      value="part_time"
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
                    onChange={(e) => setRelocate(e.target.value)}
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
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
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
                    onChange={(e) => setDelivery(e.target.value)}
                    sx={{
                      display: "flex !important",
                      flexDirection: "row !important",
                    }}
                  >
                    <FormControlLabel
                      control={<Radio />}
                      label="Per Visit"
                      value="per_visit"
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label="Per Day"
                      value="per_day"
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label="Long Term Visit"
                      value="long_term_visit"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "end" }}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </div>
    </form>
  );
};

export default UDJobPreferences;
