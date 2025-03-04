import React from "react";
import "./footer.css";
import LogoEn from "../assets/images/4simlogoen.png";
function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <div className="footer-logo">
          <img src={LogoEn} alt="4SIM_logo" />
        </div>
        <p>&copy; 2025. All rights reserved.</p>
        <p></p>
      </div>
    </div>
  );
}

export default Footer;
