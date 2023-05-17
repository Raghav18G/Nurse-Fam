import React, { useEffect, useState } from 'react'
import {
    Grid,
    Snackbar,
    TextField,
  } from "@mui/material";
import { uploadFile } from '../../../shared/services';


const Analytics = ({items, setValue, register, index}) => {
  const [analyticsIcon, setAnalyticsIcon] = useState(items.icon)
  const [error, setError] = useState("")

  useEffect(() => {
   setValue(`analytics.${index}.icon`,analyticsIcon)
  },[analyticsIcon])

  const handleUploadFile = async ({ target }) => {
 
    const files = target.files[0];   
    let formData= new FormData; 
    formData.append("file",files);    
    let payload = formData;
    
    try {
      const {fileUrl, isSuccess, error} = await uploadFile(payload)
      isSuccess && setAnalyticsIcon(fileUrl)
      
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
             {...register(`analytics.${index}.name`)}                       
            />
          </Grid>
       
          <Grid item xs={12} sm={12} md={12} sx={{marginY:'1rem'}}>
            <TextField
             label='Count'
             fullWidth
             size="small" 
             defaultValue={items.count}
             variant="standard"
             {...register(`analytics.${index}.count`)} 
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
                <div style={{height:'10rem', width:'10rem'}}><img src={analyticsIcon} width='100%' height='100%'></img></div>
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

export default Analytics