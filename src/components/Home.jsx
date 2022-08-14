import { Container } from "@mui/material";
import React from "react";
import HeroBanner from "./HeroBanner";
import SearchExercise from "./SearchExercise";
import Exercises from "./Exercises";

const Home = () => {
  return (
    <Container>
      <HeroBanner />
      <SearchExercise />
      <Exercises />
    </Container>
  );
};

export default Home;
