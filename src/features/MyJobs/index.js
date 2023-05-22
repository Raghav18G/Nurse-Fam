import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import "./styles.css";
import { Button, Grid } from "@mui/material";

const MyJobs = () => {
  const [value, setValue] = React.useState("appliedJobs");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            <TabPanel value="appliedJobs" sx={{ color: "#341950" }}></TabPanel>
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
