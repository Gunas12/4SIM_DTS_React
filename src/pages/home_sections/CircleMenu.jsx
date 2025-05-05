import React from "react";
import "../home_sections/circlemenu.css";
import videoSource from "../home_sections/home_video.mp4";
import imgSource from "../home_sections/Ruslan - 1 1.png";
import ProgramScope from "../home_sections/ProgramScope";
import AboutProgram from "../home_sections/aboutprogram";
import MissionVision from "./MissionVision";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import MetakLogo from "../home_sections/logo 1.png";
import AzerFloatLogo from "../home_sections/logo (1) 1.png";
import STPLogo from "../home_sections/Frame 20.png";
import ProgramVideo from "../home_sections/ProgramVideo";
import V from "../home_sections/900cc44fae9f46c680a99105fabe5b096aa0144d.mp4";
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const VideoComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="video-div">
        <video autoPlay loop muted className="video-container">
          <source src={V} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <div></div>
          <div>
            <h2 className="about-header">“Sənaye 4.0 Hazırlıq” proqramı</h2>
            <p className="aboutpp">
              Proqram çərçivəsində şirkətlərin mövcud rəqəmsal bacarıqlarının
              qiymətləndirilməsi, fərdiləşdirilmiş yol xəritələrinin
              hazırlanması, dayanıqlı inkişafa hazırlığa dair yol xəritəsinin
              tərtib edilməsi, maliyyə dəstəyinin göstərilməsi, habelə
              transformasiyanın uğurlu icrasını təmin etmək üçün davamlı əsasda
              metodiki dəstək və institusional potensialın gücləndirilməsi kimi
              tədbirlər həyata keçirilir.
            </p>
            <div className="about-buttons">
              <button>Müraciət et</button>
              <button className="more">Ətraflı</button>
            </div>
          </div>
          <div className="ablogo">
            <p className="about-logo-header">
              Proqramı uğurla başa vuran şirkətlər
            </p>
            <div className="about-logos">
              <div>
                <img src={MetakLogo} alt="" />
              </div>
              <div>
                <img src={AzerFloatLogo} alt="" />
              </div>
              <div>
                <img src={STPLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-sections">
        {/* <motion.div
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <AboutProgram />
        </motion.div> */}

        <motion.div
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <ProgramScope />
        </motion.div>
        <div className="programvideo">
          <ProgramVideo />
        </div>

        <MissionVision />
      </div>
    </div>
  );
};

export default VideoComponent;
