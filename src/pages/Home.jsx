import React from "react";
import CircleMenu from "./home_sections/CircleMenu";
import MissionVision from "./home_sections/MissionVision";
import ProgramScope from "./home_sections/ProgramScope";
import AboutProgram from "./home_sections/Aboutprogram";

function Home() {
  return (
    <>
      <CircleMenu />
      <AboutProgram />
      <ProgramScope />
      <MissionVision />
    </>
  );
}

export default Home;
