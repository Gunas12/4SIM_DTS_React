import React, { useState } from "react";
import "./fag.css";
import Success from "../assets/videos/success.mp4";
function Fag() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="Fagg">
      <div className="video-home1">
        <video autoPlay muted loop>
          <source src={Success} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-title" style={{ color: "white" }}>
          <h3>Frequently </h3>
          <h3>Asked Question</h3>
        </div>
      </div>
      <div className="Fag">
        <div className="faq-container">
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(0)}>
              When will I find out if my company is eligible for the program?
              <span className={`faq-icon ${activeIndex === 0 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 0 ? "active" : ""}`}>
              You will receive a notification regarding your eligibility{" "}
              <b>within one month</b> after submitting your applpiication. THe
              eligibility review includes an assessment based on the program's
              criteria, such as company size, industry, and digital readiniess.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(1)}>
              When will I know if my company is prioritized for participation?
              <span className={`faq-icon ${activeIndex === 1 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 1 ? "active" : ""}`}>
              If your company is selected as a
              <b>
                prioritized participant, 4SIM authorities will reach out at
                least three month in advance.
              </b>
              This allows for detailed discussions on your company's digital
              transformation roadmap and preparation for the program.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(2)}>
              How does 4SIM assist companies in securing funding from SIF?
              <span className={`faq-icon ${activeIndex === 2 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 2 ? "active" : ""}`}>
              <b>4SIM offers comprehensive support</b> throughout the funding
              application process:
              <ul>
                <li>
                  <b>
                    Document Preparation: We help you compile the necessary
                    documents for submitting to SIF.
                  </b>
                </li>
                <li>
                  <b>Direct Contact with SIF Authorities:</b> We'll facilitate
                  communication between your company and SIF, ensuring smooth
                  processing of your funding request.
                </li>
                <li>
                  <b>Advisory Services:</b> Our experts guide you in identifying
                  the most appropriate funding options and ensuring that your
                  request aligns with SIF's criteria.
                </li>
              </ul>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(3)}>
              What type of funding support does my company recieve from the
              program?
              <span className={`faq-icon ${activeIndex === 3 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 3 ? "active" : ""}`}>
              The <b>Digital Tranformation Program</b> provides{" "}
              <b>financial support in two key areas:</b>
              <ul>
                <li>
                  <b>Assessment & Roadmap Development: </b> Companies will
                  receive grants to fund <b>digital maturity assessments</b> and
                  the development of a{" "}
                  <b>customized digital transformation roadmap.</b>
                </li>
                <li>
                  <b>Implementation Support: </b> Companies are eligible for{" "}
                  <b>low-interest loans from SIF</b> to implement their
                  transformation plans. These loans help cover the costs of
                  technology adoption, infrastructure upgrades, and related
                  initiatives.
                </li>
              </ul>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(4)}>
              Are the grants for consulting services covered by the program?
              <span className={`faq-icon ${activeIndex === 4 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 4 ? "active" : ""}`}>
              Yes, the <b>local digital consultancy services</b> for conducting
              digital maturity assessments, developing transformation roadmaps,
              and providing implementation support will be fully funded through
              a <b>grant</b>. Your company will not incur costs for these
              services.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(5)}>
              How long does the funding process take?
              <span className={`faq-icon ${activeIndex === 5 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 5 ? "active" : ""}`}>
              The timeline for securing <b>financial assistance </b>depends on
              the <b>complexity of your transformation plan</b> and the{" "}
              <b>SIF approval process.</b> On average, you can expect the
              process to take between <b>1 to 3 months</b>, from initial
              application to final approval and funding disbursement.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(6)}>
              Will the portal remain open for applications throughout the year?
              <span className={`faq-icon ${activeIndex === 6 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 6 ? "active" : ""}`}>
              Yes, the <b>application portal will remain open permanently,</b>{" "}
              as this is a <b>continuing program </b> designed to support
              companies year-round. You can apply the program at any time and
              join in one of the prioritized cycles.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(7)}>
              What if my company is not selected initially? Can we reapply?
              <span className={`faq-icon ${activeIndex === 7 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 7 ? "active" : ""}`}>
              Yes, if your company is ot selected during the current cycle, you
              can <b>reapply in future cycles</b>. In fact, we encourage
              companies to apply again after enhancing their digital or
              addressing any gaps identified during the selection process.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(8)}>
              How do we know if our company is ready for digital transformation?
              <span className={`faq-icon ${activeIndex === 8 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 8 ? "active" : ""}`}>
              As part of the program, we'll conduct a
              <b>Digital maturity Assessment </b> to evaluate your current
              digital capabilities. THis process will hep you identify areas for
              improvement and create a personalized roadmap for transformation.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(9)}>
              What kind of training and capability-building support does the
              program offer?
              <span className={`faq-icon ${activeIndex === 9 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 9 ? "active" : ""}`}>
              The <b>Digital Transformation Program</b> includes{" "}
              <b>training workshops, seminars, and online resources</b> to help
              your team build essential digital skills. This includes everthing
              from basic digital literacy to specialized training on specific
              technologies like
              <b>cloud computing, AI, automation, and cybersecurity.</b>
            </div>
          </div>
          <div className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAccordion(10)}
            >
              Can we use the program's funding for other purposes?
              <span
                className={`faq-icon ${activeIndex === 10 ? "active" : ""}`}
              >
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 10 ? "active" : ""}`}>
              The program's financial support is desined specifically for{" "}
              <b>digital transformation-related activities</b>, such as:
              <ul>
                <li>Conductiong assessments</li>
                <li>Developing roadmaps</li>
                <li>Technology adoption</li>
                <li>
                  Implementation costs (e.g., hardware, software, infrastructure
                  upgrades)
                </li>
                Any other use of funds outside of the approved scope would
                require prior approval from <b>4SIM.</b>
              </ul>
            </div>
          </div>
          <div className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAccordion(11)}
            >
              Will participating in the program help improve our competitiveness
              internationally?
              <span
                className={`faq-icon ${activeIndex === 11 ? "active" : ""}`}
              >
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 11 ? "active" : ""}`}>
              Absolutely! By embracing digital transformation, your company can
              gain a competitive edge in global markets. The program focuses on
              improving operational efficiency, innovation, and scalability,
              which will position your business for success both locally and
              internationally.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fag;
