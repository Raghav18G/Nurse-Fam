import React, { useState } from "react";

import {
  Container,
  TextField,
  Typography,
  Button,
  Snackbar,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { adminRegisterService } from "./service";
import {
  adminInfoRemovalService,
  adminRoleRemovalService,
} from "../../shared/services";
import mainLogo from "../../image/mainLogo.png";

import "./style.css";
import { getSchemaRegister } from "./utils";
import { useSelector } from "react-redux";

const Register = () => {
  const [param] = useSearchParams();
  const token = param.get("token")
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(getSchemaRegister()),
  });
  const navigate = useNavigate();


  const user_email = useSelector((state) => state?.auth?.authDetails);

  const handleRegister = async (data) => {
   
    const response = await adminRegisterService({data, token});
    if (response.status === 201) {
      navigate("/");
      return;
    } else {
      setError(response.error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <Container className="register-container">
      {/* <Typography className="login-header">Travel Hangouts</Typography> */}
      <Container className="logo-image">
        <div className="logo-image-div">
          <img src={mainLogo} />
        </div>
      </Container>
      <Container className="login-container">
        <form onSubmit={handleSubmit(handleRegister)}>
          <TextField
            {...register("name")}
            label="Name"
            fullWidth
            variant="outlined"
            error={errors.name}
            required
            helperText={errors.name?.message}
          />
          <TextField
            {...register("phone")}
            label="Phone"
            fullWidth
            variant="outlined"
            error={errors.phone}
            required
            helperText={errors.phone?.message}
          />
          <TextField
            disabled
            defaultValue={user_email}
            label="Email"
            fullWidth
            variant="filled"
            required
            // error={errors.email}
            // helperText={errors.email?.message}
          />
          <TextField
            {...register("password")}
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            required
            error={errors.password}
            helperText={errors.password?.message}
            // required
          />
          <Button fullWidth variant="contained" type="submit">
            Register
          </Button>
        </form>
      </Container>

      <Snackbar
        open={error}
        message={error}
        severity="error"
        autoHideDuration={2000}
      />
    </Container>
  );
};

export default Register;
