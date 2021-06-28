import React from 'react';
import { Grid, Typography, Link, Box, Avatar, Menu, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grendmabox: {
        textAlign: "center",
    },
    grendma: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
    grendmamenu: {
        opacity: 0.9,
    },
    titlewhite: {
    color: "#fff"
    },
  }));

const Personal = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const darkMode = props.darkMode;
    const avatargrendma3 = "../storage/image/av3.jpg";
    const avatargrendma4 = "../storage/image/av4.jpg";
  let avatargrendma = ''
    if(darkMode != true) {
        avatargrendma = avatargrendma3;
    } else {
        avatargrendma = avatargrendma4;
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
    setAnchorEl(null);
    };
    

    return (
        <Grid item xs={12} >
            <Typography variant="h4" gutterBottom className={(props.darkMode)?classes.titlewhite:""}>
                Character Personal Skills <img src="../storage/image/eye.png" alt="eye" />
            </Typography>
            <Typography variant="body1" component="p" >
                JK graduated from Faculty of Transport and Traffic Engineering. Where he studied 
                probability and statistics, logistics, operational research, mathematics. 
                He studied things like Linear Algebra, Matrix, Gaussian Matrix Models,
                One-Dimensional Change of Variable, Multidimensional Change of Variable,
                Linear Programming models, Decision Theory, Theory of Games or Competitive Strategies
                and other mostly boring stuff.
            </Typography>
            <Typography variant="body1" component="p">
                And by now you are probably wondering, what kind of super power does he have,
                what he does with them...Does he fly? Does he get high and hacks NASA site?
                He’s like one of those superheroes -
                <Link href="https://www.youtube.com/watch?v=OIPVI6xhSu0&ab_channel=DjViOd" >
                    Kick-Ass 
                </Link>
                . He is a kind of inspiration, almost like a guru. If you are passionate about something and if 
                you have the right tools to achieve your goal, anything is possible.
            </Typography>
            <Typography variant="body1" component="p">
                Loyal, responsible, capable, totally has no sense of humor. 
                He lives with his cool grandmother.   
            </Typography>
            <Box className={classes.grendmabox} >
                <Grid container justify="center">
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <Avatar alt="JK" src={avatargrendma}  className={classes.grendma}/>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        className={classes.grendmamenu}
                    >
                        {darkMode ? (
                        <MenuItem onClick={handleClose}>Du vælger mørk tilstand</MenuItem>
                        )
                        : 
                        (
                        <MenuItem onClick={handleClose}>Du vælger lystilstand</MenuItem>
                        )    
                        }  
                    </Menu> 
                </Grid>
                <Typography variant="body1" component="p">
                     Grandmother Ulrikke from Denmark
                </Typography>
            </Box>
        </Grid>
    )
}

export default Personal
