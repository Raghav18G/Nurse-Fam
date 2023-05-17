import React, { useState } from "react";

import {
  Container,
  TextField,
  Typography,
  Button,
  Snackbar,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { adminLoginService, fetchRole } from "./service";
import {
  adminInfoStorageService,
  adminRoleStorageService,
  adminNameStorageService,
  adminIdStorageService,
} from "../../shared/services";

import "./style.css";
import { getSchema } from "./utils";
import mainLogo from "../../image/mainLogo.png";
import { useDispatch } from "react-redux";
import { storeAuthSlice, storeUserNameSlice } from "./auth.slice";

const Login = () => {
  const [error, setError] = useState("");
  const [roleOptions, setRoleOptions] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(getSchema()),
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    const response = await adminLoginService(data);
    if (response.status == 200) {
      adminInfoStorageService(response.data.access_token);
      adminRoleStorageService(response.data.adminData.role);
      adminNameStorageService(response.data.adminData.name);
      adminIdStorageService(response.data.adminData.id);
      dispatch(storeUserNameSlice(response?.data?.adminData?.name));
      navigate("/dashboard/statistics");
      window.location.reload();
      return;
    } else {
      setError(response.error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const roleHandle = async (value) => {
    const data = await fetchRole(value);
    data && setRoleOptions(data);
  };

  return (
    <Container className="container">
      <Container className="logo-image">
        <div className="logo-image-div">
          <img src={mainLogo} />
        </div>
      </Container>
      <Container className="login-container">
        {/* <Typography className="login-header">Travel Hangouts</Typography> */}
        <form onSubmit={handleSubmit(handleLogin)}>
          <TextField
            {...register("email")}
            label="Email Address"
            fullWidth
            required
            variant="outlined"
            error={errors.email}
            helperText={errors.email?.message}
            onChange={(e) => roleHandle(e.target.value)}
          />

          <TextField
            {...register("role")}
            select
            label="Role"
            fullWidth
            required
            variant="outlined"
            error={errors.role}
            helperText={errors.role?.message}
          >
            {roleOptions?.map((option, ind) => (
              <MenuItem key={option.id} value={option.role}>
                {option.role}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            {...register("password")}
            label="Password"
            type="password"
            fullWidth
            required
            variant="outlined"
            error={errors.password}
            helperText={errors.password?.message}
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ color: "#fff" }}
          >
            Login
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

export default Login;
