import React, { useEffect, useState } from "react";
import "./styles.css";
import { Grid, NativeSelect, Typography } from "@mui/material";
import DashboardSearchJobsCard from "../../shared/DashboardSearchJobsCard";
import DashboardFiltersComponent from "../../shared/DashboardFiltersComponent";
import { getJobDetails, getLocationDetails } from "../../services";

const SearchJobs = () => {
  const [searchFilters, setSearchFilters] = useState([]);
  const [filterPayload, setFiltersPayload] = useState({
    employee_type: "",
    location: "",
  });
  const [jobDetails, setJobDetails] = useState([]);

  const getData = async () => {
    let response = await getJobDetails(filterPayload);
    console.log("responsevanshika", response);
    if (response) {
      setJobDetails(response);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="SearchJobs--Container">
      <div className="SearchJobs--Top">
        <DashboardFiltersComponent
          filters={searchFilters}
          setFilters={setSearchFilters}
          jobDetails={jobDetails}
          setJobDetails={setJobDetails}
        />
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: "1rem" }}>
            <Grid container>
              <Grid item xs={8}></Grid>
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={6} sx={{ textAlign: "end" }}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#666F80",
                        fontWeight: 800,
                      }}
                    >
                      Sort By :
                    </Typography>
                  </Grid>
                  <Grid item xs={6} className="SORTFilter">
                    {" "}
                    <NativeSelect
                      sx={{ width: "70%", marginLeft: "2rem" }}
                      defaultValue={30}
                      inputProps={{
                        name: "Date",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value={"Date"}>Date</option>
                      <option value={"Month"}>Month</option>
                      <option value={"Day"}>Day</option>
                    </NativeSelect>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="SearchJobs--Bottom">
        <Grid container>
          <Grid item xs={12}>
            {jobDetails?.map((obj, index) => (
              <>
                <DashboardSearchJobsCard
                  id={obj?.id}
                  title="Nursing Staff"
                  subtitle={"Med Fam"}
                  location={obj?.location}
                  amount={obj?.employee_type}
                  time="3 Days Ago"
                  promotedButton={true}
                  newButton={true}
                  isbookMarkEmpty={false}
                  description={obj?.description}
                  
                />
              </>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SearchJobs;
