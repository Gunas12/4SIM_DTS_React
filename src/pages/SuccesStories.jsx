import React from "react";
/*
import Success1 from "../assets/videos/succes_v.mp4";

import { motion } from "framer-motion";
import Succ_Video from "../assets/videos/success_story.mp4";*/
import Success from "../pages/home_sections/900cc44fae9f46c680a99105fabe5b096aa0144d.mp4";
import "./SuccesStories.css";
import Stp from "../assets/images/Property 1=image 1.png";
import Azerfloat from "../assets/images/Property 1=logoSecond 1.png";
import Metak from "../assets/images/Property 1=logo 2.png";
import { useTranslation } from "react-i18next";
function SuccesStories() {
  const { t } = useTranslation();
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,

      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const toggleExpand = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.toggle("expanded");
      el.classList.toggle("collapsed");
    }
  };

  const videoRef = React.useRef(null);

  return (
    <div
      className="succes"
      style={{
        backgroundColor: "whitesmoke !important",
      }}
    >
      <div className="video-home1">
        <video autoPlay muted loop>
          <source src={Success} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2 className="video-title">{t("Uğurlarımız")}</h2>
      </div>
      <div className="successh">
        <h2>{t("Success Stories")}</h2>
        <section className="description-section">
          <p className="bb">
            {t(
              "The “Industry 4.0 Readiness” Program has already made a significant impact by supporting the digital transformation journeys of three leading manufacturing companies in Azerbaijan. The pilot participants—Metak, Azerfloat, and STP—have successfully completed the program and are currently in the process of securing financial support to implement their transformation initiatives."
            )}
          </p>
        </section>
      </div>

      <section className="stories-section">
        <div className="row">
          <div className="story" onClick={() => toggleExpand("metak")}>
            <img src={Metak} alt="metak_logo" />

            <p id="metak" className="story-text collapsed">
              {t(
                "Metak, one of Azerbaijan’s leading pipe manufacturing companies, participated in the “Industry 4.0 Readiness” Program. As part of the program, the company's digital maturity level was assessed, and a comprehensive digital transformation roadmap was developed. Metak is now preparing to implement advanced automation and smart manufacturing solutions."
              )}
            </p>
          </div>

          <div className="story" onClick={() => toggleExpand("azerfloat")}>
            <img src={Azerfloat} alt="azerfloat_logo" />

            <p id="azerfloat" className="story-text collapsed">
              {t(
                "Specializing in glass production, Azerfloat was provided with a digital transformation roadmap aimed at improving operational efficiency, optimizing manufacturing processes, and enhancing resource management. The company is currently taking steps toward data-driven decision-making and improved production processes as part of the roadmap implementation."
              )}
            </p>
          </div>

          <div className="story" onClick={() => toggleExpand("stp")}>
            <img src={Stp} alt="stp_logo" />

            <p id="stp" className="story-text collapsed">
              {t(
                "STP, one of Azerbaijan’s largest industrial hubs, has embraced digital transformation by implementing AI-powered monitoring systems and smart logistics solutions. The company’s participation in the program has expanded its productivity and sustainability capabilities through technology-driven innovation."
              )}
            </p>
          </div>
        </div>
      </section>

      {/*
      <div className="responsive-video-wrapper">
        <div className="video-box">
          <video ref={videoRef} className="responsive-video" controls>
            <source src={Succ_Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>*/}
    </div>
  );
}

export default SuccesStories;
