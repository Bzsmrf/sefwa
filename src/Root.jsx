import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ExerciseDetails from "./components/ExerciseDetails";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";

const Root = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Root;
