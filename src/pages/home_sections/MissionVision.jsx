import React, { useEffect, useRef, useState } from "react";
import "./missionVision.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import gifImage1 from "../../assets/images/eae48a63124aef9c73cac6fbe722dd28425bcc6b.gif";
import gifImage2 from "../../assets/images/f11ce2855a2b392e1fe4ee18ef747ae52a83ed98.gif";
import img1 from "../../assets/images/8f8d3461d7f75301d0b7bc1f1efcf852c5b9f28b.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/Group 11.svg";
import img4 from "../../assets/images/azerfloat.svg";
import img5 from "../../assets/images/Frame 56.svg";

function MissionVision() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const logos = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

  useEffect(() => {
    let frameId;
    const speed = 0.5;

    const scroll = () => {
      if (sliderRef.current && !isDragging) {
        sliderRef.current.scrollLeft += speed;
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(frameId);
  }, [isDragging]);

  // Manual drag scroll
  useEffect(() => {
    const slider = sliderRef.current;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
      slider.style.cursor = "grabbing";
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
      slider.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      slider.style.cursor = "grab";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; // Sensitivity
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="mv">
      <section className="mission-vision">
        <div className="mcontainer">
          <div className="mcard mission">
            <div className="circle-icon">
              <img src={gifImage1} alt="Mission Icon" />
            </div>
            <div className="content">
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
            <div className="content">
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
        <div className="logo-slider-container" ref={sliderRef}>
          {[...logos, ...logos].map((img, idx) => (
            <img key={idx} src={img} alt={`logo-${idx}`} className="logo-img" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
