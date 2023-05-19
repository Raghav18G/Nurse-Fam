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
    id: 1,
    name: <Hell icon={<Dashboard />} text={"Dashboard"} />,
    path: "/dashboard",
  },
  {
    id: 2,
    name: <Hell icon={<AccountCircleIcon />} text={"My Profile"} />,
    path: "/profile",
  },
  {
    id: 2,
    name: <Hell icon={<SearchIcon />} text={"Search Jobs"} />,
    path: "/searchJobs",
  },
  {
    id: 2,
    name: <Hell icon={<BusinessCenterIcon />} text={"My Jobs"} />,
    path: "/myJobs",
  },
  {
    id: 10,
    name: <Hell icon={<TextsmsIcon />} text={"Messages"} />,
    path: "/messages",
  },
  {
    id: 10,
    name: <Hell icon={<InsightsIcon />} text={"Activities"} />,
    path: "/activities",
  },
];
export default routes;
