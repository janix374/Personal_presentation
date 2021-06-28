import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import WorkItem from './WorkItem';
import workData from '../../components/db/workData';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    workExperiance: {
        marginTop: 20,
        marginBottom: 20,
        fontFamily: [
            'Georgia',
            'serif',
          ].join(','),
    },

    titlewhite: {
      color: "#fff"
  },
  });

const WorkList = ({ darkMode }) => {
    const classes = useStyles();

    return (
        <>
        <Grid item xs={12} >
            <Typography variant="h3" component="p" className={darkMode ? classes.titlewhite : ''}>Work experience</Typography>
            <Typography variant="body1" component="p">This is the work experience of the web-site creator</Typography>
        </Grid>
          {
            workData.map((item) => {
            return (
                <Grid item xs={12} key={item.id} className={classes.workExperiance}>
                    <WorkItem workData={item} darkMode={darkMode} />
                </Grid>
            )
            })
          }
        </>
    )
}

export default WorkList
