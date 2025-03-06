import React, { useState } from "react";
import "./aboutprogram.css";

const AboutProgram = () => {
  return (
    <div className="about-program-main-container">
        <div className="about-first-div">
        <h2>About Program</h2>
        <p >The Digital Transformation Program is spearheaded by the Center for Analysis and Coordination of the Fourth Industrial Revolution(4SIM), which oversees the program's coordination and excetuion.</p>
        <p style={{color:"#3484e5"}}>The program is implemented under the supervision of the Ministry of Economy of Azerbaijan(MoE), serving as the project sponsor.</p>
        <p>Aligned with the 2022-2026 Socio-Economic Development Strategy, <b>the program aims to empower Azerbaijani businesses by supporting their comprehensive digital transformation.</b> It provides funding, capability-building support, and expert guidance to accelerate digital adoption across industries.</p>
        <p>Through structed assessments, stragic roadmaps, financial assistance, and ongoing mentorship, <b>The Digital Transformation Support Program equips businesses with the tools needed to thrive in the digital era.</b></p>
    </div>
    <div className="about-second-div">
        <img src="https://www.azernews.az/media/2024/09/23/274705251_150756944008687_398029669719136241_n.jpg" alt="" />
    </div>
    </div>
  
  );
};

export default AboutProgram;