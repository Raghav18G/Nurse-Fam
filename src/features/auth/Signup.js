import React, { useEffect, useState } from "react";
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
import OTPInput from "react-otp-input";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  OTPVerify,
  SignupService,
  getMobileVerifyMessage,
} from "../../services";
import { signup } from "./Redux/actionCreator";

const ariaLabel = { "aria-label": "description" };

const Signup = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log("PARAMS", searchParams.get("uid"));

  const [isOpen, setIsOpen] = useState(false);
  const [otp, setOtp] = useState("");
  var [signupInfo, setSignupInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [phoneMessage, setPhoneMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [uid, setUID] = useState(null);
  const [verificationMessageID, setVerificationMessageID] = useState(null);
  console.log("MESSAGE", verificationMessageID);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleClickConfirmShowPassword = () =>
    setShowPasswordConfirm(!showPasswordConfirm);
  const handleMouseDownConfirmPassword = () =>
    setShowPasswordConfirm(!showPasswordConfirm);
  const handleDialogOpen = () => {
    console.log("SIGNUP CREDS", signupInfo);
    setIsOpen(true);
  };
  const handleVerifyOpen = async () => {
    if (phoneNumber.length == 10) {
      console.log("VALID PHONE NUMBER");
      setPhoneMessage("");
      let response = await getMobileVerifyMessage(phoneNumber);
      console.log("SIGNUP PAGE", response);
      if (response.status == 200) {
        setVerificationMessageID(response?.data?.message);
        setIsOpen(false);
        setVerifyOpen(true);
      }
    } else {
      setPhoneMessage("please enter a valid phone number.");
    }
  };

  const OTPHandler = async (e) => {
    console.log("OTP", otp);
    let response = await OTPVerify({
      otp: otp,
      message: verificationMessageID,
    });
    console.log("SIGNUP OTP VERIFY", response);
    if (response.status == 200) {
      setVerifyOpen(false);

      if (searchParams.get("uid") != null) {
        signupInfo.uid = searchParams.get("uid");
      }

      let signUpResponse = await SignupService(signupInfo);
      if (signUpResponse?.data?.status == 200) {
        console.log("SUCCESFLUUUUUUUU");
        navigate("/login");
      }
    }
  };

  const handlePhoneNumber = (e) => {
    console.log("Phone Number", e.target.value);
    let phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
  };

  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login");
  };
  const handleInfoChange = (e) => {
    console.log("handleInfoChange CHANGED");

    const { name, value } = e.target;

    setSignupInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {}, []);
  return (
    <SignupLayout>
      <div className="signupContainer">
        <div className="signupContainer--left">
          <img src={logo} style={{ width: "150px" }} />
          <div className="signupContainer--left--bottom"></div>
        </div>
        <div className="signupContainer--right">
          <Typography variant="h5" sx={{ color: "#A52B92", fontWeight: "800" }}>
            Create Account
          </Typography>

          <div style={{ display: "flex" }}>
            <TextField
              fullWidth
              id="standard-basic"
              label="First Name"
              variant="standard"
              name="first_name"
              onChange={handleInfoChange}
              sx={{ marginTop: "0.5rem" }}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Last Name"
              variant="standard"
              name="last_name"
              onChange={handleInfoChange}
              sx={{ marginTop: "0.5rem", marginLeft: "1rem" }}
            />
          </div>

          <TextField
            id="standard-basic"
            label="Email"
            name="email"
            onChange={handleInfoChange}
            variant="standard"
            sx={{ marginTop: "0.5rem" }}
          />
          <TextField
            id="standard-basic"
            label="Password"
            name="password"
            onChange={handleInfoChange}
            variant="standard"
            type={showPassword ? "text" : "password"}
            sx={{ marginTop: "0.5rem" }}
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
            sx={{ marginTop: "0.5rem" }}
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
            onClick={handleDialogOpen}
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
              <img src={Google} style={{ width: "32px" }} />
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
              <img src={Facebook} style={{ width: "26px" }} />
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
              <img src={Linkedin} style={{ width: "26px", padding: "3px" }} />
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
              <img
                src={OTP}
                style={{
                  width: "30px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                }}
              />
            </Button>
          </div>

          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", textAlign: "center" }}
          >
            Been here before?{" "}
            <span
              onClick={handleSignInClick}
              style={{
                color: "#A52B92",
                cursor: "pointer",
                textUnderlinePosition: "under",
                textDecoration: "underline",
              }}
            >
              Login
            </span>
          </Typography>
        </div>
        <ReusableDialog
          isOpen={isOpen}
          title="Enter Mobile Number"
          subtitle="For verification please enter your number"
          handleClose={handleVerifyOpen}
          btnLabel="Send OTP"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <Input
              placeholder="Enter 10-digit Number"
              inputProps={ariaLabel}
              fullWidth
              type="tel"
              onChange={handlePhoneNumber}
            />
            <span
              style={{ fontWeight: 400, color: "red", marginTop: "0.5rem" }}
            >
              {phoneMessage}
            </span>
          </div>
        </ReusableDialog>
         
        <ReusableDialog
          isOpen={verifyOpen}
          title="Verification"
          subtitle="We have sent code to your on your number +91 98*******1"
          handleClose={OTPHandler}
          btnLabel="Verify"
          footerText={true}
          footerTextContent={
            <>
              <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                Didn't receive code?{" "}
                <span style={{ color: "#A52B92" }}>Resend</span>{" "}
              </Typography>
            </>
          }
        >
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props) => <input {...props} />}
            inputType="tel"
            containerStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            inputStyle={{
              width: "4rem",
              height: "4rem",
              margin: "1rem",
              borderRadius: "5px",
              fontSize: "2rem",
              fontWeight: "800",
            }}
          />
        </ReusableDialog>
      </div>
    </SignupLayout>
  );
};

export default Signup;
