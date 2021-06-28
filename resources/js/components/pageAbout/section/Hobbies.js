import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import shuffleItemData from '../../db/itemData';

const useStyles = makeStyles({
    imagehobbies: {
        textAlign: 'center'
    },
    titlewhite: {
        color: "#fff"
    },
  });

const Hobbies = (props) => {
    const classes = useStyles();
   
    return (
        <Grid item xs={12} container> 
        <Grid item xs={12}>
            <Typography variant="h4" gutterBottom className={(props.darkMode)?classes.titlewhite:""}>
                Character Hobbies & Interests <img src="../storage/image/watch.png" alt="watch" />
            </Typography>
        </Grid>
        <Grid item xs={12} container>
            {shuffleItemData.map(item => {
                return (
                    <Grid item xs={6} md={3} key={item.title}>
                        <Paper className={classes.imagehobbies}><img src={`../storage/image/${item.img}`}  alt={item.title} /> {item.title}</Paper>
                    </Grid>
                )
            })}
        </Grid> 
        </Grid>
    )
}

export default Hobbies
