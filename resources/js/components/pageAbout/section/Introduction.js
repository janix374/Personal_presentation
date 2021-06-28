import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    titlewhite: {
      color: "#fff"
    },
    redcolorname: {
        color: red[400],
    }
  });

const Introduction = (props) => {
    const classes = useStyles();
    return (
        <>
        <Typography variant="h4" gutterBottom className={(props.darkMode)?classes.titlewhite:""} >
            Character Introduction <img src="../storage/image/mask.png" alt="mask" />
        </Typography>
        <Typography variant="body1" component="p"><span>Name : </span> JSON Knight</Typography>
        <Typography variant="body1" component="p"><span>Alias : </span> JK</Typography>
        <Typography variant="body1" component="p">
            <span>Real name :  &#9656;</span> 
            <span className={classes.redcolorname}>TypeError: ‘undefined’ is not an object</span>
            </Typography>
        <Typography variant="body1" component="p" gutterBottom>
            <span>Bio :</span> 
            A long, long time ago, JK
            began to learn programming fundamentals. He first mastered the skills of html and css.
            Then he started learning the basics of javascript.
            But his career was tied to analyzing data, collecting data and turning that data 
            into human-readable form. And since he mastered this cool tool called excel, 
            he thought..."Maybe I can give the world more...".
            After a significant amount of time spent on udemy, youtube, stack overflow, 
            codecademy, google, reading books, JK was ready to become something completely new, 
            a some kind of "full stack web-superhero". 
            His main goal is to fight crime and weirdos over the web.
        </Typography>
        <Typography variant="body1" component="p" >
            Any similarity of this character with Jelena Karleusa or the creator of this page,
            is purely coincidental.
        </Typography> 
        </>
    )
}

export default Introduction
