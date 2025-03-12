import React, { useState } from "react";
import Success from "../assets/videos/success.mp4";
import Export from "../assets/images/export.jpg";
import Industry from "../assets/images/industry.jpg";
import Leader from "../assets/images/leadership.jpg";
import "./eligibility.css";
import { useTranslation } from "react-i18next";
function Eligibility() {
  const [activeTab, setActiveTab] = useState("eligibility");
  const { t } = useTranslation();
  return (
    <div className="elig">
      <div className="video-home3">
        <video autoPlay muted loop>
          <source src={Success} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-titl">
          <p>{t("Eligibility")} </p>
          <p>&</p>
          <p>{t("Prioritization")}</p>
        </div>
      </div>
      <div className="elig-sections">
        <div className="tab-buttons">
          <button
            className={activeTab === "eligibility" ? "active" : ""}
            onClick={() => setActiveTab("eligibility")}
          >
            {t("Eligibility Criteria")}
          </button>
          <button
            className={activeTab === "prioritization" ? "active" : ""}
            onClick={() => setActiveTab("prioritization")}
          >
            {t("Prioritization Methodology")}
          </button>
        </div>
        {activeTab === "eligibility" && (
          <section className="eligibility-criteria">
            <h3>{t("Eligibility Criteria")}</h3>
            <p className="description">
              {t(
                "To benefit from the Digital Transformation Program, companies must meet the following criteria:"
              )}
            </p>
            <div className="criteria-list">
              <div className="criteria-item">
                <h4>{t("Registered & Operating in Azerbaijan")}</h4>
                <p>
                  {t(
                    "The company must be legally registered and conducting business within Azerbaijan."
                  )}
                </p>
              </div>
              <div className="criteria-item">
                <h4>{t("Local Ownership")}</h4>
                <p>{t("At least 51% of the company must be locally owned.")}</p>
              </div>
              <div className="criteria-item">
                <h4>{t("Industry Focus")}</h4>
                <p>
                  {t("The company must be operating in the following sectors")}:
                </p>
                <ul>
                  <li>{t("Manufacturing")}</li>
                  <li>{t("IT & Software Development")}</li>
                  <li>{t("Energy & Infrastructure")}</li>
                  <li>{t("Other relevant industries")}</li>
                </ul>
              </div>
              <div className="criteria-item">
                <h4>{t("Company Size")}</h4>
                <p>
                  {t(
                    "The company must meet the following size classification:"
                  )}
                </p>
                <ul>
                  <li>
                    <strong>{t("Employees")}:</strong>
                    {t("More than 10")}
                  </li>
                  <li>
                    <strong>{t("Annual turnover:")}</strong>{" "}
                    {t("More than 5 million manats")}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeTab === "prioritization" && (
          <section className="prioritization-methodology">
            <h3>{t("Prioritization Methodology")}</h3>
            <p>
              {t(
                "The Digital Transformation Support Program aims to digitally transform 650 Azerbaijani manufacturing companies (500 SMEs and 150 large enterprises) by 2030 under the supervision of 4SIM and the Ministry of Economy (MoE)."
              )}
            </p>
            <p>
              {t(
                "Each year, a defined number of companies will be invited to join the program. Eligible applicants will be notified at least three months in advance before their participation begins, allowing for early discussions and preparation."
              )}
            </p>
            <div className="prior_cards_section">
              <div className="prior_card">
                <img src={Industry} alt="Industry Focus" />
                <h2>{t("Industry Focus")}</h2>
                <p>
                  {t(
                    "Priority given to manufacturing companies (food & beverages, refined petroleum products, chemicals, other non-metalic mineral products, basic metals, repair and installation of machinery and equipment, rubber & plastic products, fabricated metal products, textiles, machinery & equipment, electrical equipment) that contribute to economic diversification and industrial growth."
                  )}
                </p>
              </div>
              <div className="prior_card">
                <img src={Export} alt="Export Potential" />
                <h2>{t("Export Potential")}</h2>
                <p>
                  {t(
                    "Companies with a higher export ratio and international market presence will be prioritized as digital transformation can enhace global competitiveness."
                  )}
                </p>
              </div>
              <div className="prior_card">
                <img src={Leader} alt="Leadership Commitment" />
                <h2>{t("Leadership Commitment")}</h2>
                <p>
                  <b>{t("Strong preference for businesses where:")}</b>
                  <li>
                    {t(
                      "Senior executives actively support and drive digital transformation."
                    )}
                  </li>
                  <li>
                    {t(
                      "A digital strategy is already in place or under development."
                    )}
                  </li>
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Eligibility;
