import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Skills from './section/Skills';
import Introduction from './section/Introduction';
import Personal from './section/Personal';
import Hobbies from './section/Hobbies';
import WorkLink from './section/WorkLink';

const useStyles = makeStyles({
    aboutCaracterSection: {
        marginTop: 20,
        marginBottom: 20
    }
  });

const About = (props) => {
    const darkMode = props.darkMode;
    const classes = useStyles();
    return (
        <>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="baseline"
            >
                <Grid item xs={10} className={classes.aboutCaracterSection}>
                    <Introduction darkMode={darkMode}/>
                </Grid>
                <Grid item xs={10} className={classes.aboutCaracterSection} container>  
                    <Skills darkMode={darkMode}/> 
                </Grid>
                <Grid item xs={10} className={classes.aboutCaracterSection} container>  
                    <Personal  darkMode={darkMode}/> 
                </Grid>
                <Grid item xs={10} className={classes.aboutCaracterSection} container>  
                    <Hobbies  darkMode={darkMode}/> 
                </Grid>
                <Grid item xs={10} className={classes.aboutCaracterSection} container>  
                    <WorkLink darkMode={darkMode}/> 
                </Grid>
            </Grid>
        </>
    )
}

export default About
