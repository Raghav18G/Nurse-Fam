import React from "react";
import "./styles.css";
import { Button, Grid, Paper, Typography } from "@mui/material";
import logo from "../../image/RJCARDPHOTO.svg";
import map from "../../image/location.svg";
import coins from "../../image/coins.svg";
import clock from "../../image/clock.svg";

import BookMarkEmpty from "../../image/bookmarkEmpty.svg";
import BookMarkFilled from "../../image/bokkmarkFilled.svg";

const DashboardSearchJobsCard = ({
  id,
  title,
  subtitle,
  location,
  amount,
  time,
  promotedButton = false,
  newButton = false,
  description,
  isbookMarkEmpty = true,
}) => {
  return (
    <div className="DBSearchJobsCard--Container">
      <Paper
        elevation={3}
        sx={{ height: "28vh", borderRadius: "20px", padding: "0.5rem" }}
      >
        <Grid container>
          <Grid item xs={2} sx={{ textAlign: "center" }}>
            <img src={logo} style={{ width: "80px", marginTop: "1rem" }} />
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              {/* UPPER */}
              <Grid item xs={12} sx={{ marginTop: "1rem" }}>
                <Grid container>
                  <Grid item xs={3}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography sx={{ fontWeight: 800, fontSize: "18px" }}>
                          {title}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "12px",
                            color: "#666F80",
                          }}
                        >
                          {subtitle}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <Grid container>
                      <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <img
                          src={map}
                          alt="location"
                          style={{ width: "20px" }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {" "}
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "#98A0A6",
                            fontSize: "12px",
                          }}
                        >
                          {location}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <Grid container>
                      <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <img
                          src={coins}
                          alt="location"
                          style={{ width: "20px" }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "#98A0A6",
                            fontSize: "12px",
                          }}
                        >
                          {amount}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        sx={{ textAlign: "center", color: "#98A0A6" }}
                      >
                        <img
                          src={clock}
                          alt="location"
                          style={{ width: "20px" }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "#98A0A6",
                            fontSize: "12px",
                          }}
                        >
                          {time}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    <Grid container>
                      {promotedButton && (
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                          <Button
                            variant="outlined"
                            sx={{
                              height: "1.2rem",
                              textDecoration: "none",
                              fontSize: "10px",
                            }}
                          >
                            Promoted
                          </Button>
                        </Grid>
                      )}

                      {newButton && (
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                          <Button
                            variant="outlined"
                            sx={{
                              height: "1.2rem",
                              textDecoration: "none",
                              fontSize: "10px",
                              marginTop: "0.5rem",
                              border: "1px solid #666F80",
                              color: "#666F80",
                            }}
                          >
                            New
                          </Button>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* LOWER */}
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={2}>
                    <Typography
                      sx={{
                        color: "#666F80",
                        marginTop: "0.5rem",
                        fontSize: "12px",
                        marginBottom: "1rem",
                        fontWeight: 800,
                      }}
                    >
                      Description :
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "#98A0A6",
                        marginTop: "0.5rem",
                        fontSize: "10px",
                        height: "5vh",
                        marginBottom: "1rem",
                        overflow: "scroll",
                      }}
                    >
                      {description}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: "end" }}>
                    {isbookMarkEmpty ? (
                      <img
                        src={BookMarkEmpty}
                        style={{
                          width: "25px",
                          marginTop: "0.5rem",
                          marginRight: "1rem",
                        }}
                      />
                    ) : (
                      <img
                        src={BookMarkFilled}
                        style={{
                          width: "25px",
                          marginTop: "0.5rem",
                          marginRight: "1rem",
                        }}
                      />
                    )}
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "green", marginTop: "0.5rem" }}
                    >
                      Apply
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default DashboardSearchJobsCard;
