import React from "react";
import { Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { FitnessCenter } from "@mui/icons-material";
import classes from "../styles/All.module.css";

const Navbar = () => {
  return (
    <Container className={classes.navContainer}>
      <Stack direction="row" gap={2}>
        <FitnessCenter />
        <Link to="/" className={classes.navLink}>
          Home
        </Link>
        <Link
          to="/excercise"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercise
        </Link>
      </Stack>
    </Container>
  );
};

export default Navbar;
