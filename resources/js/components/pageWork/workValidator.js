import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const workValidator = (Component) => {
   const NewComponent = ({ show, messagePassword, darkMode }) =>{
        if(show) return (<Component darkMode={darkMode}/>);
        return (
           <Grid container justify="center" >
              <Typography variant="body1" component="p" >{messagePassword}</Typography>
           </Grid>
        )
   }
   return NewComponent;
}

export default workValidator;
