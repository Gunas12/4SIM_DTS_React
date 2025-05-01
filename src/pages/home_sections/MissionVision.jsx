import React from "react";
import "./missionVision.css";

import { useTranslation } from "react-i18next";
import gifImage1 from "../../assets/images/eae48a63124aef9c73cac6fbe722dd28425bcc6b.gif";
import gifImage2 from "../../assets/images/f11ce2855a2b392e1fe4ee18ef747ae52a83ed98.gif";
import img1 from "../../assets/images/8f8d3461d7f75301d0b7bc1f1efcf852c5b9f28b.png";
import img2 from "../../assets/images/fda01ab805d61c623fe3be09751f78da5c49942a.png";
import img3 from "../../assets/images/Group 11.svg";
import img4 from "../../assets/images/azerfloat.svg";
import img5 from "../../assets/images/Frame 56.svg";
function MissionVision() {
  const { t } = useTranslation();

  return (
    <section className="mission-vision">
      <div className="mcontainer">
        <div className="mcard mission">
          <div className="circle-icon">
            <img src={gifImage1} alt="Mission Icon" />
          </div>
          <div className="content">
            <h3 className="mh3">{t("Missiyamız")}</h3>
            <p className="mp">
              Proqramın məqsədi bizneslərin rəqəmsallaşma və innovasiya yolu ilə
              səmərəliliyinin və uzunmüddətli artımının dəstəklənməsi, bununla
              da Azərbaycanın iqtisadiyyatının ümumi inkişafına töhfə verməkdir.
            </p>
          </div>
        </div>

        <div className="mcard vision">
          <div className="circle-icon">
            <img src={gifImage2} alt="Vision Icon" />
          </div>
          <div className="content">
            <h3 className="mh3">{t("Vizyonumuz")}</h3>
            <p className="mp">
              “Sənaye 4.0 Hazırlıq” Proqramı ilə 2030-cu ilədək 4SIM və
              İqtisadiyyat Nazirliyinin dəstəyi ilə ölkəmizin istehsal yönümlü
              müəssisələrinin rəqəmsal transformasiyasına hədəflənmişdir.
            </p>
          </div>
        </div>
        <div className="mfdf">
          <div className="mfd">
            <img className="mfimg mfimg1" src={img1} alt="logo 1" />
            <img className="mfimg mfimg2" src={img2} alt="logo 2" />
            <img className="mfimg mfimg3" src={img3} alt="logo 3" />
            <img className="mfimg mfimg4" src={img4} alt="logo 4" />
            <img className="mfimg mfimg5" src={img5} alt="logo 5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
