import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import "./styles.css";
import { Button, Grid, NativeSelect, Typography } from "@mui/material";
import MyJobCard from "../../shared/MyJobCard";
import { getAppliedJobsService } from "../../services";

const MyJobs = () => {
  const [value, setValue] = React.useState("appliedJobs");
  const [appliedJobCards, setAppliedJobCards] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getAppliedJobs = async () => {
    const response = await getAppliedJobsService();
    console.log("Response", response);
    if (response?.data?.status == 200) {
      setAppliedJobCards(response?.data?.jobs);
    }
  };

  React.useEffect(() => {
    getAppliedJobs();
  }, []);

  return (
    <div
      style={{
        margin: "1rem",
        paddingTop: "3rem",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item xs={10}>
              <TabList onChange={handleChange}>
                <Tab
                  label="Applied Jobs"
                  value="appliedJobs"
                  sx={{
                    color: "#666F80",
                    fontWeight: 800,
                    borderBottom: 1,
                    borderColor: "divider",
                  }}
                />
                <Tab
                  label="Saved Jobs"
                  value="savedJobs"
                  sx={{
                    color: "#666F80",
                    fontWeight: 800,
                    borderBottom: 1,
                    borderColor: "divider",
                  }}
                />
              </TabList>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "flex-end !important",
              }}
            >
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  border: "1px solid #341950",
                  color: "#341950",
                  textTransform: "none",
                  fontWeight: 800,
                }}
              >
                Edit
              </Button>
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <TabPanel
              value="appliedJobs"
              sx={{ color: "#341950", overflow: "scroll" }}
            >
              {appliedJobCards?.map((obj, index) => (
                <>
                  <MyJobCard
                    location={obj?.location}
                    salary={obj?.salary_range}
                  />
                </>
              ))}
            </TabPanel>
            <TabPanel value="savedJobs" sx={{ color: "#341950" }}>
              {/* see all */}
            </TabPanel>
          </Grid>
        </TabContext>
      </Box>
    </div>
  );
};

export default MyJobs;
