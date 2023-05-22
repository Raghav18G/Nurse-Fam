import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material";
import avatarlogo1 from "../../image/avatarlogo1.svg";
import avatarlogo2 from "../../image/avatarlogo2.svg";
import avatarlogo3 from "../../image/avatarlogo3.svg";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import "./styles.css";
import { GetConnections } from "../../services";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));
const RightTabList = () => {
  const [value, setValue] = useState("myConnections");
  const [connectionData, setDataConnection] = useState([]);
  const [connectionDataALL, setDataConnectionAll] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const call = async () => {
    let connectionResponse = await GetConnections();
    if (connectionResponse?.status === 200) {
      const arrData = connectionResponse?.data?.connections;
      if (arrData?.length >= 3) {
        setDataConnectionAll(arrData);
        setDataConnection(arrData.slice(0, 3));
      } else {
        setDataConnectionAll(arrData);
        setDataConnection(arrData);
      }
    }
  };

  useEffect(() => {
    call();
  }, []);

  console.log("Connections Data", connectionData);
  return (
    <div className="App">
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab
                  label="My Connections"
                  value="myConnections"
                  sx={{ color: "#666F80", fontWeight: 800 }}
                />
                <Tab
                  label="See All"
                  value="seeAll"
                  sx={{ color: "#666F80", fontWeight: 800 }}
                />
              </TabList>
            </Box>
            <TabPanel value="myConnections">
              <Paper
                elevation={4}
                sx={{ borderRadius: "10px", backgroundColor: "#F9FAFE" }}
              >
                {connectionData?.map((obj, index) => (
                  <>
                    <Grid
                      container
                      spacing={1}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px",
                      }}
                    >
                      <Grid item xs={3}>
                        <Avatar alt="Remy Sharp" src={avatarlogo1} />
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sx={{ width: "10px", wordWrap: "break-word" }}
                      >
                        <Typography sx={{ fontWeight: "800" }}>
                          {obj}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        />
                      </Grid>
                    </Grid>
                    <Divider
                      style={{ border: "1px solid #98A0A6", margin: "15px" }}
                    />
                  </>
                ))}
              </Paper>
            </TabPanel>
            <TabPanel value="seeAll">
              {" "}
              <Paper
                elevation={4}
                sx={{ borderRadius: "10px", backgroundColor: "#F9FAFE" }}
              >
                {connectionDataALL?.map((obj, index) => (
                  <>
                    <Grid
                      container
                      spacing={1}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px",
                      }}
                    >
                      <Grid item xs={3}>
                        <Avatar alt="Remy Sharp" src={avatarlogo1} />
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sx={{ width: "10px", wordWrap: "break-word" }}
                      >
                        <Typography sx={{ fontWeight: "800" }}>
                          {obj}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        />
                      </Grid>
                    </Grid>
                    <Divider
                      style={{ border: "1px solid #98A0A6", margin: "15px" }}
                    />
                  </>
                ))}
              </Paper>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default RightTabList;
