// Footer.js
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="footer bg-color-1">
      <div className="social-icons-container">
        <a href="https://www.facebook.com/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
      </div>
      <p className="footer bg-color-1">
        &copy; 2024 Slice & Sizzle. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
