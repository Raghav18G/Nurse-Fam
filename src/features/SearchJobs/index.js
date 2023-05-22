import React, { useState } from "react";
import "./styles.css";
import { Grid, NativeSelect, Typography } from "@mui/material";
import DashboardSearchJobsCard from "../../shared/DashboardSearchJobsCard";
import DashboardFiltersComponent from "../../shared/DashboardFiltersComponent";

const SearchJobs = () => {
  const [searchFilters, setSearchFilters] = useState([]);
  console.log("SEARCH FILTERS", searchFilters);
  return (
    <div className="SearchJobs--Container">
      <div className="SearchJobs--Top">
        <DashboardFiltersComponent
          filters={searchFilters}
          setFilters={setSearchFilters}
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
            <DashboardSearchJobsCard
              title="Nursing Staff"
              subtitle="HCG Technology"
              location="Bangalore, IN"
              amount="INR 3L-6L/Year"
              time="3 Days Ago"
              promotedButton={true}
              newButton={true}
              isbookMarkEmpty={false}
              description={
                <p>
                  Monitoring patient’s condition and assessing their needs to
                  provide the best possible care. Advice, observe and
                  interpreting their symptoms....
                  <span
                    style={{
                      color: "#A52B92",
                      cursor: "pointer",
                      textUnderlinePosition: "under",
                      textDecoration: "underline",
                    }}
                  >
                    Read More
                  </span>
                </p>
              }
            />
            <DashboardSearchJobsCard
              title="Nursing Staff"
              subtitle="HCG Technology"
              location="Bangalore, IN"
              amount="INR 3L-6L/Year"
              time="3 Days Ago"
              promotedButton={false}
              newButton={true}
              isbookMarkEmpty={true}
              description={
                <p>
                  Monitoring patient’s condition and assessing their needs to
                  provide the best possible care. Advice, observe and
                  interpreting their symptoms....
                  <span
                    style={{
                      color: "#A52B92",
                      cursor: "pointer",
                      textUnderlinePosition: "under",
                      textDecoration: "underline",
                    }}
                  >
                    Read More
                  </span>
                </p>
              }
            />
            <DashboardSearchJobsCard
              title="Nursing Staff"
              subtitle="HCG Technology"
              location="Bangalore, IN"
              amount="INR 3L-6L/Year"
              time="3 Days Ago"
              promotedButton={false}
              newButton={false}
              isbookMarkEmpty={true}
              description={
                <p>
                  Monitoring patient’s condition and assessing their needs to
                  provide the best possible care. Advice, observe and
                  interpreting their symptoms....
                  <span
                    style={{
                      color: "#A52B92",
                      cursor: "pointer",
                      textUnderlinePosition: "under",
                      textDecoration: "underline",
                    }}
                  >
                    Read More
                  </span>
                </p>
              }
            />
            <DashboardSearchJobsCard
              title="Nursing Staff"
              subtitle="HCG Technology"
              location="Bangalore, IN"
              amount="INR 3L-6L/Year"
              time="3 Days Ago"
              promotedButton={true}
              newButton={true}
              isbookMarkEmpty={false}
              description={
                <p>
                  Monitoring patient’s condition and assessing their needs to
                  provide the best possible care. Advice, observe and
                  interpreting their symptoms....
                  <span
                    style={{
                      color: "#A52B92",
                      cursor: "pointer",
                      textUnderlinePosition: "under",
                      textDecoration: "underline",
                    }}
                  >
                    Read More
                  </span>
                </p>
              }
            />
            <DashboardSearchJobsCard
              title="Nursing Staff"
              subtitle="HCG Technology"
              location="Bangalore, IN"
              amount="INR 3L-6L/Year"
              time="3 Days Ago"
              promotedButton={false}
              newButton={true}
              isbookMarkEmpty={true}
              description={
                <p>
                  Monitoring patient’s condition and assessing their needs to
                  provide the best possible care. Advice, observe and
                  interpreting their symptoms....
                  <span
                    style={{
                      color: "#A52B92",
                      cursor: "pointer",
                      textUnderlinePosition: "under",
                      textDecoration: "underline",
                    }}
                  >
                    Read More
                  </span>
                </p>
              }
            />
            <DashboardSearchJobsCard
              title="Nursing Staff"
              subtitle="HCG Technology"
              location="Bangalore, IN"
              amount="INR 3L-6L/Year"
              time="3 Days Ago"
              promotedButton={false}
              newButton={false}
              isbookMarkEmpty={true}
              description={
                <p>
                  Monitoring patient’s condition and assessing their needs to
                  provide the best possible care. Advice, observe and
                  interpreting their symptoms....
                  <span
                    style={{
                      color: "#A52B92",
                      cursor: "pointer",
                      textUnderlinePosition: "under",
                      textDecoration: "underline",
                    }}
                  >
                    Read More
                  </span>
                </p>
              }
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SearchJobs;
