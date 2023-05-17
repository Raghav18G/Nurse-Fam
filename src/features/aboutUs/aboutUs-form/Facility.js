import React, { useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";
import { Controller } from "react-hook-form";

const Facility = ({
  facility,
  setValue,
  setFacility,
  facilityData,
  setFacilityData,
  setFacilityIds,
  index,
  register,
  control,
}) => {
  const [error, setError] = useState("");

  const handleError = (error) => {
    setError(error);
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  const fIds = [];
  for (let obj of facility) fIds.push(obj._id);
  return (
    <>
      {/* <Grid item xs={12} sm={12} md={12} sx={{marginY:'1rem'}}>
            <TextField 
             label='Select Facilities'
             fullWidth
             name='facilities'
             select
        
             defaultValue={items?.title}
             size="small" 
             variant="standard" 
             {...register(`chooseUs.facilitiesId.${index}.facilities`)}
            //  onChange={(e) => handleChange(e)}                          
            />
          </Grid> */}
      <Grid item xs={12} sm={12} md={12} sx={{ marginY: "1rem" }}>
        <FormControl variant="outlined" fullWidth {...register("facilitiesId")}>
          <InputLabel id="facilitiesId">Select Facilities</InputLabel>
          <Controller
            name="facilitiesId"
            defaultValue={[]}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                multiple
                id="facilitiesId"
                label="Select Facilities"
                // defaultvalue={facility.map((item) => item.title)}

                className="dropDown"
              >
                {facilityData.map((option) => (
                  <MenuItem key={option._id} value={option._id}>
                    {option.title}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </Grid>

      {/* <Grid item xs={12} sm={12} md={12} sx={{marginY:'1rem'}}>
            <TextField
             label='Description'
             fullWidth
             size="small" 
             name='description'
             defaultValue={items?.description}
             variant="standard"
             multiline
             rows={3} 
             {...register(`chooseUs.facilitiesId.${index}.description`)}
            //  onChange={(e) => handleChange(e)}                          
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
                <div style={{height:'10rem', width:'10rem'}}><img src={facilityIcon} width='100%' height='100%'></img></div>
            </Grid>
         
          <Grid item xs={6} sm={6} md={6} sx={{marginY:'1rem'}}>
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
      <Snackbar
        open={!!error}
        message={error}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      />
    </>
  );
};

export default Facility;
