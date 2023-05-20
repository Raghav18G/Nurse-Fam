import { Dashboard } from "@mui/icons-material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextsmsIcon from "@mui/icons-material/Textsms";
import InsightsIcon from "@mui/icons-material/Insights";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Button } from "@mui/material";
const Hell = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        {props.icon}
        {props.text}
      </div>
    </>
  );
};
const routes = [
  {
    name: <Hell icon={<Dashboard />} text={"Dashboard"} />,
    path: "/dashboard",
  },
  {
    name: <Hell icon={<AccountCircleIcon />} text={"My Profile"} />,
    path: "/profile",
  },
  {
    name: <Hell icon={<SearchIcon />} text={"Search Jobs"} />,
    path: "/searchJobs",
  },
  {
    name: <Hell icon={<BusinessCenterIcon />} text={"My Jobs"} />,
    path: "/myJobs",
  },
  {
    name: <Hell icon={<TextsmsIcon />} text={"Messages"} />,
    path: "/messages",
  },
  {
    name: <Hell icon={<InsightsIcon />} text={"Activities"} />,
    path: "/activities",
  },
];

export default routes;
