import React from "react";
import { useTranslation } from "react-i18next";
import "./aboutprogram.css";

const AboutProgram = () => {
  const { t } = useTranslation();

  return (
    <div className="about-program-main-container" id="abouttt">
      <div className="about-first-div">
        <h2 className="about-program-title">{t('About Program')}</h2>
        <p>{t('The Digital Transformation Program is spearheaded by the Center for Analysis and Coordination of the Fourth Industrial Revolution(4SIM), which oversees the program\'s coordination and execution.')}</p>
        <p style={{ color: "#3484e5" }}>
          {t('The program is implemented under the supervision of the Ministry of Economy of Azerbaijan(MoE), serving as the project sponsor.')}
        </p>
        <p>
          {t('Aligned with the 2022-2026 Socio-Economic Development Strategy,')}
          <b>{t('the program aims to empower Azerbaijani businesses by supporting their comprehensive digital transformation.')}</b>
          {t('It provides funding, capability-building support, and expert guidance to accelerate digital adoption across industries.')}
        </p>
        <p>
          {t('Through structured assessments, strategic roadmaps, financial assistance, and ongoing mentorship,')}
          <b>{t('The Digital Transformation Support Program equips businesses with the tools needed to thrive in the digital era.')}</b>
        </p>
      </div>
      <div className="about-second-div">
        <img
          src="https://www.azernews.az/media/2024/09/23/274705251_150756944008687_398029669719136241_n.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutProgram;
