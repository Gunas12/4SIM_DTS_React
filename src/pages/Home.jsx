import React from "react";
import VideoSection from "./home_sections/VideoSection";
import ProgramScope from "./home_sections/ProgramScope";
import MissionVision from "./home_sections/MissionVision";
import VideoOverlay from "./VideoOverlay";

function Home() {
  return (
    <>
      {/* <VideoOverlay> */}
      <ProgramScope />
      {/* <VideoSection />*/}

      <MissionVision />
    </>
  );
}

export default Home;
