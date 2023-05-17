import React, { useEffect, useState } from 'react'
import {
    Card,
    Container,
    Grid,
    Paper,
    Snackbar,
    TextField,
    Typography,
  } from "@mui/material";
import { Box } from '@mui/system';
import { uploadFile } from '../../../shared/services';
import Editor from '../../../shared/Editor';


const Missions = ({items, setValue, register, index}) => {
  const [missionsIcon, setMissionsIcon] = useState(items?.icon)
  const [error, setError] = useState("")

  useEffect(() => {
    setValue(`missions.${index}.image`,missionsIcon)
  },[missionsIcon])

  const handleUploadFile = async ({ target }) => {
 
    const files = target.files[0];   
    let formData= new FormData; 
    formData.append("file",files);    
    let payload = formData;
    
    try {
      const {fileUrl, isSuccess, error} = await uploadFile(payload)
      isSuccess && setMissionsIcon(fileUrl)
    error && handleError(error)
    }
    catch (error) {
      handleError(error.errors[0]);
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
          <Grid item xs={12} sm={12} md={12} sx={{marginY:'1rem'}}>
    
            <Typography style={{ fontWeight: "bold" }}>Description -</Typography>
            <Editor 
              content={items.description}
              setContent= {(data)=> setValue(`missions.${index}.description`, data)}
              placeholder={"Missons"}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
                <div style={{height:'10rem', width:'10rem'}}><img src={missionsIcon} width='100%' height='100%'></img></div>
            </Grid>
         
          <Grid item xs={6} sm={6} md={6} sx={{marginY:'1rem'}}>
            <TextField
             helperText='Icon'
             type='file'
             fullWidth
             variant="standard" 
             onChange={handleUploadFile}
            />
          </Grid> 
          <Snackbar
           open={!!error}
           message={error}
           anchorOrigin={{ horizontal: "right", vertical: "top" }}
          />
          
    </>
  )
}

export default Missions