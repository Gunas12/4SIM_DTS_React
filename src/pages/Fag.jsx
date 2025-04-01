import React, { useState } from "react";
import "./fag.css";
import fag from "../assets/videos/fag.mp4";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
function Fag() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="Fagg">
      <div className="video-home7">
        <video autoPlay muted loop>
          <source src={fag} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-titlex tt">
          <h3>{t("Frequently")}</h3>
          <h3>{t("Asked Questions")}</h3>
        </div>
      </div>

      <div className="Fag">
        <div className="faq-container">
          <h4 style={{ color: "white" }}>
            <b>{t("Frequently Asked Questions")}</b>
          </h4>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(0)}>
              {t(
                "When will I find out if my company is eligible for the program?"
              )}
              <span className={`faq-icon ${activeIndex === 0 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 0 ? "active" : ""}`}>
              {t("You will receive a notification regarding your eligibility")}
              <b>{t(" within one month")}</b>{" "}
              {t(
                "after submitting your application. The eligibility review includes an assessment based on the program's criteria, such as company size, industry, and digital readiniess."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(1)}>
              {t(
                "When will I know if my company is prioritized for participation?"
              )}
              <span className={`faq-icon ${activeIndex === 1 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 1 ? "active" : ""}`}>
              {t("If your company is selected as a")}
              <b>
                {t(
                  " prioritized participant, 4SIM authorities will reach out at least three month in advance."
                )}
              </b>
              {t(
                " This allows for detailed discussions on your company's digital transformation roadmap and preparation for the program."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(2)}>
              {t(
                "How does 4SIM assist companies in securing funding from SIF?"
              )}
              <span className={`faq-icon ${activeIndex === 2 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 2 ? "active" : ""}`}>
              <b>{t("4SIM offers comprehensive support")}</b>{" "}
              {t("throughout the funding application process:")}
              <ul>
                <li>
                  <b>
                    {t(
                      "Document Preparation: We help you compile the necessary documents for submitting to SIF."
                    )}
                  </b>
                </li>
                <li>
                  <b>{t("Direct Contact with SIF Authorities:")}</b>{" "}
                  {t(
                    "We'll facilitate communication between your company and SIF, ensuring smooth processing of your funding request."
                  )}
                </li>
                <li>
                  <b>{t("Advisory Services:")}</b>
                  {t(
                    " Our experts guide you in identifying the most appropriate funding options and ensuring that your request aligns with SIF's criteria."
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(3)}>
              {t(
                "What type of funding support does my company recieve from theprogram?"
              )}
              <span className={`faq-icon ${activeIndex === 3 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 3 ? "active" : ""}`}>
              <b> {t("The Digital Tranformation Program")}</b> {t("provides")}
              <b>{t("financial support in two key areas:")}</b>
              <ul>
                <li>
                  <b>{t("Assessment & Roadmap Development:")} </b>{" "}
                  {t("Companies will receive grants to fund")}{" "}
                  <b>
                    {t(
                      "digital maturity assessments and the development of a customized digital transformation roadmap."
                    )}
                  </b>
                </li>
                <li>
                  <b>{t("Implementation Support:")} </b>{" "}
                  {t("Companies are eligible for")}
                  <b>{t("low-interest loans from SIF")}</b>{" "}
                  {t(
                    "to implement their transformation plans. These loans help cover the costs of technology adoption, infrastructure upgrades, and related initiatives."
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(4)}>
              {t(
                "Are the grants for consulting services covered by the program?"
              )}
              <span className={`faq-icon ${activeIndex === 4 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 4 ? "active" : ""}`}>
              {t("Yes, the")} <b>{t("local digital consultancy services")}</b>
              {t(
                " for conducting digital maturity assessments, developing transformation roadmaps, and providing implementation support will be fully funded through a grant. Your company will not incur costs for these services."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(5)}>
              {t("How long does the funding process take?")}
              <span className={`faq-icon ${activeIndex === 5 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 5 ? "active" : ""}`}>
              {t("The timeline for securing")}{" "}
              <b>{t("financial assistance")} </b>{" "}
              <b>
                {t(
                  "depends on the complexity of your transformation plan and the SIF approval process."
                )}
              </b>
              {t(
                "On average, you can expect the process to take between 1 to 3 months from initial application to final approval and funding disbursement."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(6)}>
              {t(
                " Will the portal remain open for applications throughout the year?"
              )}
              <span className={`faq-icon ${activeIndex === 6 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 6 ? "active" : ""}`}>
              {t("Yes, the")}{" "}
              <b>{t("application portal will remain open permanently,")}</b>
              {t(
                "as this is a continuing program designed to support companies year-round. You can apply the program at any time and join in one of the prioritized cycles."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(7)}>
              {t(
                " What if my company is not selected initially? Can we reapply?"
              )}
              <span className={`faq-icon ${activeIndex === 7 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 7 ? "active" : ""}`}>
              {t(
                "Yes, if your company is ot selected during the current cycle, youcan reapply in future cycles. In fact, we encourage companies to apply again after enhancing their digital oraddressing any gaps identified during the selection process."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(8)}>
              {t(
                "How do we know if our company is ready for digital transformation?"
              )}
              <span className={`faq-icon ${activeIndex === 8 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 8 ? "active" : ""}`}>
              {t(
                " As part of the program, we'll conduct a Digital maturity Assessment  to evaluate your current digital capabilities. This process will hep you identify areas for improvement and create a personalized roadmap for transformation."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(9)}>
              {t(
                "What kind of training and capability-building support does the program offer?"
              )}
              <span className={`faq-icon ${activeIndex === 9 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 9 ? "active" : ""}`}>
              <b> {t("The Digital Transformation Program")}</b>{" "}
              {t(
                "includes training workshops, seminars, and online resourcesto help your team build essential digital skills. This includes everthing from basic digital literacy to specialized training on specific technologies like cloud computing, AI, automation, and cybersecurity."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAccordion(10)}
            >
              {t("Can we use the program's funding for other purposes?")}
              <span
                className={`faq-icon ${activeIndex === 10 ? "active" : ""}`}
              >
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 10 ? "active" : ""}`}>
              {t("The program's financial support is desined specifically for")}
              <b>{t("digital transformation-related activities")}</b>
              {t(", such as:")}
              <ul>
                <li>{t("Conductiong assessments")}</li>
                <li>{t("Developing roadmaps")}</li>
                <li>{t("Technology adoption")}</li>
                <li>
                  {t(
                    "Implementation costs (e.g., hardware, software, infrastructure upgrades)"
                  )}
                </li>
                <li>
                  {t(
                    "Any other use of funds outside of the approved scope would require prior approval from"
                  )}
                  <b> 4SIM.</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAccordion(11)}
            >
              {t(
                "Will participating in the program help improve our competitiveness internationally?"
              )}
              <span
                className={`faq-icon ${activeIndex === 11 ? "active" : ""}`}
              >
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 11 ? "active" : ""}`}>
              {t(
                "Absolutely! By embracing digital transformation, your company can gain a competitive edge in global markets. The program focuses on improving operational efficiency, innovation, and scalability, which will position your business for success both locally and internationally."
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fag;
