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

const Leaders = ({items, setValue, register, index}) => {
  const [leadersImage, setLeadersImage] = useState(items?.image)
  const [error, setError] = useState("")

  useEffect(() => {
    setValue(`leaders.${index}.image`,leadersImage)
  },[leadersImage])

  const handleUploadFile = async ({ target }) => {
 
    const files = target.files[0];   
    let formData= new FormData; 
    formData.append("file",files);    
    let payload = formData;
    
    try {
      const {fileUrl, isSuccess, error} = await uploadFile(payload)
      isSuccess && setLeadersImage(fileUrl)
      error && handleError(error);
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
            <TextField 
             label='Name'
             fullWidth
             defaultValue={items.name}
             size="small" 
             variant="standard"           
            {...register(`leaders.${index}.name`)}                       
            />
          </Grid>
       
          <Grid item xs={12} sm={12} md={12} sx={{marginY:'1rem'}}>
            <TextField
             label='Designation'
             fullWidth
             size="small" 
             defaultValue={items.designation}
             {...register(`leaders.${index}.designation`)}
             variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
                <div style={{height:'10rem', width:'10rem'}}><img src={leadersImage} width='100%' height='100%'></img></div>
            </Grid>
         
          <Grid item xs={6} sm={6} md={6} sx={{marginY:'1rem'}}>
            <TextField
             helperText='Image'
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

export default Leaders