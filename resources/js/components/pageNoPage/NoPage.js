import React from 'react';
import { Box, Avatar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
    boxcentar: {
        textAlign: 'center',
    }
  }));

const NoPage = () => {
    const classes = useStyles();
    // images for light and dark
  const avatar1 = "../storage/image/av1.jpg";
    return (
        <>
        <Box className={classes.boxcentar} pt={5}>
            <Grid container justify="center">
                <Avatar alt="Janko Kostic" src={avatar1}  className={classes.large} />
            </Grid>
            <Typography variant="h5">
                page not found
            </Typography>
        </Box>
        </>
    )
}

export default NoPage
