import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import {
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
import React from "react";
import "./styles.css";
const UDGeneralInfo = () => {
  return (
    <>
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
              <TextField size="small" fullWidth />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel>DOB*</InputLabel>

              <TextField
                name="startDate"
                type="date"
                size="small"
                placeholder="DD/MM/YYYY"
                InputProps={{ min: new Date().toISOString().slice(0, 16) }}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <FormControl>
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
              <TextField size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Email Address*</InputLabel>
              <TextField size="small" fullWidth />
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
              <TextField size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Landmark</InputLabel>
              <TextField size="small" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <TextField size="small" placeholder="Street 1*" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <TextField size="small" placeholder="Street 2" fullWidth />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem", paddingRight: "10px" }}>
              <InputLabel>City*</InputLabel>
              <Select size="small" fullWidth>
                <MenuItem value={1}>option 1</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel>State/Province*</InputLabel>
              <Select size="small" fullWidth>
                <MenuItem value={1}>option 1</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem", paddingRight: "10px" }}>
              <InputLabel>Country*</InputLabel>
              <Select size="small" fullWidth>
                <MenuItem value={1}>option 1</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "1rem" }}>
              <InputLabel>ZIP Code*</InputLabel>
              <TextField size="small" fullWidth />
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
              <Select size="small" placeholder="Choose Avatar" fullWidth>
                <MenuItem value={1}>option 1</MenuItem>
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
                size="small"
                placeholder="Description"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UDGeneralInfo;
