import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    CardHeader,
    Link,
    Paper,
    Avatar,
    IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkIcon from "@material-ui/icons/Link";
import CodeIcon from "@material-ui/icons/Code";

const API = 'http://jankokostic.com/getdata';

// const API = "http://localhost:8000/getdata";

const useStyles = makeStyles(theme => ({
    portfolioCharacterSection: {
        marginTop: 20,
        marginBottom: 20
    },
    portfolioCentarText: {
        textAlign: "center"
    },
    portfolioSentarButton: {
        justifyContent: "center"
    },
    shadow: {
        "&:hover": {
            boxShadow: theme.shadows[8]
        }
    },
    titlewhite: {
        color: "#fff"
    },
    media: {
        height: 200
    }
}));

const Portfolio = props => {
    const classes = useStyles();
    const [projects, setProjects] = useState({ projects: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await axios.get(API);
                setProjects({ projects: result.data });
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
            }
        };
        fetchData();
    }, []);

    return (
        <Grid container direction="row" justify="center" alignItems="baseline">
            <Grid item xs={10} container>
                <Typography
                    variant="h4"
                    gutterBottom
                    className={props.darkMode ? classes.titlewhite : ""}
                >
                    Portfolio{" "}
                    <img src="../storage/image/comic.png" alt="comic" />
                </Typography>
                <Typography variant="body1" component="p">
                    I'm sorry, but I'm going to take this opportunity to turn
                    away from the story of our superhero, and use it in my own
                    presentation. To create this site, I used laravel framework,
                    react framework, material ui, MySQL database, axios. Below
                    this text you will find more of my projects, and their
                    descriptions. These are mostly small projects with basic
                    steps of programing, but more complex projects will be
                    updated very soon.
                </Typography>
            </Grid>
            <Grid
                item
                xs={10}
                container
                spacing={3}
                className={classes.portfolioCharacterSection}
            >
                {isError && (
                    <Typography variant="h2" component="h2" color="error">
                        Something went wrong ... other projects cannot be
                        loaded, please try again later
                    </Typography>
                )}

                {isLoading ? (
                    <Typography variant="h2" component="h2">
                        Loading ...
                    </Typography>
                ) : (
                    projects.projects.map(project => {
                        return (
                            <Grid item xs={12} md={6} key={project.id}>
                                <Paper elevation={2}>
                                    <Card
                                        variant="outlined"
                                        className={classes.shadow}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="recipe">
                                                    JK
                                                </Avatar>
                                            }
                                            className={
                                                classes.portfolioCentarText
                                            }
                                            title={project.title}
                                        />
                                        <CardContent>
                                            <Typography
                                                variant="body1"
                                                component="p"
                                            >
                                                {project.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions
                                            className={
                                                classes.portfolioSentarButton
                                            }
                                        >
                                            <Link
                                                rel="noopener noreferrer"
                                                href={project.link}
                                                target="_blank"
                                                title="Link"
                                            >
                                                <IconButton>
                                                    <LinkIcon />
                                                </IconButton>
                                            </Link>
                                            {project.nocode == 1 ? (
                                                <IconButton></IconButton>
                                            ) : (
                                                <Link
                                                    rel="noopener noreferrer"
                                                    href={project.code}
                                                    target="_blank"
                                                    title="Code"
                                                >
                                                    <IconButton>
                                                        <CodeIcon />
                                                    </IconButton>
                                                </Link>
                                            )}
                                        </CardActions>
                                    </Card>
                                </Paper>
                            </Grid>
                        );
                    })
                )}
            </Grid>
        </Grid>
    );
};

export default Portfolio;
