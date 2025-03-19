import React, { useState } from "react";
import "../home_sections/circlemenu.css";
import videoSource from "../home_sections/home_video.mp4";
import ProgramScope from "../home_sections/ProgramScope";
import AboutProgram from "../home_sections/aboutprogram";
import MissionVision from "./MissionVision";
import { useTranslation } from "react-i18next";

const VideoComponent = () => {
  const [activeTab, setActiveTab] = useState("about");
  const { t } = useTranslation();

  return (
    <div className="video-container">
      <video 
      className="salam"
      autoPlay muted loop>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="home-sections">
        <div className="home-tab-buttons">
          <button
            className={activeTab === "about" ? "active" : ""}
            onClick={() => setActiveTab("about")}
          >
           {t('About Program')}
          </button>
          <button
            className={activeTab === "scope" ? "active" : ""}
            onClick={() => setActiveTab("scope")}
          >
{t('Program Scope')}
          </button>
          <button
            className={activeTab === "mission" ? "active" : ""}
            onClick={() => setActiveTab("mission")}
          >
           {t("Mission")}
          </button>
        </div>

        <div className="home-tab-content">
          {activeTab === "about" && <AboutProgram />}
          {activeTab === "scope" && <ProgramScope />}
          {activeTab === "mission" && <MissionVision/>}
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
