import React, { useState } from 'react';
import { Typography, Grid, List, ListItem, Collapse, ListItemIcon, ListItemText } from '@material-ui/core';
import ExpandLessTwoToneIcon from '@material-ui/icons/ExpandLessTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    titlewhite: {
      color: "#fff"
    },
  });

const Skills = (props) => {
    const classes = useStyles();
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);
    const [open4, setOpen4] = useState(true);
    const [open5, setOpen5] = useState(true);
    const [open6, setOpen6] = useState(true);

    const handleClick1 = () => {
        setOpen1(!open1);
    }

    const handleClick2 = () => {
        setOpen2(!open2);
    }

    const handleClick3 = () => {
        setOpen3(!open3);
    }

    const handleClick4 = () => {
        setOpen4(!open4);
    }

    const handleClick5 = () => {
        setOpen5(!open5);
    }

    const handleClick6 = () => {
        setOpen6(!open6);
    }
   
    return (
        <>
        <Grid item xs={12} >
            <Typography variant="h4" gutterBottom className={(props.darkMode)?classes.titlewhite:""}>
                Character Technical Skills <img src="../storage/image/shield.png" alt="shield" />
            </Typography>
        </Grid>
        <Grid 
            item xs={12} 
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            spacing={5}
        >
            <Grid item xs={12} sm={6}>
                <List>
                    <ListItem button onClick={handleClick1}>
                        <ListItemText primary="Programming Languages" />
                         {open1 ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />}
                    </ListItem>
                    <Collapse in={open1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                javascript (React, redux, jquery, angular-basic)
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                php (Laravel, wordpress)
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                sql
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                visual basic
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={12} sm={6}>
                <List>
                    <ListItem button onClick={handleClick6}>
                        <ListItemText primary="Markup language and Stylesheet" />
                         {open6 ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />}
                    </ListItem>
                    <Collapse in={open6} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                               HTML, XML
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                CSS, SASS
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                Material ui - framework
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                Bootstrap - framework
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={12} sm={6}>
                <List>
                    <ListItem button onClick={handleClick2}>
                        <ListItemText primary="Databases" />
                         {open2 ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />}
                    </ListItem>
                    <Collapse in={open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                MySQL
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                MongoDB
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                Firestore
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={12} sm={6}>
                <List>
                    <ListItem button onClick={handleClick3}>
                        <ListItemText primary="Tools" />
                         {open3 ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />}
                    </ListItem>
                    <Collapse in={open3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                git
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                Node JS
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                webpack(JavaScript module bundler)
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                Adobe Photoshop
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                MS Office word
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                MS Office excel – formulas, pivot tables, macro
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                MS Office access
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={12} sm={6}>
                <List>
                    <ListItem button onClick={handleClick4}>
                        <ListItemText primary="Package Manager" />
                         {open4 ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />}
                    </ListItem>
                    <Collapse in={open4} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                npm
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                yarn
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={12} sm={6}>
                <List>
                    <ListItem button onClick={handleClick5}>
                        <ListItemText primary="Project Management" />
                         {open5 ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />}
                    </ListItem>
                    <Collapse in={open5} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                JIRA
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                Trello
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                                </ListItemIcon>
                                MS Project
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={12} sm={6}>
                
            </Grid>     
        </Grid>
        </>
    )
}

export default Skills
