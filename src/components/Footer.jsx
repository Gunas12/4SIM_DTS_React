import React from "react";
import "./footer.css";
import azin from "../assets/images/azin-loog.png";
import im from "../assets/images/fda01ab805d61c623fe3be09751f78da5c49942a.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import LogoAz from "../assets/images/4SIM.svg";
import LogoEn from "../assets/images/4simlogoen.png";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const logo = i18n.language === "az" ? LogoAz : LogoEn;
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footerh">
          <div className="footer-logo">
            <img src={azin} alt="Azin Logo" className="flogo1" />

            <img src={logo} alt="4SIM_logo" className="footer-logo-img" />
            <div className="footer-divider"></div>
            <div className="footer-text">
              <p className="fp">{t("INDUSTRY 4.0 READİNESS PROGRAM")}</p>
            </div>
          </div>

          <div className="footer-icons">
            <Link to="https://www.facebook.com/4sim.gov.az">
              <FaFacebook />
            </Link>

            <Link to="https://www.instagram.com/c4ir_azerbaijan/">
              <IoLogoInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/4simgovaz/
"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>&copy; {t("2025. All rights reserved.")}</p>
      </div>
    </div>
  );
}

export default Footer;
