import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import classes from "../styles/All.module.css";

const HeroBanner = () => {
  return (
    <Box>
      <Grid container className={classes.heroGridContainer}>
        <Grid item lg={3}>
          <Typography variant="h4" color="error">
            Sefwa Zone
          </Typography>
          <Typography variant="h5">
            Sweat, Smile <br />& Repeat
          </Typography>
          <Typography variant="subtitle1" color="GrayText">
            Check out the most effective exercise
          </Typography>
          <Button variant="contained" color="error">
            Explore Exercise
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBanner;
