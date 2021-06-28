import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import Navbar from './navbar/Navbar';
import Home from './pageHome/Home';
import About from './pageAbout/About';
import Portfolio from './pagePortfolio/Portfolio';
import NoPage from './pageNoPage/NoPage';
import { darkTheme, lightTheme } from './theme/theme';
import { makeStyles } from '@material-ui/core/styles';
import Work from './pageWork/Work';

const useStyles = makeStyles((theme) => ({
    portfolioCharacterSection: {
        marginTop: 100,
    }
  }));

const AppComponent = () => {
    const [darkMode, setDarkMode] = useState(false);
    const classes = useStyles();

    const handleTheme = () => {
        setDarkMode(!darkMode)
    }

    return (  
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
             <Container maxWidth={false} disableGutters >
                <Router>
                    <Navbar handleTheme={handleTheme} darkMode={darkMode}/>
                        <Grid className={classes.portfolioCharacterSection}>
                        <Switch>
                            <Route path="/" exact component={() => <Home darkMode={darkMode}/>} />
                            <Route path="/about" exact component={() => <About darkMode={darkMode}/>} />
                            <Route path="/portfolio" exact component={() => <Portfolio darkMode={darkMode}/>} />
                            <Route path="/work" exact component={() => <Work darkMode={darkMode}/>} />
                            <Route component={NoPage} />
                        </Switch>
                        </Grid>
                </Router>
            </Container>
        </ThemeProvider>
    );
}

export default AppComponent;

