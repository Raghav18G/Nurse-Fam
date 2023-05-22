import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useState } from "react";
import "./styles.css";
import { Controller, useForm } from "react-hook-form";
import { setGeneralInformation } from "../../../services";
const UDGeneralInfo = () => {
  const {
    register,
    reset,
    formState: { errors },
    setValue,
    getValues,
    control,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await setGeneralInformation(data);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={2}
        className="info-root-container"
        sx={{ padding: "4rem", paddingBottom: "4rem" }}
      >
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ color: "#A52B92", fontWeight: "800" }}>
            Please fill in your information
          </Typography>
        </Grid>

        {/* 
        1st Container */}
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "1rem",
          }}
        >
          <Grid
            container
            sx={{
              backgroundColor: "#F0F2F9",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12}>
              <InputLabel>Full Name*</InputLabel>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                fullWidth
                {...register("full_name")}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel>DOB*</InputLabel>

              <TextField
                sx={{ backgroundColor: "#fff" }}
                name="startDate"
                type="date"
                size="small"
                placeholder="DD/MM/YYYY"
                InputProps={{ min: new Date().toISOString().slice(0, 16) }}
                {...register("dob")}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <FormControl {...register("gender")}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  defaultValue="male"
                  sx={{
                    display: "flex !important",
                    flexDirection: "row !important",
                  }}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        {/* 
        2nd Container */}
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "1rem",
          }}
        >
          <Grid
            container
            sx={{
              backgroundColor: "#F0F2F9",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={6} sx={{ paddingRight: "10px" }}>
              <InputLabel>Phone Number*</InputLabel>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                fullWidth
                {...register("phone")}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Email Address*</InputLabel>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                fullWidth
                {...register("email")}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* 
        3rd Container */}
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              backgroundColor: "#F0F2F9",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={6} sx={{ paddingRight: "10px" }}>
              <InputLabel>House Number*</InputLabel>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                fullWidth
                {...register("house_number")}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Landmark</InputLabel>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                fullWidth
                {...register("landmark")}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                placeholder="Street 1*"
                fullWidth
                {...register("street_1")}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                placeholder="Street 2"
                fullWidth
                {...register("street_2")}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem", paddingRight: "10px" }}>
              <InputLabel>City*</InputLabel>
              <Select
                sx={{ backgroundColor: "#fff" }}
                size="small"
                fullWidth
                {...register("city")}
              >
                <MenuItem value="Bengaluru">Bengaluru</MenuItem>
                <MenuItem value="Delhi NCR">Delhi NCR</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel>State/Province*</InputLabel>
              <Select
                sx={{ backgroundColor: "#fff" }}
                size="small"
                fullWidth
                {...register("state")}
              >
                <MenuItem value="Karnataka">Karnataka</MenuItem>
                <MenuItem value="Delhi NCR">Delhi NCR</MenuItem>
                <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem", paddingRight: "10px" }}>
              <InputLabel>Country*</InputLabel>
              <Select
                sx={{ backgroundColor: "#fff" }}
                size="small"
                fullWidth
                {...register("country")}
              >
                <MenuItem value="india">India</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel>ZIP Code*</InputLabel>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                fullWidth
                {...register("zip_code")}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* 4th container */}
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              backgroundColor: "#F0F2F9",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12}>
              <InputLabel>Upload Profile Picture or Choose Avatar</InputLabel>
            </Grid>
            <Grid item xs={6} sx={{ paddingRight: "10px" }}>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                type="file"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Upload"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <FileUploadOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                // {...register("file")}
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                sx={{ backgroundColor: "#fff" }}
                size="small"
                placeholder="Choose Avatar"
                fullWidth
                // {...register("avatar")}
              >
                <MenuItem value={1}>avatar 1</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
        {/* 5th container */}
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              backgroundColor: "#F0F2F9",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12}>
              <InputLabel>About Me</InputLabel>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                placeholder="Description"
                fullWidth
                multiline
                rows={4}
                {...register("bio")}
              />
            </Grid>
          </Grid>
        </Grid>
        <div styles={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </div>
      </Grid>
    </form>
  );
};

export default UDGeneralInfo;
