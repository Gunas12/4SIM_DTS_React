import React from "react";
import "./missionVision.css";
import Mission from "../../assets/images/mission.jpg";
import Vision from "../../assets/images/vision.jpg";
function MissionVision() {
  return (
    <div className="missionVision" id="Mission">
      <div>
        <h2>Mission</h2>
        <img src={Mission} alt="Mission_Img" />

        <p>
          The program aims to help businesses to achive increased operational
          efficiency, foster innovation and ensure long-term growth with
          digitalization initiatives, thereby contributing to the overall
          economic advancement of Azerbaijan.
        </p>
      </div>
      <div>
        <h2>Vision</h2>
        <img src={Vision} alt="Mission_Img" />

        <p>
          The Digital Transformation Support Program will facilitate the
          transformation of 650 Azerbaijan manufacturing companies (500 SMEs and
          150 large enterprises) by 2030 under the supervision of 4SIM and
          Ministry of Economy (MoE).
        </p>
      </div>
    </div>
  );
}

export default MissionVision;
