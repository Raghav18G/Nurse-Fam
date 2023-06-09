import React, { useEffect, useState } from "react";
import Facebook from "../../image/signup/Facebook.png";
import Google from "../../image/signup/Google.png";
import Linkedin from "../../image/signup/LinkedIn.png";
import OTP from "../../image/signup/OTP.png";
import logo from "../../image/signup/logo.png";

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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignupLayout from "../auth/SignupLayout";

const EmployerSignin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("CREDENTIALS", credentials);
    // navigate("/dashboard");
    // dispatch(login(credentials));
  };

  const handleCredsChange = (e) => {
    console.log("CREDS CHANGED");
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { loading, error, t_id, success } = useSelector((state) => state.auth);

  useEffect(() => {
    if (t_id) {
      navigate("/dashboard");
    }
  }, [t_id]);

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
                name="email"
                onChange={handleCredsChange}
                variant="outlined"
                sx={{ marginTop: "1rem", width: "100%", borderRadius: "20px" }}
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Password"
                name="password"
                variant="outlined"
                onChange={handleCredsChange}
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
                <FormControlLabel
                  control={
                    <Checkbox
                      name="isRememberMe"
                      // onChange={handleCredsChange}
                    />
                  }
                  label="Remember Me"
                />
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
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="signinContainer--right"></div>
      </div>
    </SignupLayout>
  );
};

export default EmployerSignin;
