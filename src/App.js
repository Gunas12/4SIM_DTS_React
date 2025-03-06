import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProgramScope from './pages/home_sections/CircleMenu'

import "./App.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <ProgramScope/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
