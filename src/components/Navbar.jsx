import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import azin from "../assets/images/azin-loog.png";
import logo2 from "../assets/images/Logo.png";
import LogoAz from "../assets/images/4SIM.svg";
import LogoEn from "../assets/images/4simlogoen.png";
const menuReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
};

const Navbar = () => {
  const { t } = useTranslation();
  const [state, dispatch] = useReducer(menuReducer, { isOpen: false });
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "az" ? "en" : "az");
  };
  const logo = i18n.language === "az" ? LogoAz : LogoEn;
  return (
    <nav>
      <div className="nav-container">
        <div className="naav-logo">
          <Link to="/">
            <img src={azin} alt="Azin Logo" className="flogo1" />
            <img src={logo} alt="4SIM_logo" className="naav-logo-img" />
          </Link>
          <div className="naav-divider"></div>
          <div className="naav-text">
            <p className="fp">{t("INDUSTRY 4.0 READİNESS PROGRAM")}</p>
          </div>
        </div>
        <div
          className="menu-icon"
          onClick={() => dispatch({ type: "TOGGLE_MENU" })}
        >
          {state.isOpen ? <FiX /> : <FiMenu />}
        </div>

        <div className={`navbar-ul-div ${state.isOpen ? "open" : ""}`}>
          <ul>
            {/* <li>
              <Link to="/" onClick={() => dispatch({ type: "TOGGLE_MENU" })}>
                {t("About Program")}
              </Link> 
            </li>*/}
            <li>
              <Link
                to="/eligibity"
                onClick={() => dispatch({ type: "TOGGLE_MENU" })}
              >
                {t("Eligibility & Prioritization")}
              </Link>
            </li>
            <li>
              <Link
                to="/successstories"
                onClick={() => dispatch({ type: "TOGGLE_MENU" })}
              >
                Uğurlarımız
                {/* {t("Success Stories")} */}
              </Link>
            </li>
            <li>
              <Link to="/fag" onClick={() => dispatch({ type: "TOGGLE_MENU" })}>
                {t("FAQ")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => dispatch({ type: "TOGGLE_MENU" })}
              >
                Əlaqə
                {/* {t("Contact us")} */}
              </Link>
            </li>
            <div className="navbar-buttons">
              <Link
                to="/apply"
                onClick={() => dispatch({ type: "TOGGLE_MENU" })}
              >
                <button className="apply-button">
                  Müraciət et
                  {/* {t("Apply Now")} */}
                </button>
              </Link>
              <button
                className="language-button"
                id="lang"
                onClick={toggleLanguage}
              >
                {i18n.language === "az" ? "EN" : "AZ"}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
