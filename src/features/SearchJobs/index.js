import React from "react";
import "./styles.css";
import { Grid, Typography } from "@mui/material";
import DashboardSearchJobsCard from "../../shared/DashboardSearchJobsCard";

const SearchJobs = () => {
  return (
    <div className="SearchJobs--Container">
      <div className="SearchJobs--Top">
        <Grid conatiner>
          <Grid item xs={12}>
            <Typography sx={{ color: "#666F80", fontWeight: 600 }}>
              Search Filters
            </Typography>
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
