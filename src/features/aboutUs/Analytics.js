import React from 'react'
import {
    Grid,
    TextField,
    Typography,
  } from "@mui/material";


const Analytics = ({items}) => {
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
             label='Count'
             fullWidth
             size="small" 
             value={items.count}
             variant="standard"
             disabled
         
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <Typography>Icon</Typography>
                <div style={{height:'10rem', width:'10rem'}}><img src={items.icon} width='100%' height='100%'></img></div>
            </Grid>
         
          {/* <Grid item xs={6} sm={6} md={6} sx={{marginY:'1rem'}}>
            <TextField
             helperText='Icon'
             type='file'
             fullWidth
            //  defaultValue={items.icon}
          //    size="small" 
             variant="standard" 
   
            />
          </Grid>  */}
          
    </>
  )
}

export default Analytics