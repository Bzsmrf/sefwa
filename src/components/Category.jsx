import { Fitbit } from "@mui/icons-material";
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
    <Box py={5}>
      <Stack direction="row" spacing={2}>
        {Object.keys(categories).length === 0 ? (
          <Box>Loading...</Box>
        ) : (
          categories.map((category, index) => (
            <Stack
              justifyContent="center"
              //   alignContent="center"
              //   alignSelf="center"
              alignItems="center"
              key={index}
              sx={{
                width: "128px",
                height: "128px",
                margin: "0 auto",
              }}
            >
              <Fitbit />
              {category}
            </Stack>
          ))
        )}
      </Stack>
    </Box>
  );
};

export default Category;
