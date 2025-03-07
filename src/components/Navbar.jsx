import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logoAZ from "../assets/images/4simlogoaz.svg";
import logoEng from "../assets/images/4simlogoen.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
const menuReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
};

const Navbar = () => {
  const [state, dispatch] = useReducer(menuReducer, { isOpen: false });
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "az" ? "en" : "az");
  };
  const logo = i18n.language === "az" ? logoAZ : logoEng;
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="divider"></div>
        <div className="digital-div">
          <p className="digital">Rəqəmsal</p>
          <p className="digital">Transformasiya</p>
          <p className="digital">Proqramı</p>
        </div>

        <div
          className="menu-icon"
          onClick={() => dispatch({ type: "TOGGLE_MENU" })}
        >
          {state.isOpen ? <FiX /> : <FiMenu />}
        </div>

        <div className={`navbar-ul-div ${state.isOpen ? "open" : ""}`}>
  <ul>
    <li>
      <Link to="/about" onClick={() => dispatch({ type: "TOGGLE_MENU" })}>
        About the Program
      </Link>
    </li>
    <li>
      <Link to="/eligibity" onClick={() => dispatch({ type: "TOGGLE_MENU" })}>
        Eligibility & Prioritization
      </Link>
    </li>
    <li>
      <Link to="/successstories" onClick={() => dispatch({ type: "TOGGLE_MENU" })}>
        Success Stories
      </Link>
    </li>
    <li>
      <Link to="/faq" onClick={() => dispatch({ type: "TOGGLE_MENU" })}>
        FAQ
      </Link>
    </li>
    <li>
      <Link to="/contact" onClick={() => dispatch({ type: "TOGGLE_MENU" })}>
        Contact us
      </Link>
    </li>
    <div className="navbar-buttons">
      <Link to="/apply" onClick={() => dispatch({ type: "TOGGLE_MENU" })}>
        <button className="apply-button">Apply Now</button>
      </Link>
      <button className="language-button" onClick={toggleLanguage}>
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
