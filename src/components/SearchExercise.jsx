import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import classes from "../styles/All.module.css";
import { fetchSearch } from "../services/slices/searchSlice";
import { useDispatch } from "react-redux";
import Category from "./Category";

const SearchExercise = () => {
  const [term, setTerm] = useState("");
  // const [searched, setSearched] = useState([]);
  const dispatch = useDispatch();
  // const search = useSelector();
  // console.log(search);

  const handleSearch = (e) => {
    e.preventDefault();
    if (term !== "") {
      const text = term.toLowerCase();
      console.log(text);
      dispatch(fetchSearch(text));
      console.log(term);
      setTerm("");
    }
  };

  return (
    <>
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
      <Box>
        <Category />
      </Box>
    </>
  );
};

export default SearchExercise;
