import {
  Button,
  Container,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../../../shared/Loader";

import Analytics from "./Analytics";
import Facility from "./Facility";
import Leaders from "./Leaders";
import Missions from "./Missions";
import { AboutUsService } from "../service";
import { uploadFile, uploadMultiFile } from "../../../shared/services";

const AboutUsEdit = ({
  register,
  setValue,
  data,
  facilityData,
  setFacilityData,
  setFacilityIds,
  control,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [params] = useSearchParams();
  const formType = params.get("formType");

  const [facility, setFacility] = useState(
    data ? data?.chooseUs?.facilitiesId : []
  );
  const [leaders, setleaders] = useState(data ? data?.leaders : []);
  const [missions, setMissions] = useState(data?.missions);
  const [partners, setPartners] = useState(data?.partners);
  const [analytics, setAnalytics] = useState(data?.analytics);
  const [chooseUsImage, setChooseUsImage] = useState(data?.chooseUs.images);
  const [headerFeatImage, setHeaderFeatImage] = useState(
    data?.header.featuredImage
  );
  const [headerImages, setHeaderImages] = useState(data?.header.images);
  const [error, setError] = useState("");

  useEffect(() => {
    setValue("header.featuredImage", headerFeatImage);
  }, [headerFeatImage]);

  useEffect(() => {
    setValue("header.images", headerImages);
  }, [headerImages]);

  useEffect(() => {
    setValue("chooseUs.images", chooseUsImage);
  }, [chooseUsImage]);

  useEffect(() => {
    setValue("partners", partners);
  }, [partners]);

  const handleUploadFile = async ({ target }) => {
    const files = target.files[0];
    let formData = new FormData();
    formData.append("file", files);
    let payload = formData;

    try {
      const { fileUrl, isSuccess, error } = await uploadFile(payload);

      isSuccess && setHeaderFeatImage(fileUrl);
      // isSuccess && setValue("featuredImage",fileUrl)
      error && handleError(error);
    } catch (error) {
      handleError(error.errors[0]);
    }
  };

  const handleMultipleHeaderImagesUpload = async ({ target }) => {
    const files = target.files;
    let formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      const { fileUrl, isSuccess, error } = await uploadMultiFile(formData);
      let files = [];
      fileUrl.map((item) => {
        files.push(item.fileLocation);
      });
      isSuccess && setHeaderImages(files);
      error && handleError(error);
    } catch (error) {
      handleError(error);
    }
  };
  const handleMultipleChooseUsImagesUpload = async ({ target }) => {
    const files = target.files;
    let formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      const { fileUrl, isSuccess, error } = await uploadMultiFile(formData);
      let files = [];
      fileUrl.map((item) => {
        files.push(item.fileLocation);
      });
      isSuccess && setChooseUsImage(files);
      error && handleError(error);
    } catch (error) {
      handleError(error);
    }
  };
  const handleMultiplePartnersImagesUpload = async ({ target }) => {
    const files = target.files;
    let formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      const { fileUrl, isSuccess, error } = await uploadMultiFile(formData);
      let files = [];
      fileUrl.map((item) => {
        files.push(item.fileLocation);
      });
      isSuccess && setPartners(files);
      error && handleError(error);
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    setError(error);
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  return (
    <>
      <Container sx={{ padding: "0.5rem" }}>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "2rem" }}>About Us</Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/about-us?formType=view")}
          >
            Back
          </Button>
        </Grid>

        <Box
          component={Paper}
          elevation={8}
          p={2}
          marginTop={4}
          marginBottom={2}
        >
          <Typography sx={{ fontSize: "1.1rem", marginY: "0.5rem" }}>
            Headers
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                helperText="Title 1"
                fullWidth
                //    defaultValue={data?.header.title1}
                size="small"
                variant="standard"
                //    onChange={(e, value) => setValue("header.title1", value)}
                {...register("header.title1")}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                helperText="Title 2"
                fullWidth
                size="small"
                variant="standard"
                {...register("header.title2")}
                //    onChange={(e, value) => setValue("header.title2", value)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                helperText="Sub Title"
                fullWidth
                size="small"
                variant="standard"
                {...register("header.subTitle")}
                //    onChange={(e, value) => setValue("header.subtitle", value)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                helperText="Description"
                fullWidth
                size="small"
                variant="standard"
                multiline
                rows={3}
                {...register("header.description")}
                //    onChange={(e, value) => setValue("header.description", value)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <div style={{ height: "10rem", width: "10rem" }}>
                <img src={headerFeatImage} width="100%" height="100%"></img>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                helperText="Featured Image"
                type="file"
                fullWidth
                //    size="small"
                variant="outlined"
                onChange={handleUploadFile}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid
                container
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {headerImages.map((item) => (
                  <img src={item} height="100px" width="100px"></img>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                helperText="Images"
                type="file"
                fullWidth
                //    size="small"
                variant="outlined"
                inputProps={{
                  multiple: true,
                }}
                onChange={handleMultipleHeaderImagesUpload}
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          component={Paper}
          elevation={8}
          p={2}
          marginTop={4}
          marginBottom={2}
        >
          <Typography sx={{ fontSize: "1.1rem", marginY: "0.5rem" }}>
            Choose Us
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                helperText="Title"
                fullWidth
                size="small"
                variant="standard"
                {...register("chooseUs.title")}
                //    onChange={(e, value) => setValue("chooseUs.title", value)}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <TextField
                helperText="Description"
                fullWidth
                size="small"
                variant="standard"
                multiline
                rows={3}
                {...register("chooseUs.description")}
                //    onChange={(e, value) => setValue("chooseUs.description", value)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {chooseUsImage.map((item) => (
                  <img src={item} height="100px" width="100px"></img>
                ))}
              </div>
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                helperText="Images"
                type="file"
                fullWidth
                inputProps={{
                  multiple: true,
                }}
                //    size="small"
                variant="outlined"
                onChange={handleMultipleChooseUsImagesUpload}
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          component={Paper}
          elevation={8}
          p={4}
          marginTop={4}
          marginBottom={2}
        >
          <Typography sx={{ fontSize: "1.1rem", marginY: "0.5rem" }}>
            Facilities
          </Typography>
          <Grid container spacing={2}>
            <Facility
              facility={facility}
              setFacilityIds={setFacilityIds}
              control={control}
              register={register}
              facilityData={facilityData}
              setFacilityData={setFacilityData}
              setValue={setValue}
              handleUploadFile={handleUploadFile}
            />
          </Grid>
        </Box>

        <Box
          component={Paper}
          elevation={8}
          p={4}
          marginTop={4}
          marginBottom={2}
        >
          <Typography sx={{ fontSize: "1.1rem", marginY: "0.5rem" }}>
            Missions
          </Typography>
          <Grid container spacing={2}>
            {missions.map((item, index) => (
              <Container
                sx={{
                  border: "1px solid grey",
                  p: "0.2rem",
                  marginY: "0.5rem",
                }}
              >
                <Missions
                  index={index}
                  register={register}
                  setValue={setValue}
                  handleUploadFile={handleUploadFile}
                  items={item}
                />
              </Container>
            ))}
          </Grid>
        </Box>

        <Box
          component={Paper}
          elevation={8}
          p={4}
          marginTop={4}
          marginBottom={2}
        >
          <Typography sx={{ fontSize: "1.1rem", marginY: "0.5rem" }}>
            Leaders
          </Typography>
          <Grid container spacing={2}>
            {leaders.map((item, index) => (
              <Container
                sx={{
                  border: "1px solid grey",
                  p: "0.2rem",
                  marginY: "0.5rem",
                }}
              >
                <Leaders
                  index={index}
                  register={register}
                  setValue={setValue}
                  handleUploadFile={handleUploadFile}
                  items={item}
                />
              </Container>
            ))}
          </Grid>
        </Box>

        <Box
          component={Paper}
          elevation={8}
          p={4}
          marginTop={4}
          marginBottom={2}
        >
          <Typography>Partners</Typography>
          <Container
            sx={{ border: "1px solid grey", p: "0.2rem", marginY: "0.5rem" }}
          >
            <Grid
              container
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {partners.map((item) => (
                <Grid item>
                  <img src={item} height="100px" width="200px"></img>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                helperText="Images"
                type="file"
                fullWidth
                inputProps={{
                  multiple: true,
                }}
                //    size="small"
                variant="outlined"
                onChange={handleMultiplePartnersImagesUpload}
              />
            </Grid>
          </Container>
        </Box>

        <Box
          component={Paper}
          elevation={8}
          p={4}
          marginTop={4}
          marginBottom={2}
        >
          <Typography sx={{ fontSize: "1.1rem", marginY: "0.5rem" }}>
            Analytics
          </Typography>
          <Grid container spacing={2}>
            {analytics.map((item, index) => (
              <Container
                sx={{
                  border: "1px solid grey",
                  p: "0.2rem",
                  marginY: "0.5rem",
                }}
              >
                <Analytics
                  index={index}
                  register={register}
                  setValue={setValue}
                  handleUploadFile={handleUploadFile}
                  items={item}
                />
              </Container>
            ))}
          </Grid>
        </Box>

        <Snackbar
          open={!!error}
          message={error}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        />
      </Container>
    </>
  );
};

export default AboutUsEdit;
