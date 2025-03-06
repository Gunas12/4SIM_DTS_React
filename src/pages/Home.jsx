import React from "react";
import VideoSection from "./home_sections/VideoSection";
import CircleMenu from "./home_sections/CircleMenu";
import MissionVision from "./home_sections/MissionVision";
import VideoOverlay from "./VideoOverlay";
import ProgramScope from "./home_sections/ProgramScope";
import AboutProgram from "./home_sections/Aboutprogram";

function Home() {
  return (
    <>
      {/* <VideoOverlay> */}

      <CircleMenu />
      <AboutProgram />
      <ProgramScope />

      {/* <VideoSection />*/}

      <MissionVision />
    </>
  );
}

export default Home;
