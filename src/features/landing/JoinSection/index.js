import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const JoinSection = () => {
  const navigate = useNavigate();

  return (
    <div className="JoinSection--Container">
      <div className="JoinSection--top">
        <Typography variant="h4" sx={{ color: "#A52B92", fontWeight: "800" }}>
          Join NurseFam Today
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000000",
            width: "30vw",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          Join us if you’re ready to take your career in the care industry to
          the next level
        </Typography>
      </div>
      <div className="JoinSection--bottom">
        <Typography
          variant="body1"
          sx={{
            color: "#666F80",
            width: "30vw",
            textAlign: "center",
            marginTop: "1rem",
            fontWeight: "600",
          }}
        >
          With our global care network, job opportunities, and care services
          platform, you’ll have everything you need to succeed as a Care
          Professional
        </Typography>
        <div style={{ flex: 0.5, height: "1px", backgroundColor: "black" }} />
        <div className="JobSection--ButtonContainer">
          <Button
            variant="contained"
            style={{
              marginRight: "1rem",
              borderRadius: "10px",
            }}
            onClick={() => navigate("/signup")}
          >
            {" "}
            Create an Account
          </Button>
          <Button
            variant="outlined"
            style={{ borderRadius: "10px" }}
            onClick={() => navigate("/login")}
          >
            {" "}
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
