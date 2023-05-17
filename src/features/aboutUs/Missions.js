import React from 'react'
import {
    Grid,
    Typography,
  } from "@mui/material";
import Editor from '../../shared/Editor';



const Missions = ({items}) => {

  return (
    <>       
          <Grid item xs={12} sm={12} md={12} sx={{marginY:'1rem'}}>
             <Typography style={{ fontWeight: "bold" }}>Description -</Typography>
            <Editor 
              content={items.description}
              setContent= {()=> {}}
              placeholder={"Missons"}
              />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
          <Typography>Icon</Typography>
                <div style={{height:'10rem', width:'10rem'}}><img src={items.icon} width='100%' height='100%'></img></div>
            </Grid>          
    </>
  )
}

export default Missions