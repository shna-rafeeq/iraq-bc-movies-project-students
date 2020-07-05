import React from "react";
import "./Footer.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="main-footer">
      <small style={{ marginRight: "20px" }}>Developed with ❤ by shna</small>
      <a href="https://github.com/shna-rafeeq" style={{ color: "white" }}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
