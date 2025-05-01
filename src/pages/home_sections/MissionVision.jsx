import React from "react";
import "./missionVision.css";
import Mission from "../../assets/images/mission.jpg";
import Vision from "../../assets/images/vision.jpg";
import { useTranslation } from "react-i18next";
import gifImage1 from "../../assets/images/eae48a63124aef9c73cac6fbe722dd28425bcc6b.gif";
import gifImage2 from "../../assets/images/f11ce2855a2b392e1fe4ee18ef747ae52a83ed98.gif";
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
      </div>
    </section>
  );
}

export default MissionVision;
