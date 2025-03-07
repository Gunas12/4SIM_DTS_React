import React, { useState } from "react";
import "../home_sections/circlemenu.css";
import videoSource from "../../assets/videos/button_video.mp4";

// import ProgramScope from "./programscope";

const VideoComponent = () => {
  const scrollToSection1 = () => {
    const section = document.getElementById("abouttt");
    section.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection2 = () => {
    const section = document.getElementById("Scope");
    section.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection3 = () => {
    const section = document.getElementById("Mission");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="video-containerr">
      <video autoPlay muted loop>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="circle-menu">
        <div className="circle" onClick={scrollToSection1}>
          <a href="#abouttt" className="circle-link">
            Proqram haqqında məlumat
          </a>
        </div>
        <div className="circle" onClick={scrollToSection2}>
          <a href="#Scope" className="circle-link">
            Proqramın məqsədi
          </a>
        </div>
        <div className="circle" onClick={scrollToSection3}>
          <a href="#Mission" className="circle-link">
            Missiya və vizyon
          </a>
        </div>
      </div>
      {/* <AboutProgram/>
      <ProgramScope/> */}
    </div>
  );
};

export default VideoComponent;
