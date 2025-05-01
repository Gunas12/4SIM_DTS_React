import React from "react";
import { useTranslation } from "react-i18next";
import "./programScope.css";
import DigitalMaturity from "../home_sections/GlobeLock.png";
import DigitalTransformation from "../home_sections/Book.png";
import DigitalSkills from "../home_sections/Handshake.png";
import ProgramVideo from "../home_sections/program_video.mp4"



const ProgramScope = () => {
  const { t } = useTranslation();

  return (
    
    <div>
         <video autoPlay muted loop>
                  <source src={ProgramVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
    </div>
  );
};

export default ProgramScope;
