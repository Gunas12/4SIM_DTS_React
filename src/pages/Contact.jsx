import React from "react";
import "./contact.css";
import { useTranslation } from "react-i18next";
import Success from "../pages/home_sections/900cc44fae9f46c680a99105fabe5b096aa0144d.mp4";
import Success2 from "../../src/assets/videos/5fe3e1bf8919c60478536247dfaf1eaa5753ab36.mp4";
import { MdOutlinePlace } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <div className="video-homec">
        <video autoPlay muted loop>
          <source src={Success} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="page_content">
        <div className="contact_container">
          <div class="contact-box-wrapper">
            <div class="contact-box">
              <video autoplay muted loop playsinline class="video-bg">
                <source src={Success2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div class="content">
                <h2>Əlaqə</h2>
                <p>
                  <span>
                    <MdOutlinePlace />
                  </span>
                  Bakı, Azərbaycan, AZ1000, Üzeyir Hacıbəyli küç. 84,
                  (Government House)
                </p>
                <p>
                  <span>
                    <BsTelephone />
                  </span>
                  + 99412 310 28 00 (daxili 2418)
                </p>
                <p>
                  <span>
                    <MdOutlineMailOutline />
                  </span>
                  office@4sim.gov.az
                </p>
              </div>
            </div>

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5831174554064!2d49.8516962488609!3d40.373767139534536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dabc3b06953%3A0x64d0daa228312c9e!2zSMO2a3VtyZl0IEV2aQ!5e0!3m2!1saz!2s!4v1665042850931!5m2!1saz!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
