import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    linkstyle: {
      textDecoration: 'none',
      color: 'inherit'
    }
  });

const TemporaryDrawer = (props) => {
    const classes = useStyles();
      const sideList = (
        <div className={classes.list}>
          <List >
              <Link to="/" className={classes.linkstyle}>
                <ListItem button >
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>
              <Link to="/about" className={classes.linkstyle}>
                <ListItem button >
                <ListItemIcon><InfoIcon /></ListItemIcon>
                  <ListItemText primary={"About"} />
                </ListItem>
              </Link>
              <Link to="/portfolio"  className={classes.linkstyle}>
                <ListItem button>
                <ListItemIcon><BuildIcon /></ListItemIcon>
                  <ListItemText primary={"Portfolio"} />
                </ListItem>
              </Link>
          </List>
        </div>
      );

      const { toggleDrawer, leftSide } = props;
    return (
        <div>
          <Drawer 
            open={leftSide}
            onClose={toggleDrawer('left', false)}
            >
            <div
            tabIndex={0}
            role="button"
            onClick={toggleDrawer('left', false)}
            onKeyDown={toggleDrawer('left', false)}
          >
            {sideList}
          </div>
          </Drawer>

        </div>
    )
}

export default TemporaryDrawer
