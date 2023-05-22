import {
  Button,
  Grid,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import verifiedRightArrow from "../../../image/verifiedRightArrow.svg";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import tick from "../../../image/CheckboxTick.svg";
import { verificationService } from "../../../services";
const VerificationStart = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const [verificationsCredentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    ph: "",
  });

  const handleCredsChange = (e) => {
    console.log("CREDS CHANGED");
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("PAYLOAD", verificationsCredentials);
    const response = await verificationService(verificationsCredentials);
    console.log("Response", response);

    if (response?.data?.status == 200) {
      navigate("/dashboard/verificationProgress");
    }
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "2rem",
        paddingTop: "3rem",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography sx={{ color: "#666F80", fontWeight: 800 }}>
          Get Verified
        </Typography>
        <img
          src={verifiedRightArrow}
          alt=""
          onClick={handleBack}
          width={50}
          height={30}
          style={{ cursor: "pointer" }}
        />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "1rem" }}>
        <Paper elevation={3} sx={{ borderRadius: "2rem", height: "90vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{ color: "#A52B92", fontWeight: "bold" }}
              >
                Start Verification
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle">
                Get started on your journey by our simple verification
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <div className="offerCard">
                <Typography sx={{ fontWeight: "800", color: "#666F80" }}>
                  <span
                    style={{ textDecoration: "line-through", fontSize: "18px" }}
                  >
                    INR 2,500
                  </span>{" "}
                  &nbsp; &nbsp; &nbsp; Limited period offer on Verification
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="checkBoxGroup">
                <div className="checkBoxGroup-content">
                  <img
                    src={tick}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Typography>Get NurseFam Verified Badge</Typography>
                </div>
                <div className="checkBoxGroup-content">
                  <img
                    src={tick}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Typography>Higher Job Success</Typography>
                </div>
                <div className="checkBoxGroup-content">
                  <img
                    src={tick}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Typography>Partner Program</Typography>
                </div>
                <div className="checkBoxGroup-content">
                  <img
                    src={tick}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Typography>Support and Guidance</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                sx={{ textAlign: "center", maxHeight: "40vh" }}
              >
                <Grid item xs={12}>
                  <InputLabel
                    style={{
                      color: "#A52B92",
                      fontSize: "15px",
                      fontWeight: "800",
                    }}
                  >
                    Please check and confirm this information before submitting.
                  </InputLabel>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    onChange={handleCredsChange}
                    name="first_name"
                    placeholder="First Name"
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid #666F80",
                      borderRadius: "10px",
                      width: "70%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    onChange={handleCredsChange}
                    name="last_name"
                    placeholder="Last Name"
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid #666F80",
                      borderRadius: "10px",
                      width: "70%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    name="email"
                    onChange={handleCredsChange}
                    placeholder="Email"
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid #666F80",
                      borderRadius: "10px",
                      width: "70%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    name="ph"
                    placeholder="Phone number"
                    type="tel"
                    onChange={handleCredsChange}
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid #666F80",
                      borderRadius: "10px",
                      width: "70%",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  width: "30%",
                  marginTop: "1rem",
                  backgroundColor: "#341950 !important",
                  borderRadius: "10px",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "2rem" }}>
        <Typography
          sx={{ textAlign: "center", fontWeight: "400", color: "#20242A" }}
        >
          IDfy is our BGV Partner for verification. A link will be sent
          <br /> to your email for verification. Be ready with documents.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default VerificationStart;
