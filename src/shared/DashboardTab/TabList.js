import * as React from "react";
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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));
const RightTabList = () => {
  const [value, setValue] = React.useState("myConnections");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                <Tab label="My Connections" value="myConnections" />
                <Tab label="See All" value="seeAll" />
              </TabList>
            </Box>
            <TabPanel value="myConnections">
              <Paper elevation={4} sx={{ borderRadius: "10px" }}>
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
                  <Grid item xs={7}>
                    <Typography sx={{ fontWeight: "800" }}>Allison</Typography>

                    <Typography>12345678900</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    />
                  </Grid>
                </Grid>
                <Divider
                  style={{ border: "1px solid #98A0A6", margin: "15px" }}
                />
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
                    <Avatar alt="Remy Sharp" src={avatarlogo2} />
                  </Grid>
                  <Grid item xs={7}>
                    <Typography sx={{ fontWeight: "800" }}>
                      Bellinger
                    </Typography>

                    <Typography>12345678901</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    />
                  </Grid>
                </Grid>
                <Divider
                  style={{ border: "1px solid #98A0A6", margin: "15px" }}
                />
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
                    <Avatar alt="Remy Sharp" src={avatarlogo3} />
                  </Grid>
                  <Grid item xs={7}>
                    <Typography sx={{ fontWeight: "800" }}>Diana</Typography>

                    <Typography>12345678902</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </TabPanel>
            <TabPanel value="seeAll">
                {/* see all */}
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default RightTabList;
