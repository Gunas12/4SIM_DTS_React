import React, { useState } from "react";

import Export from "../assets/images/export.jpg";
import Industry from "../assets/images/industry.jpg";
import Leader from "../assets/images/leadership.jpg";
import "./eligibility.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Success from "../pages/home_sections/900cc44fae9f46c680a99105fabe5b096aa0144d.mp4";

import E_1 from "../assets/images/eligibility_1.png";
import E_2 from "../assets/images/eligibility_2.png";
import E_3 from "../assets/images/eligibility_3.png";
import Down from "../assets/images/formkit_down.svg";
import Gif_1 from "../assets/videos/10ba024cb528d82f11d09e2ab8ea9d467241d3fb.gif";
import Gif_2 from "../assets/videos/7c12dee339a0796d4f49232e6f68531d944fdd3d.gif";
import Gif_3 from "../assets/videos/8bc14bdaaeec72bb08e93c6d73b4476b5ae8bdc5.gif";

function Eligibility() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,

      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const [activeTab, setActiveTab] = useState("eligibility");
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();
  const toggleScope = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const scopes = [
    {
      icon: E_1,
      title: "İxrac potensialı",
      description:
        "İxrac potensialı yüksək olan, yəni daha yüksək ixrac nisbətinə və beynəlxalq bazarlarda mövcudluğa sahib şirkətlərə üstünlük veriləcəkdir. Belə şirkətlər qlobal rəqabət qabiliyyətinin artırılmasına töhfə verdikləri üçün proqramın məqsədləri ilə daha sıx şəkildə uzlaşır.",
    },
    {
      icon: E_2,
      title: "Rəhbərlik təminatı",
      description:
        "Güclü müraciətlərdə adətən təşkilatın üst rəhbərliyi və digər əsas idarəetmə strukturları rəqəmsal transformasiya prosesinə aktiv şəkildə dəstək göstərir və ona liderlik edirlər. Həmçinin, belə şirkətlərdə ya artıq mövcud rəqəmsal strategiya yerləşdirilmiş olur, ya da bu strategiyanın inkişaf etdirilməsi üzrə konkret addımlar atılır.",
    },
    {
      icon: E_3,
      title: "Sənaye mərkəzi",
      description:
        "Proqram çərçivəsində iqtisadi diversifikasiyaya və sənaye inkişafına töhfə verən istehsalat şirkətlərinə üstünlük verilir. Bu üstünlük, xüsusilə qida və içkilər, mürəkkəb neft məhsulları, kimyəvi maddələr, digər qarışıq mineral məhsulları, əsas metallar, maşın və avadanlıqların təmiri və quraşdırılması, lastik və plastik məhsullar, qabartılmış metal məmulatlar, tekstil, maşın və avadanlıqlar, həmçinin elektrik avadanlıqları sahəsində fəaliyyət göstərən şirkətləri əhatə edir.",
    },
  ];

  return (
    <div className="elig">
      <div className="video-home3">
        <video autoPlay muted loop>
          <source src={Success} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-titl">
          <p>{t("Eligibility & Prioritization")} </p>
        </div>
      </div>
      <div className="elig-sections">
        <section className="eligibility-criteria">
          <h3>{t("Eligibility Criteria")}</h3>

          <div className="criteria-list">
            <div className="criteria-item">
              <div className="item1">{/*   <img src="" alt="gif" />*/}</div>
              <div className="item1text">
                <h4>{t("Legal Registration Address")}</h4>
                <p>
                  {t(
                    "The company must be legally registered and actively operating in accordance with the laws of the Republic of Azerbaijan."
                  )}
                </p>
              </div>
            </div>
            <div className="criteria-item">
              <div className="item1">
                <img src={Gif_1} alt="gif" />
              </div>
              <div className="item1text">
                <h4>{t("Local Ownership")}</h4>
                <p>
                  {t(
                    "At least 51% of the company’s charter capital must be owned by local individuals or entities."
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="criteria-list">
            <div className="criteria-item">
              <div className="criteria-itemm">
                <div className="item2">
                  <img src={Gif_2} alt="gif2" />
                  <h4>{t("Priority Sectors")}</h4>
                </div>
                <p>
                  {t(
                    "The company must operate in one of the following priority sectors:"
                  )}
                </p>
                <ul>
                  <li>{t("Manufacturing")}</li>
                  <li>{t("Information Technology and Communications")}</li>
                  <li>{t("Healthcare")}</li>
                  <li>{t("Other relevant fields")}</li>
                </ul>
              </div>
            </div>
            <div className="criteria-item">
              <div className="criteria-itemm">
                <div className="item2">
                  <img src={Gif_3} alt="gif3" /> <h4>{t("Company Size")}</h4>
                </div>
                <p>
                  {t("The company must meet the following size requirements:")}
                </p>
                <ul>
                  <li>
                    <strong>{t("Number of employees")} : </strong>
                    {t("Minimum 10")}
                  </li>
                  <li>
                    <strong>{t("Annual turnover")} : </strong>
                    {t("Minimum 5 million AZN")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="prioritization-methodology">
          <h3>{t("Prioritization Methodology")}</h3>
          <p className="bbb">
            {t(
              "Under the program, a limited number of companies will be selected each year and invited to participate. Eligible applicants will be officially notified at least three months prior to the start of their participation. This timeframe provides sufficient opportunity for initial discussions and necessary preparations."
            )}
          </p>

          <div className="program-second-divn">
            {scopes.map((scope, index) => (
              <div
                className={`digital-scopen ${
                  openIndex === index ? "expandedn" : ""
                }`}
                key={index}
                onClick={() => toggleScope(index)}
              >
                <div className="scope-headern">
                  <img src={scope.icon} alt="icon" className="scope-icon" />
                  <div className="scope-header-hn">
                    <h3 className="scope-title">{scope.title}</h3>
                    <a>
                      <img
                        src={Down}
                        alt="icon"
                        className={`scope-icon scope-iconh ${
                          openIndex === index ? "rotate" : ""
                        }`}
                      />
                    </a>
                  </div>
                </div>
                <div
                  className={`scope-collapse ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  <p className="scope-descpn">{scope.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Eligibility;
