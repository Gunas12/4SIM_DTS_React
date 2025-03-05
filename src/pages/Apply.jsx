import React, { useState } from "react";
import "../pages/home_sections/Apply.css";

const ApplyForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    registrationNumber: "",
    yearsOfEstablishment: "",
    address: "",
    city: "",
    contactPerson: "",
    phone: "",
    companyType: "",
    localOwnership: "",
    shareholders: "",
    industrySector: "",
    productsServices: "",
    exportActivity: "No",
    exportRatio: "",
    exportMarkets: "",
    employees: "",
    turnover: "",
    digitalLevel: "1",
    digitalTools: [],
    digitalChallenges: [],
    digitalGoals: "",
    digitalLeader: "No",
    digitalStrategy: "No",
    executiveCommitment: "No",
    financialAssistance: "No",
    estimatedBudget: "",
    registrationCert: null,
    financialStatements: null,
    digitalPlans: null,
    consentInfoAccurate: false,
    consentContact: false,
    keyChallenges: [],
  });
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      keyChallenges: checked
        ? [...prev.keyChallenges, value]
        : prev.keyChallenges.filter((item) => item !== value),
    }));
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="apply-form">
        {step === 1 && (
          <div className="form-div">
            <h2>Company Information</h2>
            <label>Company Name(Full legal name)</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />

            <label>Company Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              required
            />

            <label>Years of Establishment</label>
            <select
              name="yearsOfEstablishment"
              value={formData.yearsOfEstablishment}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              {Array.from({ length: 100 }, (_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
            <label>Company Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <label>City/Region</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <label>Primary Contact Person</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="form-div">
            <h2>Ownership & Legal structure </h2>
            <label>
              Company type(LLC, JSC, Individual Entrepreneur, etc.){" "}
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />

            <label>
              Percentage of Local Ownership: {formData.localOwnership}%
            </label>
            <input
              type="range"
              name="localOwnership"
              min="0"
              max="100"
              step="1"
              value={formData.localOwnership}
              onChange={handleChange}
              required
            />

            <label>Company shareholders (Optional)</label>
            <input
              type="number"
              name="yearsOfEstablishment"
              value={formData.yearsOfEstablishment}
              onChange={handleChange}
              required
            />

            <div>
              <h2 className="industry">Industry & Business operations</h2>
              <label>Industry sector</label>
              <select
                name="industrySector"
                value={formData.industrySector}
                onChange={handleChange}
                required
              >
                <option value="">Food & beverages</option>
                <option value="IT">Refined peroleum products</option>
                <option value="Manufacturing">Chemicals</option>
                <option value="Finance">
                  Other non-metalic mineral products
                </option>
                <option value="Retail">Basic metals</option>
                <option value="Healthcare">
                  Repair and installation of machinery and equipment
                </option>
                <option value="Education">Rubber & plastic Products</option>
                <option value="Other">Textiles</option>
                <option value="Other">Machinery & equipment</option>
                <option value="Other">Electrical equipment</option>
              </select>

              <label>Main products/ services </label>
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
              />

              <label>Export Activity</label>
              <div
                style={{ display: "flex", gap: "15px", alignItems: "center" }}
              >
                <label>
                  <input
                    type="checkbox"
                    name="exportActivity"
                    checked={formData.exportActivity === "Yes"}
                    onChange={() =>
                      handleChange({
                        target: {
                          name: "exportActivity",
                          value: formData.exportActivity === "Yes" ? "" : "Yes",
                        },
                      })
                    }
                  />
                  Yes
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="exportActivity"
                    checked={formData.exportActivity === "No"}
                    onChange={() =>
                      handleChange({
                        target: {
                          name: "exportActivity",
                          value: formData.exportActivity === "No" ? "" : "No",
                        },
                      })
                    }
                  />
                  No
                </label>
              </div>

              {/* yes olsa gorunecek hisse */}
              {formData.exportActivity === "Yes" && (
                <>
                  <label>Export Ratio (%)</label>
                  <input
                    type="range"
                    name="exportRatio"
                    value={formData.exportRatio}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    step="1"
                  />
                  <span>{formData.exportRatio}%</span>
                </>
              )}

              <label>Key Export Markets(If applicable)</label>
              <input
                type="text"
                name="exportMarkets"
                value={formData.exportMarkets}
                onChange={handleChange}
                required
              />
            </div>
            <button type="button" onClick={nextStep} className="next">
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="form-div">
            <h2 className="industry">Company size</h2>

            <div style={{ display: "flex", gap: "80px" }}>
              <div>
                <label>Number of full-time employees</label>
                <select
                  name="fullTimeEmployees"
                  value={formData.fullTimeEmployees}
                  onChange={handleChange}
                  required
                  className="select"
                >
                  <option value="">Select an option</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-250">51-250</option>
                  <option value="250+">250+</option>
                </select>
              </div>

              <div>
                <label>Annual turnover (AZN)</label>
                <select
                  name="annualTurnover"
                  value={formData.annualTurnover}
                  onChange={handleChange}
                  required
                  className="select"
                >
                  <option value="">Select an option</option>
                  <option value="Up to 3M">Up to 3M</option>
                  <option value="3M-30M">3M-30M</option>
                  <option value="30M+">30M+</option>
                </select>
              </div>
            </div>

            <h2 className="industry">
              Digital Readiness & Transformation Needs
            </h2>

            <div style={{ display: "flex", gap: "40px" }}>
              <div>
                <label>Current level of digitalization</label>
                <select
                  name="digitalizationLevel"
                  value={formData.digitalizationLevel}
                  onChange={handleChange}
                  required
                  className="select"
                >
                  <option value="">Select an option</option>
                  <option value="1">1 = No digital tools used</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">
                    5 = Fully digital & automated processes
                  </option>
                </select>
              </div>

              <div>
                <label>Existing digital tools in use</label>
                <select
                  name="digitalTools"
                  value={formData.digitalTools}
                  onChange={handleChange}
                  required
                  className="select"
                >
                  <option value="">Select an option</option>
                  <option value="ERP">ERP</option>
                  <option value="CRM">CRM</option>
                  <option value="Cloud">Cloud</option>
                  <option value="IoT">IoT</option>
                  <option value="AI">AI</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <label>Key challenges in digital transformation</label>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              className="checkbox"
            >
              {[
                "Lack of budget",
                "Lack of technical expertise",
                "Need for training",
                "Lack of digital strategy",
                "Infrastructure limitations",
              ].map((challenge) => (
                <label key={challenge}>
                  <input
                    type="checkbox"
                    name="keyChallenges"
                    value={challenge}
                    checked={formData.keyChallenges.includes(challenge)}
                    onChange={handleCheckboxChange}
                    className="checkbox-label"
                  />
                  {challenge}
                </label>
              ))}
            </div>

            <label>
              What are your company’s main digital transformation goals? (Short
              answer)
            </label>
            <input
              type="text"
              name="transformationGoals"
              value={formData.transformationGoals}
              onChange={handleChange}
              required
            />

            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2>Leadership & Commitment</h2>
            <label>
              Does your company have dedicated digital transformation leader or
              team?
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <label>
              Has your company previously developed a digital transformation
              strategy or roadmap
            </label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              required
            />
            <label>
              Are senior executives committed to implementing digital
              transformation strategy{" "}
            </label>
            <input
              type="number"
              name="yearsOfEstablishment"
              value={formData.yearsOfEstablishment}
              onChange={handleChange}
              required
            />
            <div>
              <h2>Funding & Financial support needs</h2>
              <label>
                Would your company require financial assistance for
                implementation
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />

              <label>
                Estimated budget required for digital transformation (If known)
              </label>
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
              />

              <button type="button" onClick={nextStep}>
                Next
              </button>
            </div>{" "}
          </div>
        )}

        {step > 1 && (
          <button type="button" onClick={prevStep} className="back">
            Back
          </button>
        )}
        {step === 5 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default ApplyForm;
