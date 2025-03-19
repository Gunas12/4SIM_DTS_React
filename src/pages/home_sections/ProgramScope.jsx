import React from "react";
import { useTranslation } from "react-i18next";
import "./programScope.css";
import DigitalMaturity from "../home_sections/digital_maturity.mp4";
import DigitalTransformation from "../home_sections/digital_transformation.mp4";
import DigitalSkills from "../home_sections/digital_skills.mp4";
import ImplementationSupport from "../home_sections/implementtation_support.mp4";
import FinancialSupport from "../home_sections/financial_support.mp4";



const ProgramScope = () => {
  const { t } = useTranslation();

  return (
    <div className="program-main-container" id="Scope">
      <div className="program-first-div">
        <h2 style={{ textAlign: "center" }} className="program-title">
          {t('Program Scope')}
        </h2>
        <p style={{ textAlign: "center" }} className="program-descp">
          {t('Companies selected for the program, referred to as Target Companies,')}
        </p>
        <p style={{ textAlign: "center" }} className="program-descp">
          {t('will receive tailored support to achieve five key objectives:')}
        </p>
      </div>
      <div className="program-second-div">
        <div className="first-scope">
            <video 
               className="scope-video"
               autoPlay muted loop>
                 <source src={DigitalMaturity} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
                      <h3 className="scope-title">{t('Digital Maturity Assessment')}</h3>
          <p className="scope-descp">
            {t('Evaluating Target Companies\' existing digital capabilities, infrastructure, and readiness to identify gaps and areas for improvement')}
          </p>
        </div>
        <div className="first-scope">
        <video 
               className="scope-video"
               autoPlay muted loop>
                 <source src={DigitalTransformation} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
          <h3 className="scope-title">{t('Digital Transformation Roadmap')}</h3>
          <p className="scope-descp">
            {t('Developing a strategic plan that outlines key initiatives, estimates budgets, implementation steps, and guidance on selecting third-party solution providers')}
          </p>
        </div>
        <div className="first-scope">
        <video 
               className="scope-video"
               autoPlay muted loop>
                 <source src={DigitalSkills} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
          <h3 className="scope-title">{t('Digital Capability Building')}</h3>
          <p className="scope-descp">
            {t('Evaluating Target Companies\' existing digital capabilities, infrastructure, and readiness to identify gaps and areas for improvement')}
          </p>
        </div>
        <div className="first-scope">
        <video 
               className="scope-video"
               autoPlay muted loop>
                 <source src={ImplementationSupport} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
          <h3 className="scope-title">{t('Implementation Support')}</h3>
          <p className="scope-descp">
            {t('Evaluating Target Companies\' existing digital capabilities, infrastructure, and readiness to identify gaps and areas for improvement')}
          </p>
        </div>
        <div className="first-scope">
        <video 
               className="scope-video"
               autoPlay muted loop>
                 <source src={FinancialSupport} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
          <h3 className="scope-title">{t('Financial Assistance')}</h3>
          <p className="scope-descp">
            {t('Evaluating Target Companies\' existing digital capabilities, infrastructure, and readiness to identify gaps and areas for improvement')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramScope;
