import React from "react";
import "./styles.css";
import { Grid, NativeSelect, Typography } from "@mui/material";
const DashboardFiltersComponent = () => {
  return (
    <div className="DashboardFiltersComponent--Container">
      <Grid conatiner>
        <Grid item xs={12}>
          <Typography sx={{ color: "#666F80", fontWeight: 600 }}>
            Search Filters
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "1rem" }}>
          <Grid container>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography sx={{ color: "#666F80", fontWeight: "600" }}>
                    Location
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ marginTop: "0.5rem" }}>
                  <NativeSelect
                    sx={{ width: "70%" }}
                    defaultValue={30}
                    inputProps={{
                      name: "Date",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={"BNGL"}>Bangalore</option>
                    <option value={"GRG"}>Gurugram</option>
                    <option value={"DL"}>Delhi</option>
                    <option value={"Pune"}>Pune</option>
                  </NativeSelect>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography sx={{ color: "#666F80", fontWeight: "600" }}>
                    Job Type
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ marginTop: "0.5rem" }}>
                  <NativeSelect
                    sx={{ width: "70%" }}
                    defaultValue={30}
                    inputProps={{
                      name: "Date",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={"BNGL"}>Full Time</option>
                    <option value={"GRG"}>Part Time</option>
                    <option value={"DL"}>Intern</option>
                  </NativeSelect>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography sx={{ color: "#666F80", fontWeight: "600" }}>
                    Experience Level
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ marginTop: "0.5rem" }}>
                  <NativeSelect
                    sx={{ width: "70%" }}
                    defaultValue={30}
                    inputProps={{
                      name: "Date",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={"BNGL"}>Mid-Level</option>
                    <option value={"GRG"}>Fresher</option>
                    <option value={"DL"}>Expert</option>
                  </NativeSelect>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardFiltersComponent;
