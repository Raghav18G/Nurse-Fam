import React, { useState } from "react";
import Facebook from "../../image/signup/Facebook.png";
import Google from "../../image/signup/Google.png";
import Linkedin from "../../image/signup/LinkedIn.png";
import OTP from "../../image/signup/OTP.png";
import logo from "../../image/signup/logo.png";
import ReusableDialog from "../../shared/Dialog/ResusableDialog";
import SignupLayout from "./SignupLayout";
import "./style.css";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <SignupLayout>
      <div className="signinContainer">
        <div className="signinContainer--left">
          <img src={logo} style={{ width: "150px" }} />
          <div className="signinContainer--left--bottom">
            <Typography
              variant="h5"
              sx={{ color: "#A52B92", fontWeight: "800" }}
            >
              Sign In
            </Typography>
            <div>
              {" "}
              <TextField
                id="standard-basic"
                label="Email"
                variant="outlined"
                sx={{ marginTop: "1rem", width: "100%", borderRadius: "20px" }}
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                sx={{ marginTop: "1rem", width: "100%", borderRadius: "20px" }}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="CheckboxContainer">
              <FormGroup sx={{ marginTop: "1rem" }}>
                <FormControlLabel control={<Checkbox />} label="Remember Me" />
              </FormGroup>

              <span
                style={{
                  color: "#A52B92",
                  cursor: "pointer",
                  textUnderlinePosition: "under",
                  textDecoration: "underline",
                  marginTop: "1.5rem",
                }}
              >
                Forgot Password?
              </span>
            </div>

            <Button
              variant="contained"
              sx={{ backgroundColor: "#341950 !important", marginTop: "1rem" }}
            >
              Sign In
            </Button>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  backgroundColor: "black",
                }}
              />
              <div>
                <p style={{ margin: "0px 10px 0px 10px", textAlign: "center" }}>
                  Or Sign in with
                </p>
              </div>
              <div
                style={{ flex: 1, height: "1px", backgroundColor: "black" }}
              />
            </div>
            <div className="socialsContainer">
              <Button
                elevation={3}
                variant="contained"
                sx={{
                  marginRight: "2rem",
                  cursor: "pointer",
                  backgroundColor: "#fff !important",
                }}
              >
                <img src={Google} style={{ width: "50px" }} />
              </Button>
              <Button
                elevation={3}
                variant="contained"
                sx={{
                  marginRight: "2rem",
                  cursor: "pointer",
                  backgroundColor: "#fff !important",
                }}
              >
                <img src={Facebook} style={{ width: "40px", padding: "px" }} />
              </Button>
              <Button
                elevation={3}
                variant="contained"
                sx={{
                  marginRight: "2rem",
                  cursor: "pointer",
                  backgroundColor: "#fff !important",
                }}
              >
                <img src={Linkedin} style={{ width: "40px", padding: "3px" }} />
              </Button>
              <Button
                elevation={3}
                variant="contained"
                sx={{
                  marginRight: "2rem",
                  cursor: "pointer",
                  backgroundColor: "#fff !important",
                }}
              >
                <img src={OTP} style={{ width: "60px", padding: "12px" }} />
              </Button>
            </div>
          </div>
        </div>
        <div className="signinContainer--right"></div>
      </div>
    </SignupLayout>
  );
};

export default Signin;
