import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./styles.css";

import logo from "../../image/RJCARDPHOTO.svg";

const MyJobCard = ({ location, salary }) => {
  return (
    <div className="MyJobCard--Container">
      <Paper elevation={3} sx={{ height: "15vh", borderRadius: "20px" }}>
        <Grid container>
          <Grid item xs={2} sx={{ textAlign: "center" }}>
            <img src={logo} style={{ width: "50px", marginTop: "1rem" }} />
          </Grid>
          <Grid item xs={7}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container sx={{ marginTop: "1rem" }}>
                  <Grid item xs={3}>
                    <Typography sx={{ fontWeight: 800, fontSize: "14px" }}>
                      {" "}
                      Nursing Staff
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: "right" }}>
                    {" "}
                    <Button
                      variant="outlined"
                      sx={{
                        height: "1.2rem",
                        textDecoration: "none",
                        fontSize: "6.8px",
                        background: "#341950",
                        color: "#fff",
                      }}
                    >
                      Applied
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    {" "}
                    <Button
                      variant="outlined"
                      sx={{
                        height: "1.2rem",
                        textDecoration: "none",
                        fontSize: "6px",
                        marginLeft: "10px",
                      }}
                    >
                      Move to Saved
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    {" "}
                    <Button
                      variant="outlined"
                      sx={{
                        height: "1.2rem",
                        textDecoration: "none",
                        fontSize: "5.5px",
                        marginLeft: "5px",
                      }}
                    >
                      Company Profile
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ marginTop: "0.5rem" }}>
                <Typography
                  sx={{ color: "#666F80", fontSize: "12px", fontWeight: 700 }}
                >
                  Location - {location}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: "end", padding: "1rem" }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography sx={{ color: "#542A68", fontWeight: 800 }}>
                  INR {salary}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "12px", color: "#98A0A6" }}>
                  2 days ago
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default MyJobCard;
