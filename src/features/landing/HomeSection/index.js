import React, { useState } from "react";
import "../styles.css";
import logo from "../../../image/signup/logo.png";
import {
  Autocomplete,
  Button,
  Paper,
  TextField,
  Typography,
  createFilterOptions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const filter = createFilterOptions();

const HomeSection = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);
  return (
    <div className="HomeSection--Container">
      <div className="HomeSection--Navbar">
        <img src={logo} style={{ width: "200px" }} />
        <div className="HomeSection--Navbar--text">
          <Typography
            sx={{
              fontWeight: "600",
              color: "#666F80",
              fontFamily: "Montserrat",
              textAlign: "center",
              margin: "1rem",
              cursor: "pointer",
            }}
          >
            Find Jobs
          </Typography>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#666F80",
              fontFamily: "Montserrat",
              textAlign: "center",
              margin: "1rem",
              cursor: "pointer",
            }}
          >
            .
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              color: "#666F80",
              fontFamily: "Montserrat",
              textAlign: "center",
              margin: "1rem",
              cursor: "pointer",
            }}
          >
            Find Care
          </Typography>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#666F80",
              fontFamily: "Montserrat",
              textAlign: "center",
              margin: "1rem",
              cursor: "pointer",
            }}
          >
            .
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              color: "#666F80",
              fontFamily: "Montserrat",
              textAlign: "center",
              margin: "1rem",
              cursor: "pointer",
            }}
          >
            For Employers
          </Typography>
        </div>
        <div style={{ marginTop: "-2rem" }}>
          <Typography
            sx={{
              textAlign: "end",
              marginBottom: "1rem",
              color: "#A52B92",
              fontWeight: "800",
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            Sign In
          </Typography>
          <Button variant="contained" sx={{ marginTop: "-0.5rem" }}>
            Partner Program
          </Button>
        </div>
      </div>
      <div className="HomeSection--MainContent">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "800",
            width: "40rem",
            color: "#fff",
            marginTop: "5rem",
            textAlign: "center",
          }}
        >
          Trusted and Verified Professional Global Care Network
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: "25rem",
            color: "#fff",
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          Find your dream job and Connect with Top Employers in the Care
          Industry
        </Typography>
        <div className="HomeSection--Paper">
          <Paper elevation={3} sx={{ height: "6rem", width: "35rem" }}>
            <div className="HomeSection--Paper--Content">
              <Autocomplete
                value={value}
                style={{ fontWeight: "800", color: "#666F80" }}
                onChange={(event, newValue) => {
                  if (typeof newValue === "string") {
                    setValue({
                      title: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                      title: newValue.inputValue,
                    });
                  } else {
                    setValue(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some(
                    (option) => inputValue === option.title
                  );
                  if (inputValue !== "" && !isExisting) {
                    filtered.push({
                      inputValue,
                      title: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={[]}
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === "string") {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.title;
                }}
                renderOption={(props, option) => (
                  <li {...props}>{option.title}</li>
                )}
                sx={{ width: 300 }}
                freeSolo
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search for jobs..."
                    sx={{ fontWeight: "800", color: "#666F80" }}
                    // sx={{ borderRadius: "20px", border: "1px solid #A52B92" }}
                  />
                )}
              />
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
