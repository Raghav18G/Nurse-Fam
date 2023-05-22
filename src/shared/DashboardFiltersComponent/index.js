import React, { useEffect, useState } from "react";
import "./styles.css";
import { Button, Grid, NativeSelect, Paper, Typography } from "@mui/material";
import { getJobDetails, getLocationDetails } from "../../services";
const DashboardFiltersComponent = ({
  filters,
  setFilters,
  setJobDetails,
  jobDetails,
}) => {
  const [locationOptions, setLocationOptions] = useState([]);
  const [filterPayload, setFiltersPayload] = useState({
    employee_type: "",
    location: "",
  });

  const getLocationOptions = async () => {
    let response = await getLocationDetails();
    console.log("OPTIONS", response);
    setLocationOptions(response?.locations);
  };
  const handleLocationChange = (e) => {
    console.log("Location", e.target.value);
    let newValue = e.target.value;
    setFiltersPayload({ ...filterPayload, location: newValue });
    setFilters([...filters, newValue]);
  };

  const handleJobTypeChange = (e) => {
    console.log("Job Type", e.target.value);
    let newValue = e.target.value;
    setFiltersPayload({ ...filterPayload, employee_type: newValue });
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

  const handleClick = async (e) => {
    let response = await getJobDetails(filterPayload);
    console.log("response after filtering", response);
    if (response) {
      setJobDetails(response);
    }
  };

  useEffect(() => {
    getLocationOptions();
  }, []);
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
                    {locationOptions?.map((item, index) => (
                      <>
                        <option value={item}>{item}</option>
                      </>
                    ))}
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
                    <option value={"full_time"}>Full Time</option>
                    <option value={"part_time"}>Part Time</option>
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
                  <Button variant="contained" onClick={handleClick}>
                    Apply Filters
                  </Button>
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
