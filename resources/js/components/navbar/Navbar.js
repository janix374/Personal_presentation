import React, { useState, useRef, useEffect } from 'react';
import { Toolbar, AppBar, IconButton, Typography, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import TemporaryDrawer from './TemporaryDrawer';
import { makeStyles } from '@material-ui/core/styles';
import SwitchButton from '../common/SwitchButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    titlenavbar: {
      flex: 1,
    },
    appBarTrasparent: {
      background: theme.palette.background.default,
      opacity: 1,
    },
    appBarSolid: {
      background: theme.palette.background.default,
      opacity: 0.7,
    },
    icontext: {
      fontSize: 14
    }
  }));


const Navbar = (props) => {
    const classes = useStyles();
    const [state, setState] = useState({ left: false });
    const [navBackground, setNavBackground] = useState('appBarTrasparent');

    const navRef = useRef();
    navRef.current = navBackground;

    useEffect(() => {
      const handlleScroll = () => {
        const show = window.scrollY > 100
        if(show) {
          setNavBackground('appBarSolid');
        } else {
          setNavBackground('appBarTrasparent');
        }
      }
      document.addEventListener('scroll', handlleScroll);
      return () => {
        document.addEventListener('scroll', handlleScroll);
      }
    },[]);

    const toggleDrawer = (side, open) => () => {
        setState({
          [side]: open,
        });
      };

    return (
        <>
        <AppBar 
          position="fixed" 
          className={classes[navRef.current]}
        >
        <Toolbar>
            <IconButton edge="start" onClick={toggleDrawer('left', true)}>
                <MenuIcon />
            </IconButton>
            <IconButton >
              <Typography className={classes.icontext} >
                &#169;Janko Kostic
              </Typography>
            </IconButton>
            <IconButton >
              <Link rel="noopener noreferrer" href="https://github.com/janix374" target="_blank" color="inherit">
                  <GitHubIcon/>
              </Link>
            </IconButton >
            <IconButton>
              <Link rel="noopener noreferrer" href="https://www.linkedin.com/feed/" target="_blank" color="inherit">
                  <LinkedInIcon/>
              </Link>
            </IconButton>
            <Typography variant="h6" className={classes.titlenavbar} >
                
            </Typography>
            <SwitchButton handleInputFunction={props.handleTheme} inputParameter={props.darkMode}/>
        </Toolbar>
        </AppBar>
        <TemporaryDrawer toggleDrawer={toggleDrawer} leftSide={state.left}/>
        </>
    )
}

export default Navbar
