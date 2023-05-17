import { CleaningServices } from "@mui/icons-material";
import {
    Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, padding } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../../shared/Loader";
import { storeAboutUs } from "./aboutUs.slice";
// import { fetchAboutUs } from "./aboutUs.slice";
import Analytics from "./Analytics";
import Facility from "./Facility";
import Leaders from "./Leaders";
import Missions from "./Missions";
import { AboutUsService } from "./service";

const AboutUs = () => {

      
    // const {data} = useSelector((state) => state.aboutUS)

    const[aboutUsDetails, setAboutUsDetails] = useState();
    const [facilityData, setFacilityData] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [params] = useSearchParams();
    const formType = params.get("formType");

    const fetchData = async () => {
        try {
            const { data, count, error, isSuccess } =
          await AboutUsService.fetchAboutUs();
          dispatch(storeAboutUs(data));
          isSuccess && setAboutUsDetails(data);
        } catch (error) {
        }
      };
    

      useEffect(()=>{
        fetchData();
    },[])  

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
        <Button variant='contained' onClick={() => navigate("/about-us-form?formType=edit", {
                state: {
                  data: aboutUsDetails,
                  prevPath: `/about-us`,
                },
              })}>Edit</Button>
    </Grid>

        <Box component={Paper} elevation={8} p={2} marginTop={4} marginBottom={2}>
            <Typography sx={{ fontSize: "1.1rem", marginY:'0.5rem' }}>Headers</Typography>
          <Grid container spacing={2}>
          
            <Grid item xs={6} sm={6} md={6}>
              <TextField 
               helperText='Title 1'
               fullWidth
               value={aboutUsDetails?.header.title1}
               size="small" 
               variant="standard"   
               disabled                      
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
               helperText='Title 2'
               fullWidth
               size="small" 
               variant="standard" 
               value={aboutUsDetails?.header.title2}
               disabled
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
               helperText='Sub Title'
               fullWidth
               size="small" 
               variant="standard" 
               value={aboutUsDetails?.header.subTitle}
               disabled
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
               helperText='Description'
               fullWidth
               size="small" 
               variant="standard"
               multiline
               rows={3} 
               value={aboutUsDetails?.header.description}
               disabled
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography>Featured Image</Typography>
                <div style={{height:'10rem', width:'10rem'}}><img src={aboutUsDetails?.header.featuredImage} width='100%' height='100%'></img></div>
            </Grid>
         
            <Grid item xs={12} sm={12} md={12}>
            <Typography>Images</Typography>
                <Grid container style={{display: 'flex', justifyContent:'space-between'}}>
                    {
                        aboutUsDetails?.header.images.map((item) => (
                            <img src={item}  height='100px' width='100px'>
                            </img>
                        ))
                    }                  
                    </Grid>
            </Grid>            
          </Grid>
        </Box>

        <Box component={Paper} elevation={8} p={2} marginTop={4} marginBottom={2}>
            <Typography sx={{ fontSize: "1.1rem", marginY:'0.5rem' }}>Choose Us</Typography>
          <Grid container spacing={2}>
          
            <Grid item xs={12} sm={12} md={12}>
              <TextField 
               helperText='Title'
               fullWidth
               size="small" 
               variant="standard" 
               value={aboutUsDetails?.chooseUs.title} 
               disabled                     
              />
            </Grid>
         
            <Grid item xs={12} sm={12} md={12}>
              <TextField
               helperText='Description'
               fullWidth
               size="small" 
               variant="standard"
               multiline
               rows={3} 
               value={aboutUsDetails?.chooseUs.description}
               disabled
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
            <Typography>Image</Typography>
            <div style={{display: 'flex', justifyContent:'space-around'}}>
                    {
                        aboutUsDetails?.chooseUs.images.map((item) => (
                            <img src={item} height='100px' width='100px'>
                            </img>
                        ))
                    }                  
                    </div>
                    </Grid>            
          </Grid>
        </Box>

        <Box component={Paper} elevation={8} p={4} marginTop={4} marginBottom={2}>
            <Typography sx={{ fontSize: "1.1rem", marginY:'0.5rem' }}>Facilities</Typography>
            <Grid container spacing={2}>
                
          {              
              aboutUsDetails?.chooseUs.facilitiesId.map((item, index) => (
                <Container sx={{border:'1px solid grey', p:'0.2rem', marginY:'0.5rem'}}>
             <Facility items={item} />
             </Container>

              ))}
            </Grid>
        </Box>

        <Box component={Paper} elevation={8} p={4} marginTop={4} marginBottom={2}>
            <Typography sx={{ fontSize: "1.1rem", marginY:'0.5rem' }}>Missions</Typography>
          <Grid container spacing={2}>
         
          {              
              aboutUsDetails?.missions.map((item, index) => (
                <Container sx={{border:'1px solid grey', p:'0.2rem', marginY:'0.5rem'}}>
             <Missions items={item}/>
             </Container>

              ))}
            
          </Grid>
        </Box>

        <Box component={Paper} elevation={8} p={4} marginTop={4} marginBottom={2}>
            <Typography sx={{ fontSize: "1.1rem", marginY:'0.5rem' }}>Leaders</Typography>
          <Grid container spacing={2}>
         
          {              
              aboutUsDetails?.leaders.map((item, index) => (
                <Container sx={{border:'1px solid grey', p:'0.2rem', marginY:'0.5rem'}}>
             <Leaders  items={item}/>
             </Container>

              ))}
            
          </Grid>
        </Box>

        <Box component={Paper} elevation={8} p={4} marginTop={4} marginBottom={2}>
        <Typography>Partners</Typography>
          <Container sx={{border:'1px solid grey', p:'0.2rem', marginY:'0.5rem'}}>
         
                <Grid container style={{display: 'flex', justifyContent:'space-between'}}>
                    {
                        aboutUsDetails?.partners.map((item) => (
                          <Grid item>
                            <img src={item}  height='100px' width='200px'>
                            </img>
                            </Grid>
                        ))
                    }                  
                    </Grid>
          </Container>
        </Box>

        <Box component={Paper} elevation={8} p={4} marginTop={4} marginBottom={2}>
            <Typography sx={{ fontSize: "1.1rem", marginY:'0.5rem' }}>Analytics</Typography>
          <Grid container spacing={2}>
         
          {              
              aboutUsDetails?.analytics.map((item, index) => (
                <Container sx={{border:'1px solid grey', p:'0.2rem', marginY:'0.5rem'}}>
             <Analytics  items={item}/>
             </Container>

              ))}
            
          </Grid>
        </Box>

      </Container>
    </>
  );
};

export default AboutUs;
