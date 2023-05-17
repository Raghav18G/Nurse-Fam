import React, { useEffect, useState } from "react";

import { Button, Container, Snackbar, Typography } from "@mui/material";

// import { AboutUsService } from "./service";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { useForm } from "react-hook-form";
import { uploadFile, uploadMultiFile } from "../../../shared/services";
import { useDispatch, useSelector } from "react-redux";
import AboutUsEdit from "./AboutUsEdit";
import { AboutUsService } from "../service";
import { async } from "q";
// import "./style.css";

const AboutUsForm = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const formType = params.get("aboutUsFormType");

  const {
    state: { data },
  } = useLocation();

  const [aboutUsData, setAboutUsData] = useState(data);
  const [facilityData, setFacilityData] = useState([]);
  const [facilitiesId, setFacilitiesId] = useState(
    aboutUsData.chooseUs.facilitiesId?.map((item) => item._id)
  );
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setAboutUsData(data);
  }, [data]);

  const fetchFacilityData = async () => {
    try {
      const { facilityData } = await AboutUsService.fetchFacility();
      setFacilityData(facilityData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchFacilityData();
  }, []);
  const { control, handleSubmit, register, setValue, getValues } = useForm({
    defaultValues: {
      header: aboutUsData.header,
      chooseUs: aboutUsData.chooseUs,
      missions: aboutUsData.missions,
      leaders: aboutUsData.leaders,
      partners: aboutUsData.partners,
      analytics: aboutUsData.analytics,
      facilitiesId: aboutUsData.chooseUs.facilitiesId?.map((item) => item._id),
    },
  });

  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    const payload = {
      aboutUs: {
        header: data.header,
        chooseUs: {
          description: data.chooseUs.description,
          images: data.chooseUs.images,
          title: data.chooseUs.title,
          facilitiesId: data.facilitiesId,
        },
        missions: data.missions,
        leaders: data.leaders,
        partners: data.partners,
        analytics: data.analytics,
      },
    };

    const { error, isSuccess } = await AboutUsService.updateAboutUs(payload);
    isSuccess && navigate("/about-us");
    error && handleError(error);
  };

  const handleUploadFile = async ({ target }) => {
    const files = target.files[0];
    let formData = new FormData();
    formData.append("file", files);
    let payload = formData;

    try {
      const { fileUrl, isSuccess, error } = await uploadFile(payload);
      isSuccess && setValue("featuredImage", fileUrl);
      error && handleError(error);
    } catch (error) {
      handleError(error.errors[0]);
    }
  };
  const handleMultipleUploadFile = async ({ target }) => {
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
      isSuccess && setImages(files);
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
    <Container className="aboutUs-form-container">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <AboutUsEdit
          data={aboutUsData}
          control={control}
          facilityData={facilityData}
          setFacilitiesId={setFacilitiesId}
          formType={formType}
          register={register}
          setValue={setValue}
          handleUploadFile={handleUploadFile}
        />
        <Button
          type="submit"
          className="aboutUs-form-button"
          variant="contained"
        >
          Submit
        </Button>
      </form>
      <Snackbar
        open={!!error}
        message={error}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      />
    </Container>
  );
};

export default AboutUsForm;
