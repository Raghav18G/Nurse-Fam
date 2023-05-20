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

const UDQualifications = () => {
  return (
    <div className="QualificationsContainer">
      <Grid
        container
        spacing={2}
        className="info-root-container"
        sx={{ padding: "4rem", paddingBottom: "4rem" }}
      >
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ color: "#A52B92", fontWeight: "800" }}>
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
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                placeholder="Enter University or College**"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                placeholder="Enter Program*"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                placeholder="Start Month and Year*"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ backgroundColor: "#fff" }}
                size="small"
                placeholder="Year of Completion**"
                fullWidth
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
                    <MenuItem value={1}>option 1</MenuItem>
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
                  >
                    <MenuItem value={1}>option 1</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Select
                    sx={{ backgroundColor: "#fff" }}
                    size="small"
                    fullWidth
                  >
                    <MenuItem value={1}>option 1</MenuItem>
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
                  >
                    <MenuItem value={1}>option 1</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Select
                    sx={{ backgroundColor: "#fff" }}
                    size="small"
                    fullWidth
                  >
                    <MenuItem value={1}>option 1</MenuItem>
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
      </Grid>
    </div>
  );
};

export default UDQualifications;
