import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./programScope.css";
import DigitalMaturity from "../home_sections/GlobeLock.png";
import DigitalTransformation from "../home_sections/Book.png";
import DigitalSkills from "../home_sections/Handshake.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProgramScope = () => {
  const { t } = useTranslation();

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const scopes = [
    {
      icon: DigitalMaturity,
      title: "Rəqəmsal hazırlıq səviyyəsinin qiymətləndirilməsi",
      description: "Bu mərhələdə şirkətin texnoloji imkanları analiz olunur və hazırkı rəqəmsal vəziyyəti müəyyən edilir.",
    },
    {
      icon: DigitalTransformation,
      title: "Qiymətləndirmə və maliyyə dəstəyinin göstərilməsi",
      description: "Uyğun şirkətlərə texniki qiymətləndirmə və maliyyə yardımı təklif olunur.",
    },
    {
      icon: DigitalSkills,
      title: "İcra dəstəyinin göstərilməsi",
      description: "Şirkətin rəqəmsal layihələrinin icrasına dəstək verilir.",
    },
    {
      icon: DigitalSkills,
      title: "Rəqəmsal bilik və bacarıqlarının gücləndirilməsi",
      description: "Komandaların rəqəmsal sahədə bacarıqları artırılır və təlimlər keçirilir.",
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
        <h2 style={{ textAlign: "center" }} className="program-title">
          {t('Program Scope')}
        </h2>
        <p style={{ textAlign: "center" }} className="program-descp">
          <p>Proqram çərçivəsində rəqəmsal transformasiya dəstəyi alan hədəf şirkətlər,</p>
          <p>5 əsas istiqamətdə dəstək alacaqlar:</p>
        </p>
      </div>

      <div className="program-second-div">
        {scopes.map((scope, index) => (
          <div key={index} className="digital-scope">
            <div className="icon-area">
              <img src={scope.icon} alt="icon" />
            </div>
            <div className="text-area">
              <h3 className="scope-title">{scope.title}</h3>
              <div className="more-toggle" onClick={() => toggleMore(index)} style={{ cursor: "pointer", marginTop: "5px", color: "#0056b3" }}>
                {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {expandedIndex === index && (
                <p className="scope-more-text" style={{ marginTop: "8px", color: "#333" }}>
                  {scope.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramScope;
