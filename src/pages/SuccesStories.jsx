import React from "react";
import Success from "../assets/videos/succes_v.mp4";
import "./SuccesStories.css";
import Metak from "../assets/images/metak.jpg";
import Stp from "../assets/images/stp.jpg";
import Azerfloat from "../assets/images/azerfloat.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
function SuccesStories() {
  const { t } = useTranslation();
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,

      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div
      className="succes"
      style={{
        background: "linear-gradient(to bottom, #27306b, #252e66, #151a3f)",
      }}
    >
      <div className="video-home1">
        <video autoPlay muted loop>
          <source src={Success} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2 className="video-title">{t("Success Stories")}</h2>
      </div>
      <h2
        style={{
          fontSize: "38px",
          marginTop: "28px",
          marginBottom: "0px",
          textAlign: "center",
          color: "white",
        }}
      >
        {t("Success Stories")}
      </h2>
      <section className="description-section">
        <p className="bb">
          {t(
            "The Digital Transformation Program has already made a significant impact by supporting three pioneering Azerbaijani manufacturing companies in their digital transformation journey."
          )}
        </p>
        <p className="bb">
          {t(
            "As pilot participants, Metak, Azerfloat, and STP successfully completed program and are now in the prcess of securing loans to implement their transformation initiatives."
          )}
        </p>
      </section>

      <motion.div
        className="sectionx"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <section className="stories-section">
          <div className="row">
            <div className="story">
              <img src={Metak} alt="metak_logo" />
              <h2>Metak</h2>
              <p>
                {t(
                  " A leading manufacturer in Azerbaijan, Metak leveraged the program to assess its digital maturity and develop a comprehensive digital transformation roadmap. With targeted support, the company is now set to integrate advanced automation and smart manufacturing solutions."
                )}
              </p>
            </div>
            <div className="story">
              <img src={Azerfloat} alt="azerfloat_logo" />
              <h2>Azerfloat</h2>
              <p>
                {t(
                  "Specializing in glass production, Azerfloat used the program to enhance operational efficiency, streamline production, and adopt digital tools that optimize resource management. Their transformation roadmap focuses on data-driven decision-making and improved production workflows."
                )}
              </p>
            </div>
            <div className="story">
              <img src={Stp} alt="STP_logo" />
              <h2>{t("STP (Sumgait Technologies Park)")}</h2>
              <p>
                {t(
                  "As one of the largest industrial hubs in Azerbaijan, STP embraced digital transformation by implementing AI-powered monitoring systems and smart logistics solutions. Their participation in the program has positioned them to enhance productivity and sustainability through technology-driven innovations."
                )}
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default SuccesStories;
