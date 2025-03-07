import React from "react";
import VideoSection from "./home_sections/VideoSection";
import CircleMenu from "./home_sections/CircleMenu";
import MissionVision from "./home_sections/MissionVision";
import AboutProgram from './home_sections/aboutprogram';
import ProgramScope from "./home_sections/ProgramScope";
function Home() {
  return (
    <>
      <VideoSection />
      {/* <CircleMenu /> */}
      <AboutProgram/>
      <ProgramScope/>
      <MissionVision />
    </>
  );
}

export default Home;
