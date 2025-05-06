import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./programScope.css";
import DigitalMaturity from "../home_sections/GlobeLock.png";
import DigitalTransformation from "../home_sections/Book.png";
import DigitalSkills from "../home_sections/Handshake.png";
import Down from "../../assets/images/formkit_down.svg";

const ProgramScope = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleScope = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const scopes = [
    {
      icon: DigitalMaturity,
      title: "Rəqəmsal hazırlıq səviyyəsinin qiymətləndirilməsi",
      description:
        "Bu mərhələdə şirkətin texnoloji imkanları analiz olunur və hazırkı rəqəmsal vəziyyəti müəyyən edilir.",
    },
    {
      icon: DigitalTransformation,
      title: "Qiymətləndirmə və maliyyə dəstəyinin göstərilməsi",
      description:
        "Uyğun şirkətlərə texniki qiymətləndirmə və maliyyə yardımı təklif olunur.",
    },
    {
      icon: DigitalSkills,
      title: "İcra dəstəyinin göstərilməsi",
      description: "Şirkətin rəqəmsal layihələrinin icrasına dəstək verilir.",
    },
    {
      icon: DigitalSkills,
      title: "Rəqəmsal bilik və bacarıqlarının gücləndirilməsi",
      description:
        "Komandaların rəqəmsal sahədə bacarıqları artırılır və təlimlər keçirilir.",
    },
    {
      icon: DigitalMaturity,
      title: "Rəqəmsal transformasiya yol xəritəsinin hazırlanması",
      description: "Addım-addım rəqəmsal dəyişiklik planı hazırlanır.",
    },
  ];

  return (
    <div className="program-main-container" id="Scope">
      <div className="program-first-div">
        <h2 className="program-title">{t("Program Scope")}</h2>
        <p className="program-descp">
          <p>
            Proqram çərçivəsində rəqəmsal transformasiya dəstəyi alan hədəf
            şirkətlər,
          </p>
          <p>
            <span className="ss">5 əsas istiqamətdə</span> dəstək alacaqlar:
          </p>
        </p>
      </div>

      <div className="program-second-div">
        {scopes.map((scope, index) => (
          <div
            className={`digital-scope ${openIndex === index ? "expanded" : ""}`}
            key={index}
            onClick={() => toggleScope(index)}
          >
            <div className="scope-header">
              <img src={scope.icon} alt="icon" className="scope-icon" />
              <div className="scope-header-h">
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
              className={`scope-collapse ${openIndex === index ? "open" : ""}`}
            >
              <p className="scope-descp">{scope.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramScope;
