import React, { useState } from "react";
import Success from "../assets/videos/success.mp4";
import Export from "../assets/images/export.jpg";
import Industry from "../assets/images/industry.jpg";
import Leader from "../assets/images/leadership.jpg";
import "./eligibility.css";

function Eligibility() {
  const [activeTab, setActiveTab] = useState("eligibility");

  return (
    <div className="elig">
      <div className="video-home3">
        <video autoPlay muted loop>
          <source src={Success} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-titl">
          <p>Eligibility </p>
          <p>&</p>
          <p>Prioritization</p>
        </div>
      </div>
      <div className="elig-sections">
        <div className="tab-buttons">
          <button
            className={activeTab === "eligibility" ? "active" : ""}
            onClick={() => setActiveTab("eligibility")}
          >
            Eligibility Criteria
          </button>
          <button
            className={activeTab === "prioritization" ? "active" : ""}
            onClick={() => setActiveTab("prioritization")}
          >
            Prioritization Methodology
          </button>
        </div>
        {activeTab === "eligibility" && (
          <section className="eligibility-criteria">
            <h3>Eligibility Criteria</h3>
            <p className="description">
              To benefit from the Digital Transformation Program, companies must
              meet the following criteria:
            </p>
            <div className="criteria-list">
              <div className="criteria-item">
                <h4>1. Registered & Operating in Azerbaijan</h4>
                <p>The company must be legally registered in Azerbaijan.</p>
              </div>
              <div className="criteria-item">
                <h4>2. Local Ownership</h4>
                <p>At least 51% of the company must be locally owned.</p>
              </div>
              <div className="criteria-item">
                <h4>3. Industry Focus</h4>
                <p>The company must be in one of these sectors:</p>
                <ul>
                  <li>Manufacturing</li>
                  <li>IT & Software Development</li>
                  <li>Energy & Infrastructure</li>
                </ul>
              </div>
              <div className="criteria-item">
                <h4>4. Company Size</h4>
                <ul>
                  <li>
                    <strong>Employees:</strong> More than 10
                  </li>
                  <li>
                    <strong>Annual turnover:</strong> More than 5 million manats
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeTab === "prioritization" && (
          <section className="prioritization-methodology">
            <h3>Prioritization Methodology</h3>
            <p>
              The program aims to digitally transform 650 Azerbaijani
              manufacturing companies by 2030.
            </p>
            <div className="prior_cards_section">
              <div className="prior_card">
                <img src={Industry} alt="Industry Focus" />
                <h2>Industry Focus</h2>
                <p>Priority given to manufacturing companies in key sectors.</p>
              </div>
              <div className="prior_card">
                <img src={Export} alt="Export Potential" />
                <h2>Export Potential</h2>
                <p>
                  Companies with international market presence are prioritized.
                </p>
              </div>
              <div className="prior_card">
                <img src={Leader} alt="Leadership Commitment" />
                <h2>Leadership Commitment</h2>
                <p>
                  Strong preference for businesses with an active digital
                  strategy.
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
