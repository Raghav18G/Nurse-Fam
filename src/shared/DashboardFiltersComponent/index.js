import React from "react";
import "./styles.css";
import { Button, Grid, NativeSelect, Paper, Typography } from "@mui/material";
const DashboardFiltersComponent = ({ filters, setFilters }) => {
  const handleLocationChange = (e) => {
    console.log("Location", e.target.value);
    let newValue = e.target.value;
    setFilters([...filters, newValue]);
  };

  const handleJobTypeChange = (e) => {
    console.log("Job Type", e.target.value);
    let newValue = e.target.value;
    setFilters([...filters, newValue]);
  };

  const handleExperienceChange = (e) => {
    console.log("Experience", e.target.value);
    let newValue = e.target.value;
    setFilters([...filters, newValue]);
  };

  const handleDelete = (item) => {
    setFilters(filters.filter((i) => i !== item));
  };

  const handleClear = () => {
    setFilters([]);
  };

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
                    onChange={handleLocationChange}
                    inputProps={{
                      name: "Date",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={"Bangalore"}>Bangalore</option>
                    <option value={"Gurugram"}>Gurugram</option>
                    <option value={"Delhi"}>Delhi</option>
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
                    onChange={handleJobTypeChange}
                    inputProps={{
                      name: "Date",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={"Full Time"}>Full Time</option>
                    <option value={"Part Time"}>Part Time</option>
                    <option value={"Intern"}>Intern</option>
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
                    onChange={handleExperienceChange}
                    inputProps={{
                      name: "Date",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={"Mid-Level"}>Mid-Level</option>
                    <option value={"Fresher"}>Fresher</option>
                    <option value={"Expert"}>Expert</option>
                  </NativeSelect>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "0.5rem" }}>
          <Grid container>
            <Grid item xs={8}>
              {filters.map((item) => (
                <Paper elevation={3} className="tag-item">
                  <div key={item}>
                    {item}
                    <button
                      type="button"
                      className="button-chip"
                      onClick={() => handleDelete(item)}
                    >
                      &times;
                    </button>
                  </div>
                </Paper>
              ))}
            </Grid>
            <Grid item xs={4} sx={{ marginTop: "0.5rem" }}>
              <Grid container>
                <Grid item xs={7}>
                  <Button variant="contained">Apply Filters</Button>
                </Grid>
                <Grid
                  item
                  xs={5}
                  sx={{ textAlign: "center", paddingTop: "1rem" }}
                >
                  <span
                    onClick={handleClear}
                    style={{
                      color: "#A52B92",
                      cursor: "pointer",
                      textUnderlinePosition: "under",
                      textDecoration: "underline",
                      fontSize: "12px",
                    }}
                  >
                    Clear Filters
                  </span>
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
