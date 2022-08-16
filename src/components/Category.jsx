import { Fitbit } from "@mui/icons-material";
import {
  Box,
  Grid,
  Paper,
  Skeleton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory, getCategory } from "../services/slices/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategory);
  console.log(categories);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <Box py={5} sx={{ overflowX: "auto" }}>
      <Grid container>
        {Object.keys(categories).length === 0 ? (
          <Box>Loading...</Box>
        ) : (
          categories.map((category, index) => (
            <Grid item lg={5} md={4} sm={3} xs={2} key={index}>
              <Stack key={index} alignItems="center" mt={4}>
                <Fitbit />
                <Typography variant="p" textTransform="capitalize" mt="5">
                  {category}
                </Typography>
              </Stack>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Category;
