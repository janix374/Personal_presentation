import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    titlewhite: {
    color: "#fff"
    },
  }));

const WorkLink = (props) => {
   const classes=useStyles();
    return (
        <Grid item xs={12} container>
            <Grid item xs={12}>
            <Typography variant="h4" component="p" gutterBottom className={(props.darkMode)?classes.titlewhite:""}>
                Work experience
            </Typography>
            <Typography variant="body1" component="p">
                For more information on work experience go to the link -  
                <span>
                <Link to="/work">
                    Work
                </Link>
                </span>
            </Typography>
            </Grid>
        </Grid>
    )
}

export default WorkLink
