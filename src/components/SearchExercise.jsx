import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import classes from "../styles/All.module.css";

const SearchExercise = () => {
  return (
    <Box className={classes.searchExercise}>
      <Grid container justifyContent="center">
        <Grid item lg={3}>
          <Typography variant="h4" textAlign="center" mb={5}>
            Awesome Exercise You
            <br />
            Should Know
          </Typography>
          <TextField
            placeholder="Search exercise..."
            className={classes.textField}
          />
          <Button variant="contained" color="error">
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchExercise;
