import React, { useState } from "react";
import "../home_sections/programScope.css";
import "./programScope.css";
import videoSource from '../home_sections/Your_paragraph_text.mp4'; 

const VideoComponent = () => {
  return (
    <div style={{ width: '100%', height: 'auto' }} className="video-container">
    <video
      width="100%"
      height="auto"
      controls
      loop 
    >
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
          <a href="#">Missiya və vizyon</a>
        </div>
      </div>
    </div>
  
  );
};

export default VideoComponent;