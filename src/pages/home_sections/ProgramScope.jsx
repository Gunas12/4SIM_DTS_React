import React from "react";
import { useTranslation } from "react-i18next";
import "./programScope.css";

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
          <img
            src="https://img.etimg.com/thumb/width-420,height-315,imgsize-120399,resizemode-75,msid-34420639/dont-even-think-of-selling-indian-markets-in-may-say-analysts.jpg"
            alt=""
            className="scope-img"
          />
          <h3 className="scope-title">{t('Digital Maturity Assessment')}</h3>
          <p className="scope-descp">
            {t('Evaluating Target Companies\' existing digital capabilities, infrastructure, and readiness to identify gaps and areas for improvement')}
          </p>
        </div>
        <div className="first-scope">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv5Kuhbs7mciUBmqfRFH7EJfNskxFRtZ9JlXK2q0BfzqfW2QyL"
            alt=""
            className="scope-img"
          />
          <h3 className="scope-title">{t('Digital Transformation Roadmap')}</h3>
          <p className="scope-descp">
            {t('Developing a strategic plan that outlines key initiatives, estimates budgets, implementation steps, and guidance on selecting third-party solution providers')}
          </p>
        </div>
        <div className="first-scope">
          <img
            src="https://i.guim.co.uk/img/media/1683c222c58354347eca54f6964df838aa287edf/101_177_4997_2998/master/4997.jpg?width=1200&quality=85&auto=format&fit=max&s=570c79dc847c46cf503592eb82f335f5"
            alt=""
            className="scope-img"
          />
          <h3 className="scope-title">{t('Digital Capability Building')}</h3>
          <p className="scope-descp">
            {t('Evaluating Target Companies\' existing digital capabilities, infrastructure, and readiness to identify gaps and areas for improvement')}
          </p>
        </div>
        <div className="first-scope">
          <img
            src="https://cdn.prod.website-files.com/661d3eb71206816721de681d/66f5774f59de0108f3f91a0f_geospatial_analytics.1.webp"
            alt=""
            className="scope-img"
          />
          <h3 className="scope-title">{t('Implementation Support')}</h3>
          <p className="scope-descp">
            {t('Evaluating Target Companies\' existing digital capabilities, infrastructure, and readiness to identify gaps and areas for improvement')}
          </p>
        </div>
        <div className="first-scope">
          <img
            src="https://cdn.mises.org/styles/responsive_4_3_870w/s3/static-page/img/numbers1_0.png.webp?itok=wLLFQEdZ"
            alt=""
            className="scope-img"
          />
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
