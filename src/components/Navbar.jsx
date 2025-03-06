import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/images/4simlogoaz.svg";
import { FiMenu, FiX } from "react-icons/fi"; 

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

  return (
    <nav>
      <div className="nav-container">
        <img src={logo} alt="Logo" className="logo" />
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
            <li>About the Program</li>
            <li>Eligibility & Prioritization</li>
            <li>Success Stories</li>
            <li>FAQ</li>
            <li>Contact us</li>
            <div className="navbar-buttons">
              <button className="apply-button">Apply Now</button>
              <button className="language-button">AZ</button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
