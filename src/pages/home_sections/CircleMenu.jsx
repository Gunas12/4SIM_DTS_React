import React from "react";
import "../home_sections/circlemenu.css";
import videoSource from "../home_sections/home_video.mp4";
import imgSource from "../home_sections/Ruslan - 1 1.png"
import ProgramScope from "../home_sections/ProgramScope";
import AboutProgram from "../home_sections/aboutprogram";
import MissionVision from "./MissionVision";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import MetakLogo from "../home_sections/logo 1.png"
import AzerFloatLogo from "../home_sections/logo (1) 1.png"
import STPLogo from "../home_sections/Frame 20.png"
import ProgramVideo from "../home_sections/ProgramVideo"
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
    <div className="video-container">
      <div className="video-div">
      <div className="image-cropper">
  <img src={imgSource} alt="sekil" />
</div>
       <div className="overlay">
        <h2 className="about-header">“Sənaye 4.0 Hazırlıq” proqramı</h2>
        <p>Proqram çərçivəsində şirkətlərin mövcud rəqəmsal bacarıqlarının qiymətləndirilməsi, fərdiləşdirilmiş yol xəritələrinin hazırlanması, dayanıqlı inkişafa hazırlığa dair yol xəritəsinin tərtib edilməsi, maliyyə dəstəyinin göstərilməsi, habelə transformasiyanın uğurlu icrasını təmin etmək üçün davamlı əsasda metodiki dəstək və institusional potensialın gücləndirilməsi kimi tədbirlər həyata keçirilir.</p>
        <div className="about-buttons">
        <button>Müraciət et</button>
        <button>Ətraflı</button>
        </div>
        <div>
          <p className="about-logo-header">Proqramı uğurla başa vuran şirkətlər</p>
          <div className="about-logos">
            <img src={MetakLogo} alt="" />
            <img src={AzerFloatLogo} alt="" />
            <img src={STPLogo} alt="" />
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
        <motion.div
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <ProgramVideo />
        </motion.div>
        <motion.div
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <MissionVision />
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default VideoComponent;
