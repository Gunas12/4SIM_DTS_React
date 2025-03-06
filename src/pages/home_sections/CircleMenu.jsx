import React, { useState } from "react";
import "../home_sections/circlemenu.css";
import videoSource from "../../assets/videos/Your_paragraph_text.mp4";
import AboutProgram from "./Aboutprogram";

// import ProgramScope from "./programscope";

const VideoComponent = () => {
  return (
    <div style={{ width: "100%", height: "auto" }} className="video-containerr">
      <video width="100%" height="auto" autoPlay muted loop>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="circle-menu">
        <div className="circle">
          <a href="#abouttt" className="circle-link">
            Proqram haqda məlumat
          </a>
        </div>
        <div className="circle">
          <a href="#Scope" className="circle-link">
            Proqramın məqsədi
          </a>
        </div>
        <div className="circle">
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
