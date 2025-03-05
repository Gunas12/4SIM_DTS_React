import React, { useState } from "react";
import "../home_sections/programScope.css";
import "./programScope.css";
import videoSource from "../../assets/videos/Your_paragraph_text.mp4";

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video width="100%" height="auto" autoPlay muted loop>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="circle-menu">
        <div className="circle">
          <a href="#">Proqram haqda məlumat</a>
        </div>
        <div className="circle">
          <a href="#">Proqramın məqsədi</a>
        </div>
        <div className="circle">
          <a href="#Mission">Missiya və vizyon</a>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
