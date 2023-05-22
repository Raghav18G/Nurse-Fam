import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import DashboardCard from "../../shared/DashboardCard";
import DashboardBanner from "../../shared/DashboardBanner";
import SearchIcon from "@mui/icons-material/Search";
import DashboardRJCard from "../../shared/DashboardRJCard";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import {
  getNurseAppliedJobs,
  getNurseCompletion,
  getNurseInvite,
} from "../../services";
const Dashboard = () => {
  const navigate = useNavigate();
  const [nurseCompletion, setNurseCompletion] = useState();
  const [nurseApplied, setNurseApplied] = useState();
  const [nurseInvited, setNurseInvited] = useState();
  const handleCardClick = () => {
    navigate("/userDetails");
  };
  const getCardsData = async () => {
    let completionResponse = await getNurseCompletion();
    let appliedResponse = await getNurseAppliedJobs();
    let inviteResponse = await getNurseInvite();

    if (completionResponse?.data?.status == 200) {
      console.log("Response", completionResponse);
      setNurseCompletion(completionResponse?.data.complition);
    }
    if (appliedResponse?.data?.status == 200) {
      setNurseApplied(appliedResponse?.data.complition);
    }
    if (inviteResponse?.data?.status == 200) {
      setNurseInvited(inviteResponse?.data.complition);
    }
  };

  useEffect(() => {
    getCardsData();
  }, []);
  return (
    <Grid container spacing={2} sx={{ padding: "10px" }}>
      {/* serach bar */}
      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              sx={{
                backgroundColor: "#fff",
                border: "2px solid #A52B92",
                borderRadius: "10px",
              }}
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Search for jobs"
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{
                backgroundColor: "#341950 !important",
                borderRadius: "10px",
              }}
            >
              <SearchIcon style={{ fill: "#fff" }} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* cards */}
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              variant="subtitle"
              sx={{ color: "#666F80", fontWeight: "700" }}
            >
              Overview
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <DashboardCard
              white
              header="My Profile"
              text={`${nurseCompletion}% Completed`}
              subtext="Verification Pending*"
              footerText="Complete Now"
              handleClick={handleCardClick}
            />
          </Grid>
          <Grid item xs={4}>
            <DashboardCard
              header="My Jobs"
              text={`${nurseApplied} Applied For`}
              footerText="Apply Here"
              // handleClick={handleCardClick}
            />
          </Grid>
          <Grid item xs={4}>
            <DashboardCard
              white
              header="Invites"
              text={`${nurseInvited} New Requests`}
              footerText="All Invites"
              // handleClick={handleCardClick}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* banner */}
      <Grid item xs={12} sx={{ marginTop: "3rem" }}>
        <DashboardBanner />
      </Grid>
      {/* recommended jobs */}
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6}>
            <Typography sx={{ color: "#666F80", fontWeight: 800 }}>
              Recommended Jobs
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={6} sx={{ textAlign: "end" }}>
                <Typography sx={{ color: "#666F80", fontWeight: 800 }}>
                  {" "}
                  Sort by :
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ paddingLeft: "1rem" }}>
                <NativeSelect
                  sx={{ width: "70%" }}
                  defaultValue={30}
                  inputProps={{
                    name: "Date",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Date</option>
                  <option value={20}>Day</option>
                  <option value={30}>Month</option>
                </NativeSelect>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className="RJCardsContainer">
          <DashboardRJCard />
          <DashboardRJCard />
          <DashboardRJCard />
          <DashboardRJCard />
        </div>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
