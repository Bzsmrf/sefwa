import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import classes from "../styles/All.module.css";
import { fetchSearch } from "../services/slices/searchSlice";
import { useDispatch } from "react-redux";

const SearchExercise = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (term !== "") {
      dispatch(fetchSearch(term.toLowerCase()));
      console.log(term);
      setTerm("");
    }
  };

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
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <Button variant="contained" color="error" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchExercise;
