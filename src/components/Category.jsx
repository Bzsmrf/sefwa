import { Box, Paper, Stack, styled } from "@mui/material";
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
    <Box>
      <Stack direction="row" spacing={2}>
        {Object.keys(categories).length === 0 ? (
          <Box>Loading...</Box>
        ) : (
          categories.map((category, index) => (
            <Paper
              key={index}
              sx={{
                width: "128px",
                height: "128px",
              }}
            >
              {category}
            </Paper>
          ))
        )}
      </Stack>
    </Box>
  );
};

export default Category;
