import React from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import moment from 'moment';

const useStyles = makeStyles({
    jobTitle: {
      color: red[400],
    },
    timeClass: {
        opacity: 0.5
    },
    titlewhite: {
        color: "#fff"
    },
  });

const WorkItem = ({ workData, darkMode }) => {
    const classes = useStyles();
    return (
        <>
           <Typography variant="h5" component="p" className={darkMode ? classes.titlewhite : ''}>{workData.company}</Typography>
           <Typography variant="body1" component="p" className={classes.timeClass}>[ {moment(`${workData.starDate}`).format('MMMM YYYY')} - {moment(`${workData.endDate}`).format('MMMM YYYY')} ]</Typography>
           <Typography variant="body1" component="p" className={classes.jobTitle}>{workData.jobtitle}</Typography>
           <Typography variant="body1" component="p">{workData.projectdescription}</Typography>
            <List>
            {
                workData.jobdescription.map((job,index) => {
                    return (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <FiberManualRecordTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary={job} />
                        </ListItem>
                    )
                })
            }
           </List>
        </>
    )
}

export default WorkItem
