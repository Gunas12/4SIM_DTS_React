import React from "react";
import "./missionVision.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import gifImage1 from "../../assets/images/eae48a63124aef9c73cac6fbe722dd28425bcc6b.gif";
import gifImage2 from "../../assets/images/f11ce2855a2b392e1fe4ee18ef747ae52a83ed98.gif";
import img1 from "../../assets/images/8f8d3461d7f75301d0b7bc1f1efcf852c5b9f28b.png";
import img2 from "../../assets/images/img2.png"; /*
import img3 from "../../assets/images/Group 11.svg";
import img4 from "../../assets/images/azerfloat.svg";
import img5 from "../../assets/images/Frame 56.svg";*/
import img3 from "../../assets/images/Property 1=image 1.png";
import img4 from "../../assets/images/Property 1=logoSecond 1.png";
import img5 from "../../assets/images/Property 1=logo 2.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

function MissionVision() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const logos = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

  return (
    <div className="mv">
      <section className="mission-vision">
        <div className="mcontainer">
          <div className="mcard mission">
            <div className="circle-icon">
              <img src={gifImage1} alt="Mission Icon" />
            </div>
            <div className="contenta">
              <h3 className="mh3">{t("Our Mission")}</h3>
              <p className="mp">
                {t(
                  "The aim of the program is to support the efficiency and long-term growth of businesses through digitalization and innovation, thereby contributing to the overall development of Azerbaijan’s economy."
                )}
              </p>
            </div>
          </div>

          <div className="mcard vision">
            <div className="circle-icon">
              <img src={gifImage2} alt="Vision Icon" />
            </div>
            <div className="contenta">
              <h3 className="mh3">{t("Our Vision")}</h3>
              <p className="mp">
                {t(
                  "The “Industry 4.0 Readiness” Program, supported by 4SIM and the Ministry of Economy, aims to drive the digital transformation of manufacturing-oriented enterprises in our country by 2030."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="logo-slider">
        <div className="logo-slider-container">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            loop={true}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {logos.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`logo-${index}`} className="logo-img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
