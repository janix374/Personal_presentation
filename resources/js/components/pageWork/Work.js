import React, { useState, useEffect } from 'react';
import { Typography, Grid, TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import workValidator from './workValidator';
import WorkList from './WorkList';

const Works = workValidator(WorkList);

const useStyles = makeStyles({
    workClass: {
        marginTop: 100,
        marginBottom: 50,
    },
    workClassCentar: {
        marginTop: 50,
        marginBottom: 50,
        textAlign: "center"
    }
  });

const Work = (props) => {
    const classes = useStyles();
    const [validationNumber, setValidationNumber] = useState('');
    const [showComponent, setShowComponent] = useState(false);
    const [messagePassword, setMessagePassword] = useState('')
    const barCodeNumber = '18915003';
    const barcodejpg = "../storage/image/barcode.jpg";

    const checkValidationNumber = () => {
        if(validationNumber==barCodeNumber){
            setShowComponent(true);
        } else {
            setMessagePassword('Enter correct password');
        }
    }

    const handleOnChange = (e) => {
        let number = e.target.value;
        setValidationNumber(number);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        checkValidationNumber();
        setValidationNumber('');  
    }

    return (
        <Grid 
            container
            direction="row"
            justify="center"
            alignItems="baseline"
        >
            <Grid item xs={10} container justify="center">
                <Grid item xs={12}>
                <Typography variant="body1" component="p">
                To view this page you need to enter password. Maybe QR & Barcode Scanner will help you.
                </Typography>
                </Grid>
                <Grid item xs={12} className={classes.workClassCentar}>
                    <img alt="barcode" src={barcodejpg}/>
                </Grid>
            </Grid>
            <Grid item xs={10} container justify="center">
                <form  onSubmit={onSubmit}>
                    <TextField 
                        id="standard-basic" 
                        label="Enter number" 
                        name="number" 
                        disabled={showComponent}
                        onChange={handleOnChange}
                        value={validationNumber}
                    />
                    <Button variant="outlined" color="primary" type="submit" disabled={showComponent}>
                        Submite
                    </Button>
                </form>
            </Grid>
            <Grid item xs={10} container className={classes.workClass}>
                <Works show={showComponent} messagePassword={messagePassword} darkMode={props.darkMode}/>
            </Grid>
        </Grid>
    )
}

export default Work;
