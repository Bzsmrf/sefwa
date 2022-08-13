import React from "react";
import { Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { FitnessCenter } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Container>
      <Stack direction="row">
        <FitnessCenter />
        <Link to="/">Home</Link>
        <Link to="/excercise">Exercise</Link>
      </Stack>
    </Container>
  );
};

export default Navbar;
