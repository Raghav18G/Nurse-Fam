import { Dashboard } from "@mui/icons-material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import NearMeIcon from "@mui/icons-material/NearMe";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import RedeemIcon from "@mui/icons-material/Redeem";
import TourIcon from "@mui/icons-material/Tour";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import PersonIcon from "@mui/icons-material/Person";
import { ExpandMore, ExpandLess, Menu } from "@mui/icons-material";
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
    path: "/dashboard/statistics",
  },
  {
    id: 2,
    name: <Hell icon={<MyLocationIcon />} text={"Destinations"} />,
    path: "/destination",
  },
  {
    id: 3,
    name: <Hell icon={<RecordVoiceOverIcon />} text={"User Enquiries"} />,
    type: "collapse",
    children: [
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"General Enquiry"} />,
        path: "/user-enquiry",
        accessibleToAll: false,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Plan your Trip"} />,
        path: "/trip-enquiry",
        accessibleToAll: false,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Normal Tour"} />,
        path: "/tour-enquiry",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Group Tour"} />,
        path: "/group-tour-enquiry",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Call"} />,
        path: "/call-enquiry",
        accessibleToAll: false,
      },
    ],
  },
  {
    id: 4,

    name: <Hell icon={<NearMeIcon />} text={"Tours"} />,

    type: "collapse",
    children: [
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Tour Packages"} />,
        path: "/tour?view-type=tour-packages",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Tour Themes"} />,
        path: "/tour?view-type=tour-themes",
        accessibleToAll: true,
      },
      {
        name: (
          <Hell icon={<HorizontalRuleIcon />} text={"Famous Places to Visit"} />
        ),
        path: "/famous-places",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Things to Do"} />,
        path: "/things",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Categories"} />,
        path: "/nestedGroup",
        accessibleToAll: true,
      },
    ],
  },

  {
    id: 5,
    name: <Hell icon={<AdminPanelSettingsIcon />} text={"Hangout Admins"} />,
    path: "/employee-details",
  },
  {
    id: 6,
    name: <Hell icon={<RedeemIcon />} text={"Facility"} />,
    path: "/facility",
  },
  {
    id: 7,
    type: "collapse",
    name: <Hell icon={<WysiwygIcon />} text={"Landing Page"} />,
    children: [
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Group Tours"} />,
        path: "/groupTourView",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Todays Top Deals"} />,
        path: "/todaysTopDeal",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Hero Section"} />,
        path: "/hero-section",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"About Us"} />,
        path: "/about-us?formType=view",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Offers"} />,
        path: "/offer",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"FAQ"} />,
        path: "/faq",
        accessibleToAll: true,
      },
    ],
  },
  {
    id: 8,
    name: <Hell icon={<ScreenSearchDesktopIcon />} text={"SEO"} />,
    path: "/seo",
    children: [
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Seo Details"} />,
        path: "/seo",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Social Links"} />,
        path: "/socail-link",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Code Snippets"} />,
        path: "/codeSnippet-view",
        accessibleToAll: true,
      },
    ],
  },
  {
    id: 9,
    name: <Hell icon={<WysiwygIcon />} text={"Stories & Reviews"} />,
    children: [
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Travel Stories"} />,
        path: "/story",
        accessibleToAll: true,
      },
      {
        name: <Hell icon={<HorizontalRuleIcon />} text={"Travel Reviews"} />,
        path: "/review",
        accessibleToAll: true,
      },
    ],
  },
  {
    id: 10,
    name: <Hell icon={<PersonIcon />} text={"Users"} />,
    path: "/users",
  },
];
export default routes;
