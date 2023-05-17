import React from 'react'
import {
    Card,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
import { Box } from '@mui/system';

const Leaders = ({items}) => {
  return (
    <>
    <Grid item xs={12} sm={12} md={12} sx={{marginY:'1rem'}}>
            <TextField 
             label='Name'
             fullWidth
             value={items.name}
             size="small" 
             variant="standard"   
             disabled                      
            />
          </Grid>
       
          <Grid item xs={12} sm={12} md={12} sx={{marginY:'1rem'}}>
            <TextField
             label='Designation'
             fullWidth
             size="small" 
             value={items.designation}       
             variant="standard"   
             disabled
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <Typography>Image</Typography>
                <div style={{height:'10rem', width:'10rem'}}><img src={items.image} width='100%' height='100%'></img></div>
            </Grid>
         
     
          
    </>
  )
}

export default Leaders