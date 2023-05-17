import React, { useState } from "react";
import Facebook from "../../image/signup/Facebook.png";
import Google from "../../image/signup/Google.png";
import Linkedin from "../../image/signup/LinkedIn.png";
import OTP from "../../image/signup/OTP.png";
import logo from "../../image/signup/logo.png";
import ReusableDialog from "../../shared/Dialog/ResusableDialog";
import SignupLayout from "./SignupLayout";
import "./style.css";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

const ariaLabel = { "aria-label": "description" };

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleClickConfirmShowPassword = () =>
    setShowPasswordConfirm(!showPasswordConfirm);
  const handleMouseDownConfirmPassword = () =>
    setShowPasswordConfirm(!showPasswordConfirm);
  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  return (
    <SignupLayout>
      <div className="signupContainer">
        <div className="signupContainer--left">
          <img src={logo} style={{ width: "150px" }} />
          <div className="signupContainer--left--bottom"></div>
        </div>
        <div className="signupContainer--right">
          <Typography variant="h4" sx={{ color: "#A52B92", fontWeight: "800" }}>
            Create Account
          </Typography>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            sx={{ marginTop: "1rem" }}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type={showPassword ? "text" : "password"}
            sx={{ marginTop: "1rem" }}
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
            type={showPasswordConfirm ? "text" : "password"}
            sx={{ marginTop: "1rem" }}
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickConfirmShowPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormGroup sx={{ marginTop: "1rem" }}>
            <FormControlLabel
              control={<Checkbox />}
              label="I agree to the terms of service and privacy policy"
            />
          </FormGroup>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#341950 !important", marginTop: "1rem" }}
          >
            Sign up
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
                Or Start your Journey with
              </p>
            </div>
            <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
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
              onClick={handleDialogOpen}
              sx={{
                marginRight: "2rem",
                cursor: "pointer",
                backgroundColor: "#fff !important",
              }}
            >
              <img src={OTP} style={{ width: "60px", padding: "12px" }} />
            </Button>
          </div>

          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", textAlign: "center" }}
          >
            Been here before? <span style={{ color: "#A52B92" }}>Login</span>
          </Typography>
        </div>
        <ReusableDialog
          isOpen={isOpen}
          title="Enter Mobile Number"
          subtitle="For verification please enter your number"
          handleClose={() => {
            setIsOpen(false);
          }}
          btnLabel="Send OTP"
        >
          <div
            style={{ display: "flex", alignItems: "center", margin: "20px" }}
          >
            <Input
              placeholder="Enter 10-digit Number"
              inputProps={ariaLabel}
              fullWidth
            />
          </div>
        </ReusableDialog>
      </div>
    </SignupLayout>
  );
};

export default Signup;
