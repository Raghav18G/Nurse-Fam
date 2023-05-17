import React, { useEffect, useState } from 'react'
import {

    Grid,
 
    TextField,
    Typography,
 
  } from "@mui/material";


const Facility = ({items}) => {

  const[item, setItem] = useState({})

  return (
    <>
    <Grid item xs={12} sm={12} md={12} sx={{marginY:'1rem'}}>
            <TextField 
             label='Title'
             fullWidth
             name='title'
             value={items?.title}
             size="small" 
             variant="standard" 
             disabled
            //  onChange={(e) => handleChange(e)}                          
            />
          </Grid>
       
          <Grid item xs={12} sm={12} md={12} sx={{marginY:'1rem'}}>
            <TextField
             label='Description'
             fullWidth
             size="small" 
             name='description'
             value={items?.description}
             variant="standard"
             multiline
             rows={3}       
             disabled                  
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <Typography>Icon</Typography>
                <div style={{height:'10rem', width:'10rem'}}><img src={items?.icon} width='100%' height='100%'></img></div>
            </Grid>
         
          {/* <Grid item xs={6} sm={6} md={6} sx={{marginY:'1rem'}}>
            <TextField
             helperText='Icon'
             type='file'
             fullWidth
             name='icon'

            //  defaultValue={item.items.icon}
          //    size="small" 
             variant="standard" 
             onChange={handleUploadFile}
            />
          </Grid>  */}
          
    </>
  )
}

export default Facility