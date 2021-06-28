import React from 'react';
import { Box, Avatar, Typography, Grid } from '@material-ui/core';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    homecomponentlarge: {
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
    homecomponentcentar: {
        textAlign: 'center',
    },
    homecomponentDark: {
        color: red[500]
    }
  }));

const Home = (props) => {
    const classes = useStyles();
    const darkMode = props.darkMode;

    //chack class for dark mode
    const classDarkMode = (darkMode) ? classes.homecomponentDark : '';

    // images for light and dark
  const avatar1 = "../storage/image/av1.jpg";
  const avatar2 = "../storage/image/av2.jpg";
  let avatar = ''
    if(darkMode != true) {
         avatar = avatar1;
    } else {
        avatar = avatar2;
    }
    return (
            <>
            <Box className={classes.homecomponentcentar} pt={5}>
                <Typography  variant="h5" className={classDarkMode}>
                    Superhero
                </Typography>
                <Grid container justify="center" >
                    <Avatar alt="Janko Kostic" src={avatar}  className={classes.homecomponentlarge} />
                </Grid>
                <Typography variant="h4" className={classDarkMode}>
                    JK
                </Typography>
                <Typography variant="h5" className={classDarkMode}>
                    <Typed strings={['web developer', 'frontend developer']} typeSpeed={60} backSpeed={60} loop/>
                </Typography>
            </Box>
            </>
    )
}

export default Home
