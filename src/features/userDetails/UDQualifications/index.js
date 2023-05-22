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
import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import {
  setEducationDetails,
  setExperienceDetails,
  setLicenseDetails,
} from "../../../services";

const UDQualifications = () => {
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
    let educationPayload = [
      {
        course: data.course,
        university: data.university,
        program: data.program,
        start_date: data.start_date,
        end_date: data.end_date,
      },
    ];
    let experiencePayload = [
      {
        organisation: data.organisation,
        job_title: data.job_title,
        start_month: data.start_month,
        start_year: data.start_year,
        end_month: data.end_month,
        end_year: data.end_year,
      },
    ];
    let licensePayload = {
      rn_number: data.rn_number,
      tnai_number: data.tnai_number,
    };
    const educationResponse = await setEducationDetails(educationPayload);

    const experienceResponse = await setExperienceDetails(experiencePayload);
    const licenseResponse = await setLicenseDetails(licensePayload);
    console.log("educationResponse", educationResponse);
    console.log("experienceResponse", experienceResponse);
    console.log("licenseResponse", licenseResponse);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="QualificationsContainer">
        <Grid
          container
          spacing={2}
          className="info-root-container"
          sx={{ padding: "4rem", paddingBottom: "4rem" }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ color: "#A52B92", fontWeight: "800" }}
            >
              Please enter your qualifications
            </Typography>
          </Grid>

          {/* 1st Container */}
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "1rem",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                backgroundColor: "#F0F2F9",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              <Grid item xs={12}>
                <InputLabel>Add Education*</InputLabel>
                <TextField
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  placeholder="Enter course*"
                  fullWidth
                  {...register("course")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  placeholder="Enter University or College**"
                  fullWidth
                  {...register("university")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  placeholder="Enter Program*"
                  fullWidth
                  {...register("program")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  placeholder="Start Month and Year*"
                  fullWidth
                  {...register("start_date")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  placeholder="Year of Completion*"
                  fullWidth
                  {...register("end_date")}
                />
              </Grid>
              <Grid item xs={6}>
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
                />
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ backgroundColor: "#341950 !important" }}
                    >
                      Add More +
                    </Button>
                  </Grid>
                  <Grid item xs={8}>
                    <Select
                      sx={{ backgroundColor: "#fff" }}
                      defaultValue="none"
                      size="small"
                      fullWidth
                    >
                      <MenuItem value={1}>Yes</MenuItem>
                      <MenuItem value={2}>No</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* 2nd Container */}
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "1rem",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                backgroundColor: "#F0F2F9",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              <Grid item xs={12}>
                <InputLabel>Add Experience*</InputLabel>
                <TextField
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  placeholder="Organization Name*"
                  fullWidth
                  {...register("organization")}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Start Date*</InputLabel>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Select
                      sx={{ backgroundColor: "#fff" }}
                      size="small"
                      fullWidth
                      {...register("start_month")}
                    >
                      <MenuItem value={1}>Month</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      sx={{ backgroundColor: "#fff" }}
                      size="small"
                      fullWidth
                      {...register("start_year")}
                    >
                      <MenuItem value={1}>Year</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <InputLabel>End Date*</InputLabel>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Select
                      sx={{ backgroundColor: "#fff" }}
                      size="small"
                      fullWidth
                      {...register("end_month")}
                    >
                      <MenuItem value={1}>Month</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      sx={{ backgroundColor: "#fff" }}
                      size="small"
                      fullWidth
                      {...register("end_year")}
                    >
                      <MenuItem value={1}>Year</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  placeholder="Job Title*"
                  fullWidth
                  {...register("job_title")}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#341950 !important" }}
                >
                  Add More +
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* 3rd Container */}
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "1rem",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                backgroundColor: "#F0F2F9",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              <Grid item xs={12}>
                <InputLabel>Registration Certification/Licenses*</InputLabel>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  placeholder="RN/RM/RANM/RLHV Number*"
                  fullWidth
                  {...register("rn_number")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: "#fff" }}
                  type="file"
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Upload Document*"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <FileUploadOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>TNAI Number (If you are member of TNAI)</InputLabel>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  placeholder="TNAI Number"
                  fullWidth
                  {...register("tnai_number")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: "#fff" }}
                  type="file"
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Upload Document*"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <FileUploadOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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
      </div>
    </form>
  );
};

export default UDQualifications;
